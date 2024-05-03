import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  FirebaseStorage,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { ConfigService } from '@nestjs/config';
import { unsubscribe } from 'diagnostics_channel';

@Injectable()
export class FirebaseService {
  private app: FirebaseApp;
  private storage: FirebaseStorage;

  constructor(private readonly configService: ConfigService) {
    const firebaseConfig = {
      apiKey: this.configService.get<string>('FIREBASE_APP_API_KEY'),
      authDomain: this.configService.get<string>('FIREBASE_APP_AUTH_DOMAIN'),
      projectId: this.configService.get<string>('FIREBASE_APP_PROJECT_ID'),
      storageBucket: this.configService.get<string>(
        'FIREBASE_APP_STORAGE_BUCKET',
      ),
      messagingSenderId: this.configService.get<string>(
        'FIREBASE_APP_MESSAGING_SENDER_ID',
      ),
      appId: this.configService.get<string>('FIREBASE_APP_ID'),
    };

    this.app = initializeApp(firebaseConfig);
    this.storage = getStorage();
  }

  async uploadFileToStorage(
    file: Express.Multer.File,
    fullFileName: string,
  ): Promise<string> {
    const modelRef = ref(this.storage, `models/${fullFileName}`);
    const uploadTask = uploadBytesResumable(modelRef, file.buffer);
    let downloadURL = '';

    var unsubscribe = uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
        unsubscribe();
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            throw new UnauthorizedException();
          case 'storage/canceled':
            throw new InternalServerErrorException(
              'File uploading has been canceled',
            );
          case 'storage/unknown':
            new InternalServerErrorException();
        }
      },
      async () => {
        downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log('File available at', downloadURL);
      },
    );

    return downloadURL;
  }

  async getFileLink(fileName: string, folder: string) {
    const modelRef = ref(this.storage, `${folder}/${fileName}`);
    return await getDownloadURL(modelRef);
  }
}
