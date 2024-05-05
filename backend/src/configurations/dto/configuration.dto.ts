import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsUUID, IsUrl } from 'class-validator';
import { UUID } from 'crypto';
import ProductDto from 'src/products/dto/product.dto';
import UserDto from 'src/users/dto/user.dto';
import ConfigurationAdditionDto from '../configuration-addition/configuration-addition.dto';

export default class ConfigurationDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsUUID(4)
  uuid: UUID;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  fileUrl: string;

  @ApiProperty({ type: UserDto })
  @Type(() => UserDto)
  user: UserDto;

  @ApiProperty({ type: ProductDto })
  @Type(() => ProductDto)
  product: ProductDto;

  @ApiProperty({ type: () => [ConfigurationAdditionDto] })
  @Type(() => ConfigurationAdditionDto)
  additions: ConfigurationAdditionDto[];
}
