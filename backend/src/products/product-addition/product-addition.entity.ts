import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ProductAdditionDto, {
  ModelPart,
  ModelTexture,
} from './product-addition.dto';
import Addition from 'src/additions/entities/addition.entity';
import ProductModel from '../product-model/product-model.entity';

@Entity()
export default class ProductAddition
  extends BaseEntity
  implements ProductAdditionDto
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true, nullable: true })
  @Generated('uuid')
  uuid: string;

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

  @Column('bool', { default: false })
  active: boolean;

  @ManyToOne(() => ProductModel, (productModel) => productModel.additions)
  @JoinColumn({ name: 'productModelId', referencedColumnName: 'id' })
  productModel: ProductModel;

  @ManyToOne(() => Addition, (addition) => addition.products)
  @JoinColumn({ name: 'additionId', referencedColumnName: 'id' })
  addition: Addition;
}
