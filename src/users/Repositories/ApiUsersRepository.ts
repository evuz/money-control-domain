import { UsersRepository } from './UsersRepository';
import { ApiRepository } from '../../helpers/ApiRepository';
import { UserEntity as User } from '../Entities/User';

export class ApiUsersRepository extends ApiRepository implements UsersRepository {
  getAllUsers(): any {
    throw Error('ApiUserRepository#getAllUsers not implemented');
  }

  newUser({  }: { user: User }): any {
    throw Error('ApiUserRepository#newUser not implemented');
  }

  getUserByTelegramId({ telegramId }: { telegramId: string }) {
    return this.http.get(`/user/telegram/${telegramId}`).then(res => new User(res.data));
  }
}
