import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, ArrayUnique, IsArray, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export default class CreateConfigurationDto {
  @ApiProperty()
  @IsUUID(4)
  userUuid: UUID;

  @ApiProperty()
  @IsUUID(4)
  productUuid: UUID;

  @ApiProperty()
  @IsArray({ each: true })
  @ArrayUnique()
  @ArrayNotEmpty()
  productAdditionsUUIDs: UUID[];
}
