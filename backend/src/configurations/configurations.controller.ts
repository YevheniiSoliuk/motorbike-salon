import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
  Res,
} from '@nestjs/common';
import { ConfigurationsService } from './configurations.service';
import CreateConfigurationDto from './dto/create-configuration.dto';
import UpdateConfigurationDto from './dto/update-configuration.dto';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import JwtGuard from 'src/auth/guards/jwt.guard';
import { Response } from 'express';
import ConfigurationDto from './dto/configuration.dto';
import { UUID } from 'crypto';
import { plainToInstance } from 'class-transformer';
import ConfigurationAdditionService from './configuration-addition/configuration-addition.service';
import ConfigurationAdditionDto from './configuration-addition/configuration-addition.dto';

@ApiTags('Configurations')
@Controller('configurations')
@ApiBearerAuth('JWT-auth')
export class ConfigurationsController {
  constructor(
    private readonly configurationsService: ConfigurationsService,
    private readonly configurationAdditionService: ConfigurationAdditionService,
  ) {}

  @UseGuards(JwtGuard)
  @ApiBody({ type: CreateConfigurationDto })
  @HttpCode(HttpStatus.OK)
  @Post()
  async create(
    @Body() createConfigurationDto: CreateConfigurationDto,
    @Res() res: Response,
  ) {
    await this.configurationsService.create(createConfigurationDto);

    res.sendStatus(HttpStatus.OK);
  }

  @ApiResponse({ type: ConfigurationDto })
  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    const configurations = await this.configurationsService.findOneById(+id);

    res.status(HttpStatus.OK).json(
      plainToInstance(ConfigurationDto, configurations, {
        strategy: 'exposeAll',
      }),
    );
  }

  @ApiResponse({ type: ConfigurationDto })
  @Get(':id/additions')
  async getConfigurationAdditionsById(
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    const configurationAdditions =
      await this.configurationAdditionService.findByConfigurationId(+id);

    res.status(HttpStatus.OK).json(
      plainToInstance(ConfigurationAdditionDto, configurationAdditions, {
        strategy: 'exposeAll',
      }),
    );
  }

  @UseGuards(JwtGuard)
  @ApiResponse({ type: ConfigurationDto })
  @Get(':userUuid')
  async getByUser(@Param('userUuid') userUuid: UUID, @Res() res: Response) {
    const configurations =
      await this.configurationsService.findByUserUuid(userUuid);

    res.status(HttpStatus.OK).json(
      plainToInstance(ConfigurationDto, configurations, {
        strategy: 'exposeAll',
      }),
    );
  }

  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  @Patch(':uuid')
  async update(
    @Param('uuid') uuid: UUID,
    @Body() updateConfigurationDto: UpdateConfigurationDto,
    @Res() res: Response,
  ) {
    await this.configurationsService.update(uuid, updateConfigurationDto);

    res.sendStatus(HttpStatus.OK);
  }

  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  @Delete(':uuid')
  async remove(@Param('uuid') uuid: UUID, @Res() res: Response) {
    await this.configurationsService.remove(uuid);

    res.sendStatus(HttpStatus.OK);
  }
}
