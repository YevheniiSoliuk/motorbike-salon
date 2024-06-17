import { Template } from '@pdfme/common';

type ItemImage = {
  content: string;
  position: {
    x: number;
    y: number;
  };
};

type TemplateProps = {
  isMoreThanThreeElemInTable: boolean;
  baseItemsImages: ItemImage[];
  additionalItemsImages: ItemImage[];
};

const getTemplate: ({
  isMoreThanThreeElemInTable,
  baseItemsImages,
  additionalItemsImages,
}: TemplateProps) => any = ({
  isMoreThanThreeElemInTable,
  baseItemsImages,
  additionalItemsImages,
}) => {
  const baseImages = {} as Object;
  baseItemsImages.forEach((baseItemImage, index) => {
    Object.assign(baseImages, {
      [`itemImage${index + 1}`]: {
        type: 'readOnlyImage',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-off"><line x1="2" x2="22" y1="2" y2="22"/><path d="M10.41 10.41a2 2 0 1 1-2.83-2.83"/><line x1="13.5" x2="6" y1="13.5" y2="21"/><line x1="18" x2="21" y1="12" y2="15"/><path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"/><path d="M21 15V5a2 2 0 0 0-2-2H9"/></svg>',
        content: baseItemImage.content,
        position: baseItemImage.position,
        width: 23,
        height: 23,
        rotate: 0,
        opacity: 1,
        readOnly: true,
      },
    });
  });

  const additionalImages = {} as Object;
  additionalItemsImages.forEach((additionalImage, index) => {
    Object.assign(additionalImages, {
      [`itemImage${index + 1}`]: {
        type: 'readOnlyImage',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-off"><line x1="2" x2="22" y1="2" y2="22"/><path d="M10.41 10.41a2 2 0 1 1-2.83-2.83"/><line x1="13.5" x2="6" y1="13.5" y2="21"/><line x1="18" x2="21" y1="12" y2="15"/><path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"/><path d="M21 15V5a2 2 0 0 0-2-2H9"/></svg>',
        content: additionalImage.content,
        position: additionalImage.position,
        width: 23,
        height: 23,
        rotate: 0,
        opacity: 1,
        readOnly: true,
      },
    });
  });

  console.log(baseImages);
  console.log(additionalImages);

  return {
    schemas: [
      {
        logo: {
          type: 'image',
          position: { x: 180, y: 10 },
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-off"><line x1="2" x2="22" y1="2" y2="22"/><path d="M10.41 10.41a2 2 0 1 1-2.83-2.83"/><line x1="13.5" x2="6" y1="13.5" y2="21"/><line x1="18" x2="21" y1="12" y2="15"/><path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"/><path d="M21 15V5a2 2 0 0 0-2-2H9"/></svg>',
          width: 20,
          height: 20,
          rotate: 0,
          opacity: 1,
        },
        modelName: {
          type: 'text',
          position: { x: 10, y: 10 },
          width: 130,
          height: 10,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'middle',
          fontSize: 14,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        offerFromDate: {
          type: 'text',
          position: { x: 10, y: 20 },
          width: 130,
          height: 6,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'middle',
          fontSize: 10,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        offerNumber: {
          type: 'text',
          position: { x: 10, y: 26 },
          width: 130,
          height: 6,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'middle',
          fontSize: 10,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        createdForNameLastName: {
          type: 'text',
          position: { x: 10, y: 50 },
          width: 150,
          height: 8,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'top',
          fontSize: 12,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        createdForEmail: {
          type: 'text',
          content: 'Email',
          position: { x: 10, y: 58 },
          width: 150,
          height: 8,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'top',
          fontSize: 12,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        oneTimePasswordContent: {
          type: 'text',
          content: 'Password',
          position: { x: 10, y: 66 },
          width: 150,
          height: 8,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'top',
          fontSize: 12,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        qrCode: {
          type: 'qrcode',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-qr-code"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>',
          position: { x: 170, y: 47 },
          backgroundColor: '#ffffff',
          barColor: '#000000',
          width: 30,
          height: 30,
          rotate: 0,
          opacity: 1,
        },
        modelImage: {
          type: 'image',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
          position: { x: 10, y: 78.2 },
          width: 189.65,
          height: 72.28,
          rotate: 0,
          opacity: 1,
        },
        baseConfigurationTitle: {
          type: 'readOnlyText',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
          content: 'Base configuration',
          position: { x: 10, y: 165.79 },
          width: 190,
          height: 10,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'top',
          fontSize: 18,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          readOnly: true,
          fontName: 'NotoSerifJP-Regular',
        },
        baseConfigurationTable: {
          type: 'table',
          position: { x: 10, y: 177.92 },
          width: 190,
          height: 62.1048,
          showHead: true,
          head: ['Image', 'Nname', 'Price', 'Total'],
          headWidthPercentages: [17, 45, 19, 19],
          fontName: 'NotoSerifJP-Regular',
          tableStyles: { borderWidth: 0, borderColor: '#000000' },
          headStyles: {
            fontName: 'NotoSerifJP-Regular',
            fontSize: 13,
            characterSpacing: 0,
            alignment: 'center',
            verticalAlignment: 'middle',
            lineHeight: 1,
            fontColor: '#2f40d6',
            borderColor: '#2f40d6',
            backgroundColor: '#d7daf7',
            borderWidth: { top: 0.2, right: 0.2, bottom: 0.2, left: 0.2 },
            padding: { top: 2, right: 2, bottom: 2, left: 2 },
          },
          bodyStyles: {
            fontName: 'NotoSerifJP-Regular',
            fontSize: 13,
            characterSpacing: 0,
            alignment: 'center',
            verticalAlignment: 'middle',
            lineHeight: 3,
            fontColor: '#000000',
            borderColor: '#000000',
            backgroundColor: '',
            alternateBackgroundColor: '',
            borderWidth: { top: 0.2, right: 0.2, bottom: 0.2, left: 0.2 },
            padding: { top: 2, right: 2, bottom: 2, left: 2 },
          },
          columnStyles: {
            alignment: {
              '0': 'center',
              '1': 'left',
              '2': 'center',
              '3': 'center',
            },
          },
        },
        ...baseImages,
        creatorName: {
          type: 'text',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
          content: 'Creator name',
          position: { x: 10, y: isMoreThanThreeElemInTable ? 320 : 270 },
          width: 60,
          height: 6,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'bottom',
          fontSize: 10,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        pageNumber: {
          type: 'readOnlyText',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
          content: 'Page 1 from 3',
          position: { x: 160, y: isMoreThanThreeElemInTable ? 320 : 270 },
          width: 45,
          height: 6,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'bottom',
          fontSize: 10,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          readOnly: true,
          fontName: 'NotoSerifJP-Regular',
        },
      },
      {
        logo: {
          type: 'image',
          position: { x: 180, y: 10 },
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-off"><line x1="2" x2="22" y1="2" y2="22"/><path d="M10.41 10.41a2 2 0 1 1-2.83-2.83"/><line x1="13.5" x2="6" y1="13.5" y2="21"/><line x1="18" x2="21" y1="12" y2="15"/><path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"/><path d="M21 15V5a2 2 0 0 0-2-2H9"/></svg>',
          width: 20,
          height: 20,
          rotate: 0,
          opacity: 1,
        },
        modelName: {
          type: 'text',
          position: { x: 10, y: 10 },
          width: 130,
          height: 10,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'middle',
          fontSize: 14,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        offerFromDate: {
          type: 'text',
          position: { x: 10, y: 20 },
          width: 130,
          height: 6,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'middle',
          fontSize: 10,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        offerNumber: {
          type: 'text',
          position: { x: 10, y: 26 },
          width: 130,
          height: 6,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'middle',
          fontSize: 10,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        additionalConfigurationTitle: {
          type: 'readOnlyText',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
          content: 'Additional configuration',
          position: { x: 10, y: 53 },
          width: 190,
          height: 10,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'top',
          fontSize: 18,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          readOnly: true,
          fontName: 'NotoSerifJP-Regular',
        },
        additionalConfigurationTable: {
          type: 'table',
          position: { x: 10, y: 64 },
          width: 190,
          height: 62.1048,
          showHead: true,
          head: ['Image', 'Name', 'Price', 'Total'],
          headWidthPercentages: [17, 45, 19, 19],
          fontName: 'NotoSerifJP-Regular',
          tableStyles: { borderWidth: 0.2, borderColor: '#000000' },
          headStyles: {
            fontName: 'NotoSerifJP-Regular',
            fontSize: 13,
            characterSpacing: 0,
            alignment: 'center',
            verticalAlignment: 'middle',
            lineHeight: 1,
            fontColor: '#2f40d6',
            borderColor: '#2f40d6',
            backgroundColor: '#d7daf7',
            borderWidth: { top: 0.2, right: 0.2, bottom: 0.2, left: 0.2 },
            padding: { top: 2, right: 2, bottom: 2, left: 2 },
          },
          bodyStyles: {
            fontName: 'NotoSerifJP-Regular',
            fontSize: 13,
            characterSpacing: 0,
            alignment: 'center',
            verticalAlignment: 'middle',
            lineHeight: 3,
            fontColor: '#000000',
            borderColor: '#000000',
            backgroundColor: '#ffffff',
            alternateBackgroundColor: '#ffffff',
            borderWidth: { top: 0.2, right: 0.2, bottom: 0.2, left: 0.2 },
            padding: { top: 2, right: 2, bottom: 2, left: 2 },
          },
          columnStyles: {
            alignment: {
              '0': 'center',
              '1': 'left',
              '2': 'center',
              '3': 'center',
            },
          },
        },
        ...additionalImages,
        creatorName: {
          type: 'text',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
          content: 'Creator name',
          position: { x: 10, y: isMoreThanThreeElemInTable ? 320 : 270 },
          width: 60,
          height: 6,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'bottom',
          fontSize: 10,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        pageNumber: {
          type: 'readOnlyText',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
          content: 'Page 2 from 3',
          position: { x: 160, y: isMoreThanThreeElemInTable ? 320 : 270 },
          width: 45,
          height: 6,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'bottom',
          fontSize: 10,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          readOnly: true,
          fontName: 'NotoSerifJP-Regular',
        },
      },
      {
        logo: {
          type: 'image',
          position: { x: 180, y: 10 },
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-off"><line x1="2" x2="22" y1="2" y2="22"/><path d="M10.41 10.41a2 2 0 1 1-2.83-2.83"/><line x1="13.5" x2="6" y1="13.5" y2="21"/><line x1="18" x2="21" y1="12" y2="15"/><path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"/><path d="M21 15V5a2 2 0 0 0-2-2H9"/></svg>',
          width: 20,
          height: 20,
          rotate: 0,
          opacity: 1,
        },
        modelName: {
          type: 'text',
          position: { x: 10, y: 10 },
          width: 130,
          height: 10,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'middle',
          fontSize: 14,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        offerFromDate: {
          type: 'text',
          position: { x: 10, y: 20 },
          width: 130,
          height: 6,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'middle',
          fontSize: 10,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        offerNumber: {
          type: 'text',
          position: { x: 10, y: 26 },
          width: 130,
          height: 6,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'middle',
          fontSize: 10,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        summaryLabel: {
          type: 'readOnlyText',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
          content: 'Summary',
          position: { x: 10, y: 53 },
          width: 190,
          height: 10,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'top',
          fontSize: 18,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          readOnly: true,
        },
        summaryConfigurationTable: {
          type: 'table',
          position: { x: 10, y: 64 },
          width: 190,
          height: 43.75920000000001,
          showHead: true,
          head: ['Configuration name', 'Total'],
          headWidthPercentages: [67.25613086103682, 32.74386913896316],
          fontName: 'NotoSerifJP-Regular',
          tableStyles: { borderWidth: 0, borderColor: '#000000' },
          headStyles: {
            fontName: 'NotoSerifJP-Regular',
            fontSize: 13,
            characterSpacing: 0,
            alignment: 'center',
            verticalAlignment: 'middle',
            lineHeight: 1,
            fontColor: '#2f40d6',
            borderColor: '#2f40d6',
            backgroundColor: '#d7daf7',
            borderWidth: { top: 0.2, right: 0.2, bottom: 0.2, left: 0.2 },
            padding: { top: 2, right: 2, bottom: 2, left: 2 },
          },
          bodyStyles: {
            fontName: 'NotoSerifJP-Regular',
            fontSize: 13,
            characterSpacing: 0,
            alignment: 'center',
            verticalAlignment: 'middle',
            lineHeight: 1,
            fontColor: '#000000',
            borderColor: '#000000',
            backgroundColor: '',
            alternateBackgroundColor: '',
            borderWidth: { top: 0.2, right: 0.2, bottom: 0.2, left: 0.2 },
            padding: { top: 2, right: 2, bottom: 2, left: 2 },
          },
          columnStyles: { alignment: { '0': 'center', '1': 'center' } },
        },
        totalPriceLabel: {
          type: 'readOnlyText',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
          content: 'Total price:',
          position: { x: 10, y: 120 },
          width: 65.85,
          height: 10,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'top',
          fontSize: 18,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          readOnly: true,
          fontName: 'NotoSerifJP-Regular',
        },
        totalPrice: {
          type: 'text',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
          position: { x: 124, y: 120 },
          width: 65.58,
          height: 10,
          rotate: 0,
          alignment: 'right',
          verticalAlignment: 'top',
          fontSize: 18,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        creatorName: {
          type: 'text',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
          position: { x: 10, y: isMoreThanThreeElemInTable ? 320 : 270 },
          width: 60,
          height: 6,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'bottom',
          fontSize: 10,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          fontName: 'NotoSerifJP-Regular',
        },
        pageNumber: {
          type: 'readOnlyText',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
          content: 'Page 3 from 3',
          position: { x: 160, y: isMoreThanThreeElemInTable ? 320 : 270 },
          width: 45,
          height: 6,
          rotate: 0,
          alignment: 'left',
          verticalAlignment: 'bottom',
          fontSize: 10,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: '#000000',
          backgroundColor: '',
          opacity: 1,
          readOnly: true,
          fontName: 'NotoSerifJP-Regular',
        },
      },
    ],
    basePdf: { width: 210, height: 297, padding: [10, 10, 10, 10] },
  };
};

export default getTemplate;
