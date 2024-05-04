import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import Product from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll() {
    return await this.productRepository.find({
      relations: [
        'category',
        'discount',
        'models',
        'images',
        'images.image',
        'additions',
        'additions.images.image',
      ],
    });
  }

  async findOneById(id: number) {
    return await this.productRepository.findOne({
      relations: [
        'category',
        'discount',
        'models',
        'images',
        'images.image',
        'additions',
        'additions.images.image',
      ],
      where: {
        id,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
