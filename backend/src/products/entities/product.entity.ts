import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ProductDto from '../dto/product.dto';
import Category from 'src/categories/entities/category.entity';
import Discount from 'src/discounts/entities/discount.entity';
import Model from 'src/models/entities/model.entity';
import Image from 'src/images/entities/image.entity';
import Addition from 'src/additions/entities/addition.entity';
import ProductImage from 'src/images/product-image/product-image.entity';

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

  @OneToMany(() => Model, (model) => model.product)
  models: Model[];

  @OneToMany(() => ProductImage, (image) => image.product)
  images: ProductImage[];

  @OneToMany(() => Addition, (addition) => addition.product)
  additions: Addition[];
}
