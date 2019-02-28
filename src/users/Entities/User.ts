import { Entity, property } from 'ts-domain';

import { UserRol } from './types';

export interface User {
  id: string;
  rol: UserRol;
  username: string;
  email: string;
  firstname: string;
  lastname?: string;
}
export type UserWithoutId = Pick<User, Exclude<keyof User, 'id'>>;

export class UserEntity extends Entity<User> {
  @property()
  id: string;
  @property()
  username: string;
  @property()
  rol: UserRol = UserRol.User;
  @property()
  email: string;
  @property()
  firstname: string;
  @property()
  lastname: string;

  constructor(props: UserWithoutId | User) {
    super(props);
  }
}
