import { IService } from 'ts-domain';

import { UsersRepository } from '../Repositories/UsersRepository';
import { IGetAllUsersService } from './types';
import { User } from '../Entities';

export class GetUserByTelegramIdService implements IService {
  private repository: UsersRepository;

  constructor({ repository }: IGetAllUsersService) {
    this.repository = repository;
  }

  execute({ telegramId }: { telegramId: string }): Promise<User> {
    return this.repository.getUserByTelegramId({ telegramId }).then(user => user.flat());
  }
}
