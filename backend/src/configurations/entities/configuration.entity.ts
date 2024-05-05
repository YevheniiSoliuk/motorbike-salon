import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import ConfigurationDto from '../dto/configuration.dto';
import User from 'src/users/entities/user.entity';
import Product from 'src/products/entities/product.entity';
import { UUID } from 'crypto';
import ConfigurationAddition from '../configuration-addition/configuration-addition.entity';

@Entity()
export default class Configuration
  extends BaseEntity
  implements ConfigurationDto
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('uuid', { unique: true, nullable: false })
  uuid: UUID;

  @Column('varchar', { unique: true, nullable: true })
  fileUrl: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: Product;

  @OneToMany(
    () => ConfigurationAddition,
    (configurationAddition) => configurationAddition.configuration,
  )
  @JoinColumn({ name: 'additionId', referencedColumnName: 'id' })
  additions: ConfigurationAddition[];

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
