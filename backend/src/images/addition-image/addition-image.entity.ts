import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import AdditionImageDto from './addition-image.dto';
import Image from '../entities/image.entity';
import Addition from 'src/additions/entities/addition.entity';

@Entity()
export default class AdditionImage
  extends BaseEntity
  implements AdditionImageDto
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, unique: true })
  name: string;

  @ManyToOne(() => Image)
  @JoinColumn({ name: 'imageId', referencedColumnName: 'id' })
  image: Image;

  @ManyToOne(() => Addition)
  @JoinColumn({ name: 'additionId', referencedColumnName: 'id' })
  addition: Addition;
}
