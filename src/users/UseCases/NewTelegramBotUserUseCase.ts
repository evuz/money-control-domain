import { IUseCase } from 'ts-domain';

import { INewTelegramBotUserUseCase } from './types';
import { TelegramBotUserWithoutId } from '../Entities/TelegramBotUser';
import { NewTelegramBotUserService } from '../Services/NewTelegramBotUserService';

export class NewTelegramBotUserUseCase implements IUseCase {
  private service: NewTelegramBotUserService;

  constructor({ service }: INewTelegramBotUserUseCase) {
    this.service = service;
  }

  execute({ user, password }: { user: TelegramBotUserWithoutId; password: string }) {
    return this.service.execute({ user, password });
  }
}
