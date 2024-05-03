import ProductDto from 'src/products/dto/product.dto';
import ImageDto from '../dto/image.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export default class ProductImageDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty({ type: ImageDto })
  image: ImageDto;

  @ApiProperty({ type: ImageDto })
  product: ProductDto;
}
