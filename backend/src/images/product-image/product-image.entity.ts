import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ProductImageDto from './product-image.dto';
import Image from '../entities/image.entity';
import Product from 'src/products/entities/product.entity';

@Entity()
export default class ProductImage
  extends BaseEntity
  implements ProductImageDto
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, unique: true })
  name: string;

  @OneToOne(() => Image)
  @JoinColumn({ name: 'imageId', referencedColumnName: 'id' })
  image: Image;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: Product;
}
