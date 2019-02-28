import { Entity, property } from 'ts-domain';
import { UserRol } from './types';

export type TelegramUserWithoutId = Pick<TelegramUser, Exclude<keyof TelegramUser, 'id'>>;
export interface TelegramUser {
  id: string;
  rol: UserRol;
  firstname: string;
  telegramId: string;
  lastname?: string;
  username?: string;
}

export class TelegramUserEntity extends Entity<TelegramUser> {
  @property()
  id: string;
  @property()
  rol: UserRol = UserRol.User;
  @property()
  firstname: string;
  @property()
  telegramId: string;
  @property()
  lastname: string;
  @property()
  username: string;

  constructor(props: TelegramUserWithoutId | TelegramUser) {
    super(props);
  }
}
