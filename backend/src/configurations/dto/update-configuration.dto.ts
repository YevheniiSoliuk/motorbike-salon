import { ApiProperty } from '@nestjs/swagger';
import { UUID } from 'crypto';
import { ArrayNotEmpty, ArrayUnique, IsArray, IsUUID } from 'class-validator';
import ProductDto from 'src/products/dto/product.dto';
import { Type } from 'class-transformer';

export default class UpdateConfigurationDto {
  // @ApiProperty()
  // @IsArray({ each: true })
  // @ArrayUnique()
  // @ArrayNotEmpty()
  // productAdditionsUUIDs: UUID[];

  @ApiProperty({ type: ProductDto })
  @Type(() => ProductDto)
  product: ProductDto;
}
