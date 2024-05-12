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
    }),
    uploadFileFeature({}),
  ],
});
