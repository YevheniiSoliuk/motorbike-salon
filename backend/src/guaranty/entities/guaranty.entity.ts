import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import GuarantyDto from '../dto/guaranty.dto';
import Image from 'src/images/entities/image.entity';

@Entity()
export default class Guaranty extends BaseEntity implements GuarantyDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, unique: true })
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('float', { nullable: false })
  price: number;

  @Column('int', { nullable: false })
  duration: number;

  @Column('varchar', { nullable: false })
  period: string;

  @ManyToOne(() => Image)
  @JoinColumn({ name: 'imageId', referencedColumnName: 'id' })
  image: Image;
}
