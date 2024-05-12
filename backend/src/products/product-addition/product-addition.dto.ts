import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import ProductDto from '../dto/product.dto';
import AdditionDto from 'src/additions/dto/addition.dto';
import { Exclude } from 'class-transformer';

export default class ProductAdditionDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @IsString()
  @Exclude()
  name: string;

  @ApiProperty({ type: () => ProductDto })
  product: ProductDto;

  @ApiProperty({ type: () => AdditionDto })
  addition: AdditionDto;
}
