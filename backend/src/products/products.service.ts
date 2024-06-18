import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import Product from './entities/product.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import ProductModel from './product-model/product-model.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductModel)
    private readonly productModelRepository: Repository<ProductModel>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll() {
    return await this.productRepository.find({
      relations: [
        'category',
        'discount',
        'models.model',
        'models.additions.addition.images.image',
        'images.image',
        'guaranties.guaranty.image',
      ],
    });
  }

  async findOneById(id: number) {
    return await this.productRepository.findOne({
      relations: [
        'category',
        'discount',
        'models.model',
        'models.additions.addition.images.image',
        'images.image',
        'guaranties.guaranty.image',
      ],
      where: {
        id,
      },
    });
  }

  async findOneByUuid(uuid: UUID) {
    return await this.productRepository.findOne({
      where: {
        uuid,
      },
    });
  }

  async findProductAdditionByUuid(productAdditionUuid: UUID) {
    const productModel = await this.productModelRepository.findOne({
      relations: ['additions.addition.images.image'],
      where: {
        additions: {
          uuid: productAdditionUuid,
        },
      },
    });

    return productModel.additions.find(
      (addition) => addition.uuid === productAdditionUuid,
    );
  }

  async getModelById(id: number) {
    return await this.productModelRepository.findOne({
      relations: ['model'],
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
