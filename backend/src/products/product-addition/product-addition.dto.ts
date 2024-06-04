import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import AdditionDto from 'src/additions/dto/addition.dto';
import { Exclude } from 'class-transformer';
import ProductModelDto from '../product-model/product-model.dto';

export enum ModelPart {
  Color = 'color',
  Material = 'material',
}

export enum ModelTexture {
  Normal = 'normalTexture',
  Occlusion = 'occlusionTexture',
  Emissive = 'emissiveTexture',
  BaseColor = 'baseColorTexture',
  MetallicRoughness = 'metallicRoughnessTexture',
}

export default class ProductAdditionDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @IsString()
  @Exclude()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  modelMaterialIndex: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(ModelPart)
  modelPartType: ModelPart;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(ModelTexture)
  modelTextureType: ModelTexture;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  rgba: [number, number, number, number];

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isDefault: boolean;

  @ApiProperty({ type: () => ProductModelDto })
  productModel: ProductModelDto;

  @ApiProperty({ type: () => AdditionDto })
  addition: AdditionDto;
}
