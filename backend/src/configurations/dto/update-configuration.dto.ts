import { ApiProperty } from '@nestjs/swagger';
import { UUID } from 'crypto';
import { ArrayNotEmpty, ArrayUnique, IsArray } from 'class-validator';

export default class UpdateConfigurationDto {
  @ApiProperty()
  @IsArray({ each: true })
  @ArrayUnique()
  @ArrayNotEmpty()
  additionsUUIDs: UUID[];
}
