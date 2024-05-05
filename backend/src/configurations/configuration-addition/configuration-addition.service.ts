import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ConfigurationAddition from './configuration-addition.entity';
import { Repository } from 'typeorm';
import Configuration from '../entities/configuration.entity';
import Addition from 'src/additions/entities/addition.entity';
import { UUID } from 'crypto';

@Injectable()
export default class ConfigurationAdditionService {
  constructor(
    @InjectRepository(ConfigurationAddition)
    private readonly configurationAdditionRepository: Repository<ConfigurationAddition>,
  ) {}

  async create(configuration: Configuration, addition: Addition) {
    const configurationAddition = this.configurationAdditionRepository.create({
      configuration,
      addition,
    });
    return await configurationAddition.save();
  }

  async findByConfigurationAndAddition(
    configurationUuid: UUID,
    additionUuid: UUID,
  ) {
    return await this.configurationAdditionRepository.findOne({
      where: {
        configuration: {
          uuid: configurationUuid,
        },
        addition: {
          uuid: additionUuid,
        },
      },
    });
  }
}
