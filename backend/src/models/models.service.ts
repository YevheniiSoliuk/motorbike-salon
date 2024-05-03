import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Model from './entities/model.entity';
import { ILike, Repository } from 'typeorm';
import { generateModelFileName, getFileExtension } from './utils';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>,
    private readonly firebaseService: FirebaseService,
  ) {}

  async uploadFile(file: Express.Multer.File): Promise<void> {
    const fileExtension = getFileExtension(file.originalname);
    const fileName = generateModelFileName(
      fileExtension,
      file.originalname.split('.')[0],
    );

    const fileUrl = await this.firebaseService.uploadFileToStorage(
      file,
      fileName,
    );
    const modelData = {
      name: fileName,
      fileUrl,
    };
    const model = this.modelRepository.create(modelData);
    await model.save();
  }

  async getModelLinkByName(modelName: string) {
    const model = await this.modelRepository.findOneBy({
      name: ILike(modelName),
    });

    if (!model) {
      throw new NotFoundException();
    }

    return await this.firebaseService.getFileLink(modelName, 'model');
  }
}
