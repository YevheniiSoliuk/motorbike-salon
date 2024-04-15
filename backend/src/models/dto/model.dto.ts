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

  storageKey: string;

  bucket: string;

  mime: string;

  comment: string | null;

  @ApiPropertyOptional({ type: ProductDto })
  @IsOptional()
  product: ProductDto;
}
