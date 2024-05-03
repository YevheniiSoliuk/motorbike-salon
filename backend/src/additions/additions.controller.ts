import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import AdditionsService from './additions.service';
import CreateAdditionDto from './dto/create-addition.dto';
import { UpdateAdditionDto } from './dto/update-addition.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Additions')
@Controller('additions')
export default class AdditionsController {
  constructor(private readonly additionService: AdditionsService) {}

  @ApiBody({ type: CreateAdditionDto })
  @Post()
  create(@Body() createAdditionDto: CreateAdditionDto, @Res() res: Response) {
    this.additionService.create(createAdditionDto);

    return res.sendStatus(201);
  }

  @Get()
  findAll() {
    return this.additionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.additionService.findOneById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdditionDto: UpdateAdditionDto,
  ) {
    return this.additionService.update(+id, updateAdditionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.additionService.remove(+id);
  }
}
