import { IService } from 'ts-domain';

import { UsersRepository } from '../Repositories/UsersRepository';
import { INewUserService } from './types';
import { User, UserWithoutId } from '../Entities/User';

export class NewUserService implements IService {
  private repository: UsersRepository;

  constructor({ repository }: INewUserService) {
    this.repository = repository;
  }

  execute({ user }: { user: UserWithoutId }) {
    return this.repository.newUser({ user: new User(user) });
  }
}
