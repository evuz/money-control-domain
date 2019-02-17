import { Entity, property } from 'ts-domain';

export type UserWithoutId = Pick<User, Exclude<keyof User, 'id'>>;
export interface User {
  id: string;
  firstname: string;
  telegramId?: string;
  lastname?: string;
  username?: string;
}

export class UserEntity extends Entity<User> {
  @property()
  id: string;
  @property()
  firstname: string;
  @property()
  telegramId?: string;
  @property()
  lastname?: string;
  @property()
  username?: string;

  constructor(props: UserWithoutId | User) {
    super(props);
  }
}
