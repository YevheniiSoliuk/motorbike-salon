import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ProductDto from '../dto/product.dto';
import Category from 'src/categories/entities/category.entity';
import Discount from 'src/discounts/entities/discount.entity';

@Entity()
export default class Product extends BaseEntity implements ProductDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true, nullable: false })
  @Generated('uuid')
  uuid: string;

  @Column('varchar', { unique: true, nullable: false })
  name: string;

  @Column('varchar', { nullable: true, length: 1000 })
  description: string;

  @Column('float', { nullable: false })
  price: number;

  @Column('varchar', { unique: true, nullable: false })
  catalogNumber: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoryId', referencedColumnName: 'id' })
  category: Category;

  @ManyToOne(() => Discount)
  @JoinColumn({ name: 'discountId', referencedColumnName: 'id' })
  discount: Discount;
}
