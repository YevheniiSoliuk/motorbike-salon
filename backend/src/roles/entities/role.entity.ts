import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import RoleDto from '../dto/role.dto';
import { RoleType } from '../types/roles';

@Entity()
export default class Role extends BaseEntity implements RoleDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, unique: true })
  name: RoleType;
}
