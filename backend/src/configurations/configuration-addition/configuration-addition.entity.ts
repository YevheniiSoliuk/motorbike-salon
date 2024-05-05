import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ConfigurationAdditionDto from './configuration-addition.dto';
import Addition from 'src/additions/entities/addition.entity';
import Configuration from '../entities/configuration.entity';

@Entity()
export default class ConfigurationAddition
  extends BaseEntity
  implements ConfigurationAdditionDto
{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Addition)
  @JoinColumn({ name: 'additionId', referencedColumnName: 'id' })
  addition: Addition;

  @ManyToOne(() => Configuration)
  @JoinColumn({ name: 'configurationId', referencedColumnName: 'id' })
  configuration: Configuration;
}
