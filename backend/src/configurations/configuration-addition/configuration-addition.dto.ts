import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import ConfigurationDto from '../dto/configuration.dto';
import ProductAdditionDto from 'src/products/product-addition/product-addition.dto';
import { Exclude } from 'class-transformer';

export default class ConfigurationAdditionDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @IsString()
  @Exclude()
  name: string;

  @ApiProperty({ type: ProductAdditionDto })
  @IsNumber()
  productAddition: ProductAdditionDto;

  @ApiProperty({ type: () => ConfigurationDto })
  @IsNumber()
  configuration: ConfigurationDto;
}
