import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import CategoryDto from 'src/categories/dto/category.dto';
import DiscountDto from 'src/discounts/dto/discount.dto';

export default class ProductDto {
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsUUID(4)
  uuid: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(1000)
  description: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  catalogNumber: string;

  @ApiProperty({ type: CategoryDto })
  category: CategoryDto;

  @ApiPropertyOptional({ type: DiscountDto })
  @IsOptional()
  discount: DiscountDto;
}
