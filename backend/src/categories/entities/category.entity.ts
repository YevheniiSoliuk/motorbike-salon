import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import CategoryDto from '../dto/category.dto';

@Entity()
@Tree('closure-table')
export default class Category extends BaseEntity implements CategoryDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true, nullable: false })
  name: string;

  @TreeChildren()
  subcategory: Category[];

  @TreeParent()
  parentCategory: Category;
}
