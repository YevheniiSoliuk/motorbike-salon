import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUrl } from 'class-validator';
import ProductModelDto from 'src/products/product-model/product-model.dto';
import { Type } from 'class-transformer';

export default class ModelDto {
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsUrl()
  url: string;

  @ApiPropertyOptional({ type: () => [ProductModelDto] })
  @Type(() => ProductModelDto)
  @IsOptional()
  products: ProductModelDto[];
}
