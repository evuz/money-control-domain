import { IUseCase } from 'ts-domain';

import { INewTelegramUserUseCase } from './types';
import { NewTelegramUserService } from '../Services/NewTelegramUserService';
import { TelegramUserWithoutId } from '../Entities/TelegramUser';

export class NewTelegramUserUseCase implements IUseCase {
  private service: NewTelegramUserService;

  constructor({ service }: INewTelegramUserUseCase) {
    this.service = service;
  }

  execute({ user }: { user: TelegramUserWithoutId }) {
    return this.service.execute({ user });
  }
}
