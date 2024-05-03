import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import ImageDto from '../dto/image.dto';
import AdditionDto from 'src/additions/dto/addition.dto';

export default class AdditionImageDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty({ type: ImageDto })
  image: ImageDto;

  @ApiProperty({ type: AdditionDto })
  addition: AdditionDto;
}
