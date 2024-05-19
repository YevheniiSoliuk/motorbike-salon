import ProductDto from 'src/products/dto/product.dto';
import ImageDto from '../dto/image.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

export default class ProductImageDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @IsString()
  @Exclude()
  name: string;

  @ApiProperty({ type: ImageDto })
  image: ImageDto;

  @ApiProperty({ type: ImageDto })
  product: ProductDto;
}
