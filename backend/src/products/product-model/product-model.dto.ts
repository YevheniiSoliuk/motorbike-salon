import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import ProductDto from '../dto/product.dto';
import { Exclude, Type } from 'class-transformer';
import ModelDto from 'src/models/dto/model.dto';

export default class ProductModelDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @IsString()
  @Exclude()
  name: string;

  @ApiProperty({ type: () => ProductDto })
  @Type(() => ProductDto)
  product: ProductDto;

  @ApiProperty({ type: () => ModelDto })
  @Type(() => ModelDto)
  model: ModelDto;
}
