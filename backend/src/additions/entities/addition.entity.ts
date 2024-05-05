import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import AdditionDto from '../dto/addition.dto';
import Product from 'src/products/entities/product.entity';
import AdditionImage from 'src/images/addition-image/addition-image.entity';
import { UUID } from 'crypto';
import ConfigurationAddition from 'src/configurations/configuration-addition/configuration-addition.entity';

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

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: Product;

  @OneToMany(() => AdditionImage, (image) => image.addition)
  @JoinColumn({ name: 'imageId', referencedColumnName: 'id' })
  images: AdditionImage[];

  @OneToMany(
    () => ConfigurationAddition,
    (configuration) => configuration.addition,
  )
  @JoinColumn({ name: 'configurationId', referencedColumnName: 'id' })
  configuration: ConfigurationAddition[];
}
