import React, { useEffect, useState, useRef } from 'react';
import { format } from 'date-fns';
import { getConfigurationAdditionsById, getConfigurationById } from '../api';
import { AxiosResponse } from 'axios';
import { generate } from '@pdfme/generator';
import getTemplate from '../pdf-templates/configuration-template2';
import { GenerateProps } from '@pdfme/common';
import {
  text,
  readOnlyText,
  image,
  readOnlyImage,
  svg,
  readOnlySvg,
  barcodes,
  line,
  tableBeta,
} from '@pdfme/schemas';
import Configuration from 'src/configurations/entities/configuration.entity';
import { BASE_CLIENT_URL, LOGO_URL } from './constants';
import ConfigurationAddition from 'src/configurations/configuration-addition/configuration-addition.entity';

const PDFGenerator = (props) => {
  const { id, uuid, name, createdAt, updatedAt } = props.record.params;
  const [filename, setFilename] = useState('');
  const viewerRef = useRef<HTMLDivElement | null>(null);
  console.log(props.record.params);

  const imageUrlToBase64 = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
      reader.onerror = reject;
    });
  };

  useEffect(() => {
    (async () => {
      const { data: configuration }: AxiosResponse<Configuration> =
        await getConfigurationById(id);
      const { data }: AxiosResponse<ConfigurationAddition[]> =
        await getConfigurationAdditionsById(id);

      const date = new Date(updatedAt);
      const userData = configuration.user
        ? `${configuration.user.firstName} ${configuration.user.lastName}`
        : `${configuration.clientFirstName} ${configuration.clientLastName}`;
      const userEmail = configuration.user
        ? configuration.user.email
        : configuration.clientEmail;
      const logoInBase64 = await imageUrlToBase64(LOGO_URL);
      const productImageInBase64 = await imageUrlToBase64(
        configuration.product.images[0].image.url,
      );
      let baseItemsPrice = 0;
      const baseItemsImages = [];
      const baseItems = [];
      const imageSize = 13.75;
      const cellPadding = 2;
      const startPositionForBaseItemsTable = 184;
      let elemCountForBaseItemsTable = 0;

      for (const addition of data) {
        if (!addition.productAddition.active) {
          baseItemsPrice += addition.productAddition.addition.price;
          const yPosition =
            startPositionForBaseItemsTable +
            (imageSize + cellPadding * 2) * elemCountForBaseItemsTable;
          baseItemsImages.push({
            content: await imageUrlToBase64(
              addition.productAddition.addition.images[0].image.url,
            ),
            position: { x: 14.75, y: yPosition },
          });
          baseItems.push([
            addition.productAddition.addition.id.toString(),
            addition.productAddition.addition.name,
            `${addition.productAddition.addition.price} PLN`,
            `${addition.productAddition.addition.price} PLN`,
          ]);
          elemCountForBaseItemsTable += 1;
        }
      }

      const summaryItems = [
        ['Base configuration', `${configuration.product.price} PLN`],
        ['Additional configuration', `${baseItemsPrice} PLN`],
      ];

      const inputs = [
        {
          logo: logoInBase64,
          modelName: configuration.product.name,
          offerFromDate: `Offer from: ${format(date, 'dd.MM.yyyy')}`,
          offerNumber: `Offer number: ${uuid}`,
          createdForNameLastName: `Created for: ${userData}`,
          createdForEmail: `Email: ${userEmail}`,
          oneTimePasswordContent:
            configuration.createdBy.role.name !== 'user'
              ? `Password: ${configuration.user.oneTimePassword}`
              : '',
          qrCode:
            configuration.createdBy.role.name === 'admin' ||
            configuration.createdBy.role.name === 'super-admin'
              ? `${BASE_CLIENT_URL}models/${id}`
              : `http://localhost:3001/admin/resources/Configuration/records/${id}/show`,
          modelImage: productImageInBase64,
          baseConfigurationTable: JSON.stringify(
            baseItems.filter((addition) => addition),
          ),
          summaryConfigurationTable: JSON.stringify(summaryItems),
          totalPrice: `${configuration.product.price + baseItemsPrice} PLN`,
          creatorName: configuration.createdBy
            ? `Created by ${configuration.createdBy.firstName} ${configuration.createdBy.lastName}`
            : 'Created by Super Admin',
        },
      ];

      const template = getTemplate({
        isMoreThanThreeElemInTable: baseItems.length > 3,
        baseItemsImages,
      });

      generate({
        template,
        inputs,
        plugins: {
          text,
          image,
          qrcode: barcodes.qrcode,
          readOnlyText,
          readOnlyImage,
          svg,
          readOnlySvg,
          line,
          tableBeta,
        },
      } as GenerateProps).then((pdf) => {
        console.log(pdf);

        // Browser
        const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
        window.open(URL.createObjectURL(blob));
      });
    })();
  }, [id]);

  return (
    <div
      ref={viewerRef}
      id='viewer'
      style={{ width: '100%', height: '700px' }}
    ></div>
  );
};

export default PDFGenerator;
