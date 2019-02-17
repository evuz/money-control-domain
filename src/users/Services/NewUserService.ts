import { IService } from 'ts-domain';

import { UsersRepository } from '../Repositories/UsersRepository';
import { INewUserService } from './types';
import { UserEntity, User, UserWithoutId } from '../Entities/User';

export class NewUserService implements IService {
  private repository: UsersRepository;

  constructor({ repository }: INewUserService) {
    this.repository = repository;
  }

  execute({ user }: { user: UserWithoutId }): Promise<User> {
    return this.repository.newUser({ user: new UserEntity(user) }).then(u => u.flat());
  }
}
