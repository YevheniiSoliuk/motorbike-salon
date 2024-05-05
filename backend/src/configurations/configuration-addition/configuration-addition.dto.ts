import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import AdditionDto from 'src/additions/dto/addition.dto';
import ConfigurationDto from '../dto/configuration.dto';

export default class ConfigurationAdditionDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty({ type: AdditionDto })
  @IsNumber()
  addition: AdditionDto;

  @ApiProperty({ type: () => ConfigurationDto })
  @IsNumber()
  configuration: ConfigurationDto;
}
