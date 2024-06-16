import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ConfigurationAddition from './configuration-addition.entity';
import { Repository } from 'typeorm';
import Configuration from '../entities/configuration.entity';
import { UUID } from 'crypto';
import ProductAddition from 'src/products/product-addition/product-addition.entity';

@Injectable()
export default class ConfigurationAdditionService {
  constructor(
    @InjectRepository(ConfigurationAddition)
    private readonly configurationAdditionRepository: Repository<ConfigurationAddition>,
  ) {}

  async create(configuration: Configuration, productAddition: ProductAddition) {
    const configurationAddition = this.configurationAdditionRepository.create({
      configuration,
      productAddition,
    });
    return await configurationAddition.save();
  }

  async findByConfigurationId(configurationId: number) {
    return await this.configurationAdditionRepository.find({
      relations: ['configuration', 'productAddition.addition'],
      where: {
        configuration: { id: configurationId },
      },
    });
  }

  async findByConfigurationAndAddition(
    configurationUuid: UUID,
    productAdditionUuid: UUID,
  ) {
    return await this.configurationAdditionRepository.findOne({
      where: {
        configuration: {
          uuid: configurationUuid,
        },
        productAddition: {
          uuid: productAdditionUuid,
        },
      },
    });
  }
}
