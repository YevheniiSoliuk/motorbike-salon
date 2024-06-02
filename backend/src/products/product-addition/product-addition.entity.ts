import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ProductAdditionDto, {
  ModelPart,
  ModelTexture,
} from './product-addition.dto';
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

  @Column('int', { nullable: true })
  modelMaterialIndex: number;

  @Column('enum', { enum: ModelPart, nullable: true })
  modelPartType: ModelPart;

  @Column('enum', { enum: ModelTexture, nullable: true })
  modelTextureType: ModelTexture;

  @Column('decimal', { array: true, nullable: true, precision: 5, scale: 2 })
  rgba: [number, number, number, number];

  @Column('bool', { default: false })
  isDefault: boolean;

  @ManyToOne(() => Product, (product) => product.additions)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: Product;

  @ManyToOne(() => Addition, (addition) => addition.products)
  @JoinColumn({ name: 'additionId', referencedColumnName: 'id' })
  addition: Addition;
}
