import { Exclude, Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import ProductDto from '../dto/product.dto';
import GuarantyDto from 'src/guaranty/dto/guaranty.dto';

export default class ProductGuarantyDto {
  @IsNumber()
  id: number;

  @IsString()
  @Exclude()
  name: string;

  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => GuarantyDto)
  guaranty: GuarantyDto;
}
