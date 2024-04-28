import { ConfigService } from '@nestjs/config';
import { dataSource } from 'src/database/data-source';
import { FirebaseService } from 'src/firebase/firebase.service';

export const saveFileLink = async (res, req, context) => {
  const { id } = context.record.params;
  const filename = req.files['file.0'].name;
  const config = new ConfigService();
  const firebase = new FirebaseService(config);
  const link = await firebase.getFileLink(filename);

  await dataSource.getRepository('model').update(
    {
      id,
    },
    {
      url: link,
    },
  );

  return res;
};
