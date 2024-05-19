import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import ImageDto from '../dto/image.dto';
import AdditionDto from 'src/additions/dto/addition.dto';
import { Exclude } from 'class-transformer';

export default class AdditionImageDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @IsString()
  @Exclude()
  name: string;

  @ApiProperty({ type: ImageDto })
  image: ImageDto;

  @ApiProperty({ type: AdditionDto })
  addition: AdditionDto;
}
