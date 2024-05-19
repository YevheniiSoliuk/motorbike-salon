import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ProductGuarantyDto from './product-guaranty.dto';
import Product from '../entities/product.entity';
import Guaranty from 'src/guaranty/entities/guaranty.entity';

@Entity()
export default class ProductGuaranty
  extends BaseEntity
  implements ProductGuarantyDto
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true, nullable: false })
  name: string;

  @ManyToOne(() => Product, (product) => product.guaranties)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: Product;

  @ManyToOne(() => Guaranty)
  @JoinColumn({ name: 'guarantyId', referencedColumnName: 'id' })
  guaranty: Guaranty;
}
