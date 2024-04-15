import { ALLOWED_FILE_FORMATS } from './types';
import { createHash } from 'node:crypto';

export const generateModelFileName = (
  fileExtension: ALLOWED_FILE_FORMATS,
  fileName: string,
) => {
  const createdDateTime = new Date().getTime();
  const original = `model-${fileName}-${createdDateTime}`;
  const hash = createHash('md5').update(original).digest('hex');
  return `${hash}.${fileExtension}`;
};

export const getFileExtension = (fileName: string): ALLOWED_FILE_FORMATS =>
  fileName.split('.').pop() as ALLOWED_FILE_FORMATS;
