import { IUseCase } from 'ts-domain';

import { INewUserUseCase } from './types';
import { UserWithoutId } from '../Entities/User';
import { NewUserService } from '../Services/NewUserService';

export class NewUserUseCase implements IUseCase {
  private service: NewUserService;

  constructor({ service }: INewUserUseCase) {
    this.service = service;
  }

  execute({ user, password }: { user: UserWithoutId; password: string }) {
    return this.service.execute({ user, password });
  }
}
