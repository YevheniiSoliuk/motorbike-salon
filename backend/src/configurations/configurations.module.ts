import { Module } from '@nestjs/common';
import { ConfigurationsService } from './configurations.service';
import { ConfigurationsController } from './configurations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Configuration from './entities/configuration.entity';
import { ProductsModule } from 'src/products/products.module';
import { UsersModule } from 'src/users/users.module';
import ConfigurationAdditionService from './configuration-addition/configuration-addition.service';
import ConfigurationAddition from './configuration-addition/configuration-addition.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Configuration, ConfigurationAddition]),
    ProductsModule,
    UsersModule,
  ],
  controllers: [ConfigurationsController],
  providers: [ConfigurationsService, ConfigurationAdditionService],
  exports: [ConfigurationsService, ConfigurationAdditionService],
})
export class ConfigurationsModule {}
