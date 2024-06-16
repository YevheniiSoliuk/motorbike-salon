import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ConfigurationAdditionDto from './configuration-addition.dto';
import Configuration from '../entities/configuration.entity';
import ProductAddition from 'src/products/product-addition/product-addition.entity';

@Entity()
export default class ConfigurationAddition
  extends BaseEntity
  implements ConfigurationAdditionDto
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: true, unique: true })
  name: string;

  @ManyToOne(() => ProductAddition)
  @JoinColumn({ name: 'productAdditionId', referencedColumnName: 'id' })
  productAddition: ProductAddition;

  @ManyToOne(() => Configuration)
  @JoinColumn({ name: 'configurationId', referencedColumnName: 'id' })
  configuration: Configuration;
}
