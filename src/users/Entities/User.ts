export class User {
  telegramId?: string;
  firstname: string;
  lastname?: string;
  username?: string;

  constructor({ firstname, lastname, username, telegramId }: User) {
    this.telegramId = telegramId;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
  }
}
