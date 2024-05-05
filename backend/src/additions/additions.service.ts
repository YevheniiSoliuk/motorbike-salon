import { Injectable } from '@nestjs/common';
import CreateAdditionDto from './dto/create-addition.dto';
import { UpdateAdditionDto } from './dto/update-addition.dto';
import { InjectRepository } from '@nestjs/typeorm';
import Addition from './entities/addition.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';

@Injectable()
export default class AdditionsService {
  constructor(
    @InjectRepository(Addition)
    private readonly additionRepository: Repository<Addition>,
  ) {}

  async create(createAdditionDto: CreateAdditionDto) {
    const addition = this.additionRepository.create(createAdditionDto);
    await addition.save();
  }

  async findAll(): Promise<Addition[]> {
    return await this.additionRepository.find();
  }

  async findOneById(id: number) {
    return await this.additionRepository.findOneBy({ id });
  }

  async findOneByUuid(uuid: UUID) {
    return await this.additionRepository.findOneBy({ uuid });
  }

  async update(id: number, updateAdditionDto: UpdateAdditionDto) {
    await this.additionRepository.update(
      {
        id,
      },
      updateAdditionDto,
    );
  }

  async remove(id: number) {
    await this.additionRepository.delete({
      id,
    });
  }
}
