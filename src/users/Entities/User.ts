export type UserWithoutId = Pick<User, Exclude<keyof User, 'id'>> & Partial<Pick<User, 'id'>>;
export class User {
  id: string;
  firstname: string;
  telegramId?: string;
  lastname?: string;
  username?: string;

  constructor({ firstname, lastname, username, telegramId, id }: UserWithoutId) {
    this.telegramId = telegramId;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.id = id;
  }
}
