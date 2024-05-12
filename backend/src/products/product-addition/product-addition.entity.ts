import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ProductAdditionDto from './product-addition.dto';
import Product from '../entities/product.entity';
import Addition from 'src/additions/entities/addition.entity';

@Entity()
export default class ProductAddition
  extends BaseEntity
  implements ProductAdditionDto
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, unique: true })
  name: string;

  @ManyToOne(() => Product, (product) => product.additions)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: Product;

  @ManyToOne(() => Addition, (addition) => addition.products)
  @JoinColumn({ name: 'additionId', referencedColumnName: 'id' })
  addition: Addition;
}
