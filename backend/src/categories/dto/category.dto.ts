import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export default class CategoryDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional({ type: () => [CategoryDto] })
  @IsOptional()
  subcategory: CategoryDto[];

  @ApiPropertyOptional({ type: () => CategoryDto })
  @IsOptional()
  parentCategory: CategoryDto;
}
