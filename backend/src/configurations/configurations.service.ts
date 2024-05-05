import { Injectable } from '@nestjs/common';
import CreateConfigurationDto from './dto/create-configuration.dto';
import UpdateConfigurationDto from './dto/update-configuration.dto';
import { InjectRepository } from '@nestjs/typeorm';
import Configuration from './entities/configuration.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { ProductsService } from 'src/products/products.service';
import AdditionsService from 'src/additions/additions.service';
import { UUID, randomUUID } from 'crypto';
import ConfigurationAdditionService from './configuration-addition/configuration-addition.service';
import ConfigurationAddition from './configuration-addition/configuration-addition.entity';

@Injectable()
export class ConfigurationsService {
  constructor(
    @InjectRepository(Configuration)
    private readonly configurationRepository: Repository<Configuration>,
    private readonly usersService: UsersService,
    private readonly productsService: ProductsService,
    private readonly additionsService: AdditionsService,
    private readonly configurationAdditionService: ConfigurationAdditionService,
  ) {}

  async findOneByUuid(uuid: UUID) {
    return await this.configurationRepository.findOne({
      relations: ['user', 'product', 'additions', 'additions.addition'],
      where: {
        uuid,
      },
    });
  }

  async findByUserUuid(userUuid: UUID) {
    return await this.configurationRepository.find({
      relations: ['user', 'product', 'additions', 'additions.addition'],
      where: {
        user: {
          uuid: userUuid,
        },
      },
    });
  }

  async create(createConfigurationDto: CreateConfigurationDto) {
    const { userUuid, productUuid, additionsUUIDs } = createConfigurationDto;
    const product = await this.productsService.findOneByUuid(productUuid);
    const user = await this.usersService.findOneByUuid(userUuid);
    const uuid = randomUUID();
    const configurationAdditions: ConfigurationAddition[] = [];

    const configurationData = this.configurationRepository.create({
      uuid,
      product,
      user,
    });

    const configuration = await configurationData.save();

    for (const additionUuid of additionsUUIDs) {
      const addition = await this.additionsService.findOneByUuid(additionUuid);
      const configurationAddition =
        await this.configurationAdditionService.create(configuration, addition);
      configurationAdditions.push(configurationAddition);
    }

    configuration.additions = configurationAdditions;
    await configurationData.save();
  }

  async update(uuid: UUID, updateConfigurationDto: UpdateConfigurationDto) {
    const configuration = await this.findOneByUuid(uuid);
    const configurationAdditions: ConfigurationAddition[] = [];

    for (const additionUuid of updateConfigurationDto.additionsUUIDs) {
      const addition = await this.additionsService.findOneByUuid(additionUuid);
      const existedConfigurationAddition =
        await this.configurationAdditionService.findByConfigurationAndAddition(
          configuration.uuid,
          addition.uuid,
        );

      if (!existedConfigurationAddition) {
        const configurationAddition =
          await this.configurationAdditionService.create(
            configuration,
            addition,
          );
        configurationAdditions.push(configurationAddition);
      } else {
        configurationAdditions.push(existedConfigurationAddition);
      }
    }

    configuration.additions = configurationAdditions;
    await configuration.save();
  }

  async remove(uuid: UUID) {
    await this.configurationRepository.delete(uuid);
  }
}
