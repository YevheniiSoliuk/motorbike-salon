import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import ProductDto from 'src/products/dto/product.dto';

export default class AdditionDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiPropertyOptional({ type: () => ProductDto })
  @IsOptional()
  product: ProductDto;
}
