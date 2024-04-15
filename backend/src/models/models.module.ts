import { Module } from '@nestjs/common';
import { ModelsService } from './models.service';
import { ModelsController } from './models.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Model from './entities/model.entity';
import { FirebaseModule } from 'src/firebase/firebase.module';

@Module({
  imports: [TypeOrmModule.forFeature([Model]), FirebaseModule],
  controllers: [ModelsController],
  providers: [ModelsService],
  exports: [ModelsService],
})
export class ModelsModule {}
