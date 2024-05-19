import { Type } from 'class-transformer';
import { IsNumber, IsString, MaxLength } from 'class-validator';
import ImageDto from 'src/images/dto/image.dto';

export default class GuarantyDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  @MaxLength(500)
  description: string;

  @IsNumber()
  price: number;

  @Type(() => ImageDto)
  image: ImageDto;

  @IsString()
  period: string;

  @IsNumber()
  duration: number;
}
