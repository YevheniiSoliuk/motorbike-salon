import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUrl } from 'class-validator';
import ProductDto from '../../products/dto/product.dto';

export default class ModelDto {
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
