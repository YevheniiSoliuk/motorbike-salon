import { PartialType } from '@nestjs/swagger';
import CreateAdditionDto from './create-addition.dto';

export class UpdateAdditionDto extends PartialType(CreateAdditionDto) {}
