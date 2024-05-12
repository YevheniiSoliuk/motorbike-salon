import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ModelDto from '../dto/model.dto';
import ProductModel from 'src/products/product-model/product-model.entity';

@Entity()
export default class Model extends BaseEntity implements ModelDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true, nullable: false })
  name: string;

  @Column('varchar', { unique: true, nullable: false })
  url: string;

  @OneToMany(() => ProductModel, (productModel) => productModel.model)
  products: ProductModel[];
}
