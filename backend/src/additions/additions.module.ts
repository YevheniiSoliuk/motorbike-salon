import { Module } from '@nestjs/common';
import AdditionsService from './additions.service';
import AdditionsController from './additions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Addition from './entities/addition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Addition])],
  controllers: [AdditionsController],
  providers: [AdditionsService],
  exports: [AdditionsService],
})
export class AdditionsModule {}
