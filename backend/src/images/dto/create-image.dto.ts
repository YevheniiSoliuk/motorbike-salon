import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export default class CreateImageDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  url: string;
}
