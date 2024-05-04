import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import UserDto from '../dto/user.dto';
import Role from 'src/roles/entities/role.entity';
import { UUID } from 'crypto';

@Entity()
export default class User extends BaseEntity implements UserDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('uuid', { unique: true, nullable: false })
  uuid: UUID;

  @Column('varchar', { nullable: true })
  firstName: string;

  @Column('varchar', { nullable: true })
  lastName: string;

  @Column('varchar', { unique: true, nullable: false })
  email: string;

  @Column('varchar', { nullable: false })
  passwordHash: string;

  @Column('varchar', { nullable: true })
  refreshHash: string;

  @OneToOne(() => Role)
  @JoinColumn({ name: 'roleId', referencedColumnName: 'id' })
  role: Role;
}
