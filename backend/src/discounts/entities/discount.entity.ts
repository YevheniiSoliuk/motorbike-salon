import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import DiscountDto from '../dto/discount.dto';

@Entity()
export default class Discount extends BaseEntity implements DiscountDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true, nullable: false })
  name: string;

  @Column('int', { nullable: false })
  amount: number;

  @Column('timestamp', { name: 'fromDate', nullable: false })
  fromDate: Date;

  @Column('timestamp', { name: 'toDate', nullable: false })
  toDate: Date;
}
