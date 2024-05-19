import Model from 'src/models/entities/model.entity';
import { GCS_CREDENTIALS, MAX_MODEL_FILE_SIZE } from '../constants';

export const ModelResource = (
  uploadFeature,
  componentLoader,
  uploadFileFeature,
) => ({
  resource: Model,
  options: {
    navigation: {
      icon: 'Layers',
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
        // mimeTypes: ['model/gltf-binary'],
        maxSize: MAX_MODEL_FILE_SIZE,
      },
      properties: {
        key: 'key',
        bucket: 'models',
      },
      uploadPath: (record, filename) => {
        return `models/${filename}`;
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
