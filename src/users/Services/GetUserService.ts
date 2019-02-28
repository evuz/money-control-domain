import { IService } from 'ts-domain';

import { UsersRepository } from '../Repositories/UsersRepository';
import { IGetUserService } from './types';
import { User } from '../Entities/User';

export class GetUserService implements IService {
  private repository: UsersRepository;

  constructor({ repository }: IGetUserService) {
    this.repository = repository;
  }

  execute(opts: { username: User['username'] } | { email: User['email'] }): Promise<User> {
    return this.repository.getUser(opts).then(user => user.flat());
  }
}
