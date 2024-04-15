import {
  Controller,
  FileTypeValidator,
  HttpStatus,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ModelsService } from './models.service';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import FileUploadDto from './dto/file-upload.dto';
import { MAX_MODEL_FILE_SIZE, MODEL_FILE_TYPE } from './constants';
import { Response } from 'express';

@ApiTags('Models')
@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  @ApiBody({
    type: FileUploadDto,
    description: 'Model file',
  })
  @ApiConsumes('multipartform-data')
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: MAX_MODEL_FILE_SIZE }),
          new FileTypeValidator({ fileType: MODEL_FILE_TYPE }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Res() res: Response,
  ) {
    console.log(file);
    await this.modelsService.uploadFile(file);
    res.sendStatus(HttpStatus.CREATED);
  }
}
