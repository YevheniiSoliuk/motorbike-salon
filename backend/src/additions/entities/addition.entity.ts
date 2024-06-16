import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import AdditionDto from '../dto/addition.dto';
import AdditionImage from 'src/images/addition-image/addition-image.entity';
import { UUID } from 'crypto';
import ConfigurationAddition from 'src/configurations/configuration-addition/configuration-addition.entity';
import ProductAddition from 'src/products/product-addition/product-addition.entity';

@Entity()
export default class Addition extends BaseEntity implements AdditionDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('uuid', { unique: true, nullable: false })
  uuid: UUID;

  @Column('varchar', { unique: true, nullable: false })
  name: string;

  @Column('float', { nullable: false })
  price: number;

  @OneToMany(
    () => ProductAddition,
    (productsAdditions) => productsAdditions.addition,
  )
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  products: ProductAddition[];

  @OneToMany(() => AdditionImage, (image) => image.addition)
  @JoinColumn({ name: 'imageId', referencedColumnName: 'id' })
  images: AdditionImage[];

  // @OneToMany(
  //   () => ConfigurationAddition,
  //   (configuration) => configuration.addition,
  // )
  // @JoinColumn({ name: 'configurationId', referencedColumnName: 'id' })
  // configuration: ConfigurationAddition[];
}
