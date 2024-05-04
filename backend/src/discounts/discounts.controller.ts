import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { DiscountsService } from './discounts.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import DiscountDto from './dto/discount.dto';
import JwtGuard from 'src/auth/guards/jwt.guard';

@ApiTags('Discounts')
@Controller('discounts')
@ApiBearerAuth('JWT-auth')
export class DiscountsController {
  constructor(private readonly discountsService: DiscountsService) {}

  @UseGuards(JwtGuard)
  @ApiBody({ type: CreateDiscountDto })
  @Post()
  async create(
    @Body() createDiscountDto: CreateDiscountDto,
    @Res() res: Response,
  ) {
    await this.discountsService.create(createDiscountDto);

    res.sendStatus(201);
  }

  @ApiOkResponse({ type: [DiscountDto] })
  @Get()
  async findAll(@Res() res: Response) {
    const discounts = await this.discountsService.findAll();

    res.send(discounts);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountsService.findOne(+id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiscountDto: UpdateDiscountDto,
  ) {
    return this.discountsService.update(+id, updateDiscountDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountsService.remove(+id);
  }
}
