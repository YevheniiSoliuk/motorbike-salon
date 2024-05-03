import { ConfigService } from '@nestjs/config';
import { dataSource } from 'src/database/data-source';
import { FirebaseService } from 'src/firebase/firebase.service';
import { IMAGE_FILE_MIME_TYPES } from '../constants';
import { getFileExtension } from 'src/models/utils';

export const afterFileUpload = async (res, req, context) => {
  const { id } = context.record.params;
  const filename = req.files['file.0'].name;
  const config = new ConfigService();
  const firebase = new FirebaseService(config);
  const fileExtension = getFileExtension(filename);
  const isImageFile = IMAGE_FILE_MIME_TYPES.includes(`image/${fileExtension}`);
  const folderName = isImageFile ? 'images' : 'models';
  const link = await firebase.getFileLink(filename, folderName);
  const repositoryToUpdate = isImageFile ? 'image' : 'model';

  await dataSource.getRepository(repositoryToUpdate).update(
    {
      id,
    },
    {
      url: link,
    },
  );

  return res;
};
