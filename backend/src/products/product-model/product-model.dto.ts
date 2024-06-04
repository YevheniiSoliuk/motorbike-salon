import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import ProductDto from '../dto/product.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import ModelDto from 'src/models/dto/model.dto';
import ProductAdditionDto from '../product-addition/product-addition.dto';

export default class ProductModelDto {
  @ApiProperty()
  @IsNumber()
  @Expose()
  id: number;

  @IsString()
  @Exclude()
  name: string;

  @ApiProperty({ type: () => ProductDto })
  @Type(() => ProductDto)
  @Expose()
  product: ProductDto;

  @ApiProperty({ type: () => ModelDto })
  @Type(() => ModelDto)
  @Expose()
  model: ModelDto;

  @ApiProperty({ type: () => [ProductAdditionDto] })
  @Type(() => ProductAdditionDto)
  @Expose()
  additions: ProductAdditionDto[];
}
