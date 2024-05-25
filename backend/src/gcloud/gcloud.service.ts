import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GcloudService {
  private storage: Storage;
  private bucketName: string;

  constructor(private readonly configService: ConfigService) {
    const gcAuthFileUrl = this.configService.get<string>(
      'GOOGLE_APPLICATION_CREDENTIALS',
    );
    const projectId = this.configService.get<string>('FIREBASE_APP_PROJECT_ID');
    this.bucketName = this.configService.get<string>(
      'FIREBASE_APP_STORAGE_BUCKET',
    );
    this.storage = new Storage({
      projectId,
      keyFilename: gcAuthFileUrl,
    });
    this.configureBucketCors();
  }

  private async configureBucketCors() {
    await this.storage.bucket(this.bucketName).setCorsConfiguration([
      {
        maxAgeSeconds: 3600,
        method: ['GET', 'POST'],
        origin: ['*'],
        responseHeader: ['Content-Type'],
      },
    ]);
  }
}
