import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';
import ProductDto from 'src/products/dto/product.dto';

export default class AdditionDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsUUID(4)
  uuid: UUID;

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
