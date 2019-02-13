import { IService, IUseCase } from 'ts-domain';

import { INewUserUseCase } from './types';
import { UserWithoutId } from '../Entities/User';

export class NewUserUseCase implements IUseCase {
  private service: IService;

  constructor({ service }: INewUserUseCase) {
    this.service = service;
  }

  execute({ user }: { user: UserWithoutId }) {
    return this.service.execute({ user });
  }
}
