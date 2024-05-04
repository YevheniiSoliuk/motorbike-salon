import User from 'src/users/entities/user.entity';

export default class RequestWithUser extends Request {
  user: User;
}
