import { Injectable } from '@nestjs/common';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  FirebaseStorage,
  StorageReference,
  getStorage,
  ref,
} from 'firebase/storage';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FirebaseService {
  private app: FirebaseApp;
  private storage: FirebaseStorage;
  private modelsRef: StorageReference;

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
    this.modelsRef = ref(this.storage, 'models');
  }
}
