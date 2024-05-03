import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import Discount from 'src/discounts/entities/discount.entity';
import Category from 'src/categories/entities/category.entity';
import Product from 'src/products/entities/product.entity';
import Model from 'src/models/entities/model.entity';
import Image from 'src/images/entities/image.entity';
import Addition from 'src/additions/entities/addition.entity';
import AdditionImage from 'src/images/addition-image/addition-image.entity';
import ProductImage from 'src/images/product-image/product-image.entity';

dotenv.config();

export const dataSource: DataSource = new DataSource({
  type: 'postgres',
  host: process.env['POSTGRES_HOST'],
  port: Number.parseInt(process.env['POSTGRES_PORT']),
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  database: process.env['POSTGRES_DB'],
  entities: [
    Discount,
    Category,
    Product,
    Image,
    Model,
    Addition,
    AdditionImage,
    ProductImage,
  ],
  logging: true,
});
