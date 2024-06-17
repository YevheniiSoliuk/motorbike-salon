import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
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
  @Generated('uuid')
  uuid: UUID;

  @Column('varchar', { nullable: true, unique: true })
  name: string;

  @Column('varchar', { unique: true, nullable: true })
  fileUrl: string;

  @Column('varchar', { unique: false, nullable: true })
  clientFirstName: string;

  @Column('varchar', { unique: false, nullable: true })
  clientLastName: string;

  @Column('varchar', { unique: true, nullable: true })
  clientEmail: string;

  @Column('varchar', { unique: true, nullable: true })
  clientPhone: string;

  @Column('varchar', { unique: true, nullable: true })
  clientIPAddress: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'createdById', referencedColumnName: 'id' })
  createdBy: User;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: Product;

  // @OneToMany(
  //   () => ConfigurationAddition,
  //   (configurationAddition) => configurationAddition.configuration,
  // )
  // @JoinColumn({ name: 'additionId', referencedColumnName: 'id' })
  // additions: ConfigurationAddition[];

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
