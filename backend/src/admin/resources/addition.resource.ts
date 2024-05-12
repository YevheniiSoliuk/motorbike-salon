import Addition from 'src/additions/entities/addition.entity';
import { additionsNavigation } from '../constants';

export const AdditionResource = {
  resource: Addition,
  options: {
    navigation: additionsNavigation,
  },
};
