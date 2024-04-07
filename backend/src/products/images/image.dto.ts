import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUrl } from 'class-validator';
import ProductDto from '../dto/product.dto';

export default class ImageDto {
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsUrl()
  url: string;

  @ApiPropertyOptional({ type: ProductDto })
  @IsOptional()
  product: ProductDto;
}
