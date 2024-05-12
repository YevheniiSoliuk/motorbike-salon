import Image from 'src/images/entities/image.entity';
import {
  GCS_CREDENTIALS,
  IMAGE_FILE_MIME_TYPES,
  MAX_IMAGE_FILE_SIZE,
} from '../constants';

export const ImageResource = (
  uploadFeature,
  componentLoader,
  uploadFileFeature,
) => ({
  resource: Image,
  options: {
    navigation: {
      icon: 'Image',
    },
  },
  features: [
    uploadFeature.default({
      componentLoader: componentLoader,
      provider: { gcp: GCS_CREDENTIALS },
      validation: {
        mimeTypes: IMAGE_FILE_MIME_TYPES,
        maxSize: MAX_IMAGE_FILE_SIZE,
      },
      properties: {
        key: 'key',
        bucket: 'images',
      },
      uploadPath: (record, filename) => {
        return `images/${filename}`;
      },
    }),
    uploadFileFeature({}),
  ],
});
