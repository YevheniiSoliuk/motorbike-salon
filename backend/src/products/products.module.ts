import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Product from './entities/product.entity';
import Category from 'src/categories/entities/category.entity';
import Discount from 'src/discounts/entities/discount.entity';
import Model from '../models/entities/model.entity';
import Image from '../images/entities/image.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Image, Model]),
    Category,
    Discount,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
