import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import ImageDto from '../../images/dto/image.dto';

@Entity()
export default class Image extends BaseEntity implements ImageDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, unique: true })
  name: string;

  @Column('varchar', { nullable: true, unique: true })
  url: string;
}
