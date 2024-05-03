import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Image from './entities/image.entity';
import ProductImage from './product-image/product-image.entity';
import AdditionImage from './addition-image/addition-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image, ProductImage, AdditionImage])],
  controllers: [ImagesController],
  providers: [ImagesService],
  exports: [ImagesService],
})
export class ImagesModule {}
