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
    listProperties: ['name', 'url'],
    showProperties: ['name', 'url'],
    properties: {
      url: {
        isVisible: {
          edit: false,
        },
      },
    },
    actions: {
      new: {
        before: [validateForm],
      },
      edit: {
        before: [validateForm],
      },
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
      multiple: false,
    }),
    uploadFileFeature({}),
  ],
});

async function validateForm(request, context) {
  const { ValidationError } = await import('adminjs');
  const { payload, method } = request;

  if (method !== 'post') return request;
  const { name } = payload;
  const errors: any = {};

  if (!name || !name.trim().length) {
    errors.name = {
      message: 'Name is required',
    };
  } else if (!new RegExp(/^[a-zA-Z0-9 -_]+$/, 'gi').test(name)) {
    errors.name = {
      message: 'Name must contain latin letters',
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request;
}
