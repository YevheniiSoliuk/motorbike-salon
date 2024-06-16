import { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import { getConfigurationPDFTemplate } from '../api';
import { AxiosResponse } from 'axios';
import { generate } from '@pdfme/generator';
import template1 from '../pdf-templates/template';
import template2 from '../pdf-templates/configuration-template';
import template3 from '../pdf-templates/configuration-template2';
// import type Template from '@pdfme/common';
import { Template, BLANK_PDF } from '@pdfme/common';
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

const PDFGenerator = (props) => {
  const { id, name, createdAt, updatedAt } = props.record.params;
  const [filename, setFilename] = useState('');
  console.log(props.record.params);

  const template: any = {
    basePdf: BLANK_PDF,
    schemas: [
      {
        a: {
          type: 'text',
          position: { x: 0, y: 0 },
          width: 10,
          height: 10,
        },
        b: {
          type: 'text',
          position: { x: 10, y: 10 },
          width: 10,
          height: 10,
        },
        c: {
          type: 'text',
          position: { x: 20, y: 20 },
          width: 10,
          height: 10,
        },
      },
    ],
  };

  const inputs = [{ a: 'a1', b: 'b1', c: 'c1' }];

  generate({
    template: template3 as any,
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
  }).then((pdf) => {
    console.log(pdf);

    // Browser
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    window.open(URL.createObjectURL(blob));
  });

  useEffect(() => {
    (async () => {
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

  return filename;
};

export default PDFGenerator;
