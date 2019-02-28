import { Entity, property } from 'ts-domain';

import { UserRol } from './types';

export interface TelegramBotUser {
  rol: UserRol;
  username: string;
}
export type TelegramBotUserWithoutId = Pick<TelegramBotUser, Exclude<keyof TelegramBotUser, 'id'>>;

export class TelegramBotUserEntity extends Entity<TelegramBotUser> {
  @property()
  username: string;
  @property()
  rol: UserRol = UserRol.Bot;

  constructor(props: TelegramBotUserWithoutId | TelegramBotUser) {
    super(props);
  }
}
