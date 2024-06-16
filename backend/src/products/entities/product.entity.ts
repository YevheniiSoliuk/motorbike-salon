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
import ProductImage from 'src/images/product-image/product-image.entity';
import ProductModel from '../product-model/product-model.entity';
import ProductGuaranty from '../product-guaranty/product-guaranty.entity';

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

  @OneToMany(() => ProductModel, (productModel) => productModel.product)
  models: ProductModel[];

  @OneToMany(() => ProductImage, (image) => image.product)
  images: ProductImage[];

  @OneToMany(
    () => ProductGuaranty,
    (productGuaranty) => productGuaranty.product,
  )
  guaranties: ProductGuaranty[];
}
