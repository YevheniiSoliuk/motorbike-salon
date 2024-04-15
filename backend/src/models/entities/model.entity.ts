import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ModelDto from '../dto/model.dto';
import Product from '../../products/entities/product.entity';

@Entity()
export default class Model extends BaseEntity implements ModelDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true, nullable: false })
  name: string;

  @Column('varchar', { unique: true, nullable: false })
  url: string;

  @Column('varchar', { unique: true, nullable: false })
  storageKey: string;

  @Column('varchar', { unique: true, nullable: false })
  bucket: string;

  @Column('varchar', { unique: true, nullable: false })
  mime: string;

  @Column('varchar')
  comment: string | null;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: Product;
}
