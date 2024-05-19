import { Module } from '@nestjs/common';
import { GuarantyService } from './guaranty.service';
import { GuarantyController } from './guaranty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Guaranty from './entities/guaranty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Guaranty])],
  controllers: [GuarantyController],
  providers: [GuarantyService],
  exports: [GuarantyService],
})
export class GuarantyModule {}
