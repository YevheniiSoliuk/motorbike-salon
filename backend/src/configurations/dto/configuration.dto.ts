import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, IsUUID, IsUrl } from 'class-validator';
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

  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  fileUrl: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  clientFirstName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  clientLastName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  clientEmail: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  clientPhone: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  clientIPAddress: string;

  @ApiPropertyOptional({ type: UserDto })
  @Type(() => UserDto)
  user: UserDto;

  @ApiPropertyOptional({ type: UserDto })
  @Type(() => UserDto)
  createdBy: UserDto;

  @ApiProperty({ type: ProductDto })
  @Type(() => ProductDto)
  product: ProductDto;

  @ApiProperty({ type: () => [ConfigurationAdditionDto] })
  @Type(() => ConfigurationAdditionDto)
  additions: ConfigurationAdditionDto[];
}
