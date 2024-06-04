import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ProductModelDto from './product-model.dto';
import Product from '../entities/product.entity';
import Model from 'src/models/entities/model.entity';
import ProductAddition from '../product-addition/product-addition.entity';

@Entity()
export default class ProductModel
  extends BaseEntity
  implements ProductModelDto
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, unique: true })
  name: string;

  @ManyToOne(() => Product, (product) => product.models)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: Product;

  @ManyToOne(() => Model, (model) => model.products)
  @JoinColumn({ name: 'modelId', referencedColumnName: 'id' })
  model: Model;

  @OneToMany(
    () => ProductAddition,
    (productAddition) => productAddition.productModel,
  )
  additions: ProductAddition[];
}
