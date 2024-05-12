import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';
import ProductAdditionDto from 'src/products/product-addition/product-addition.dto';

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

  @ApiPropertyOptional({ type: () => [ProductAdditionDto] })
  @IsOptional()
  @Type(() => ProductAdditionDto)
  products: ProductAdditionDto[];
}
