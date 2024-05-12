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
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import ProductDto from './dto/product.dto';
import JwtGuard from 'src/auth/guards/jwt.guard';
import { plainToInstance } from 'class-transformer';

@ApiTags('Products')
@Controller('products')
@ApiBearerAuth('JWT-auth')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @ApiOkResponse({ type: [ProductDto] })
  @Get()
  async findAll(@Res() res: Response) {
    const products = await this.productsService.findAll();

    res
      .status(200)
      .json(plainToInstance(ProductDto, products, { strategy: 'exposeAll' }));
  }

  @ApiOkResponse({ type: ProductDto })
  @ApiParam({ name: 'id', type: 'string' })
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const product = await this.productsService.findOneById(+id);

    res
      .status(200)
      .json(plainToInstance(ProductDto, product, { strategy: 'exposeAll' }));
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
