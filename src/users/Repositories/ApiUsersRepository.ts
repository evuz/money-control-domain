import { UsersRepository } from './UsersRepository';
import { ApiRepository } from '../../helpers/ApiRepository';

export class ApiUsersRepository extends ApiRepository implements UsersRepository {
  newTelegramUser(): any {
    throw Error('Not implemented yet');
  }

  newTelegramBotUser(): any {
    throw Error('Not implemented yet');
  }

  newUser(): any {
    throw Error('Not implemented yet');
  }

  getTelegramUserByTelegramId(): any {
    throw Error('Not implemented yet');
  }

  getTelegramUser(): any {
    throw Error('Not implemented yet');
  }

  getUser(): any {
    throw Error('Not implemented yet');
  }

  loginUser(): any {
    throw Error('Not implemented yet');
  }

  loginTelegramBotUser(): any {
    throw Error('Not implemented yet');
  }
}
