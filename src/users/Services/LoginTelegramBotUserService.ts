import { IService } from 'ts-domain';

import { UsersRepository } from '../Repositories/UsersRepository';
import { ILoginTelegramBotUserService } from './types';
import { TelegramBotUser } from '../Entities/TelegramBotUser';

export class LoginTelegramBotUserService implements IService {
  private repository: UsersRepository;

  constructor({ repository }: ILoginTelegramBotUserService) {
    this.repository = repository;
  }

  execute(opts: { username: string; password: string }): Promise<TelegramBotUser> {
    return this.repository.loginTelegramBotUser(opts).then(user => user.flat());
  }
}
