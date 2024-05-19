import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Product from './entities/product.entity';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import ProductAddition from './product-addition/product-addition.entity';
import ProductModel from './product-model/product-model.entity';
import ProductGuaranty from './product-guaranty/product-guaranty.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductAddition,
      ProductModel,
      ProductGuaranty,
    ]),
    UsersModule,
    ConfigModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
