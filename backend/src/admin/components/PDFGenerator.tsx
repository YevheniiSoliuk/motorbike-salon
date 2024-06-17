import React, { useEffect, useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import { format } from 'date-fns';
import { getConfigurationById } from '../api';
import { AxiosResponse } from 'axios';
import { generate } from '@pdfme/generator';
import getTemplate from '../pdf-templates/configuration-template2';
// import type Template from '@pdfme/common';
import { GenerateProps } from '@pdfme/common';
import { Viewer } from '@pdfme/ui';
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
      const { data }: AxiosResponse<Configuration> =
        await getConfigurationById(id);
      console.log(data.product.models[0].additions);
      const date = new Date(updatedAt);
      const userData = data.user
        ? `${data.user.firstName} ${data.user.lastName}`
        : `${data.clientFirstName} ${data.clientLastName}`;
      const userEmail = data.user ? data.user.email : data.clientEmail;
      const logoInBase64 = await imageUrlToBase64(LOGO_URL);
      const productImageInBase64 = await imageUrlToBase64(
        data.product.images[0].image.url,
      );
      let baseItemsPrice = 0;
      let additionalItemsPrice = 0;
      const baseItemsImages = [];
      const additionalItemsImages = [];
      const baseItems = [];
      const additionalItems = [];
      const imageSize = 13.75;
      const cellPadding = 2;
      const startPositionForAdditionalItemsTable = 70;
      const startPositionForBaseItemsTable = 184;
      let elemCountForBaseItemsTable = 0;
      let elemCountForAdditionalItemsTable = 0;
      for (const addition of data.product.models[0].additions) {
        if (!addition.isDefault) {
          additionalItemsPrice += addition.addition.price;
          const yPosition =
            startPositionForAdditionalItemsTable +
            (imageSize + cellPadding * 2) * elemCountForAdditionalItemsTable;
          additionalItemsImages.push({
            content: await imageUrlToBase64(
              addition.addition.images[0].image.url,
            ),
            position: { x: 14.75, y: yPosition },
          });
          additionalItems.push([
            addition.id.toString(),
            addition.name,
            `${addition.addition.price} PLN`,
            `${addition.addition.price} PLN`,
          ]);
          elemCountForAdditionalItemsTable += 1;
        } else {
          baseItemsPrice += addition.addition.price;
          const yPosition =
            startPositionForBaseItemsTable +
            (imageSize + cellPadding * 2) * elemCountForBaseItemsTable;
          baseItemsImages.push({
            content: await imageUrlToBase64(
              addition.addition.images[0].image.url,
            ),
            position: { x: 14.75, y: yPosition },
          });
          baseItems.push([
            addition.id.toString(),
            addition.name,
            `${addition.addition.price} PLN`,
            `${addition.addition.price} PLN`,
          ]);
          elemCountForBaseItemsTable += 1;
        }
      }

      const summaryItems = [
        ['Base configuration', `${baseItemsPrice} PLN`],
        ['Additional configuration', `${additionalItemsPrice} PLN`],
      ];

      const inputs = [
        {
          logo: logoInBase64,
          modelName: data.product.name,
          offerFromDate: `Offer from: ${format(date, 'dd.MM.yyyy')}`,
          offerNumber: `Offer number: ${uuid}`,
          createdForNameLastName: `Created for: ${userData}`,
          createdForEmail: `Email: ${userEmail}`,
          oneTimePasswordContent:
            `Password: ${data.user.oneTimePassword}` ??
            'Password has been sent on email',
          qrCode: `${BASE_CLIENT_URL}models/${id}`,
          modelImage: productImageInBase64,
          baseConfigurationTable: JSON.stringify(
            baseItems.filter((addition) => addition),
          ),
          additionalConfigurationTable: JSON.stringify(
            additionalItems.filter((addition) => addition),
          ),
          summaryConfigurationTable: JSON.stringify(summaryItems),
          totalPrice: `${data.product.price + baseItemsPrice + additionalItemsPrice} PLN`,
          creatorName: `Created by ${data.createdBy.firstName} ${data.createdBy.lastName}`,
        },
      ];

      // const viewer = new Viewer({
      //   domContainer: viewerRef.current,
      //   template: template3 as any,
      //   inputs,
      // });

      const template = getTemplate({
        isMoreThanThreeElemInTable: baseItems.length > 3,
        baseItemsImages,
        additionalItemsImages,
      });
      generate({
        template: template as any,
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
      // const { data }: AxiosResponse<string> =
      //   await getConfigurationPDFTemplate(id);
      // const body = new DOMParser().parseFromString(data, 'text/html').body;
      // const doc = new jsPDF({
      //   orientation: 'p',
      //   unit: 'mm',
      //   format: 'a4',
      //   putOnlyUsedFonts: true,
      //   floatPrecision: 'smart',
      // });
      // doc.html(body, {
      //   callback: function (doc) {
      //     const splitedName = (name as string).split(' ');
      //     const filename = `${splitedName.reduce((acc, curVal) => (acc = `${acc}_${curVal}`), '')}.pdf`;
      //     setFilename(filename);
      //     doc.save(`../../pdfs/${filename}`);
      //   },
      //   x: 10,
      //   y: 10,
      //   image: {
      //     type: 'png',
      //     quality: 2,
      //   },
      //   // fontFaces: [
      //   //   {
      //   //     family: '"Open Sans", sans-serif',
      //   //     src: [
      //   //       {
      //   //         url: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700;&display=swap',
      //   //         format: 'truetype',
      //   //       },
      //   //     ],
      //   //     style: 'normal',
      //   //     weight: 400,
      //   //   },
      //   // ],
      // });
    })();
  }, [id]);

  return <div ref={viewerRef} id='viewer'></div>;
};

export default PDFGenerator;
