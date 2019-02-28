import { UserEntity as User } from '../Entities/User';
import { TelegramUserEntity as TelegramUser } from '../Entities/TelegramUser';
import { TelegramBotUserEntity as TelegramBotUser } from '../Entities/TelegramBotUser';

export interface UsersRepository {
  newTelegramUser: (args: { user: TelegramUser }) => Promise<TelegramUser>;
  newTelegramBotUser: (args: { user: TelegramBotUser; password: string }) => Promise<TelegramBotUser>;
  newUser: (args: { user: User; password: string }) => Promise<User>;
  getTelegramUserByTelegramId: (args: { telegramId: string }) => Promise<TelegramUser>;
  getTelegramUser: (args: { id: string }) => Promise<TelegramUser>;
  getUser: (arg: { username: User['username'] } | { email: User['email'] }) => Promise<User>;
  loginUser: (args: ILoginUserByUsername | ILoginUserByEmail) => Promise<User>;
  loginTelegramBotUser: (args: { username: string; password: string }) => Promise<TelegramBotUser>;
}

export interface ILoginUserByUsername {
  username: User['username'];
  password: string;
}
export interface ILoginUserByEmail {
  email: User['email'];
  password: string;
}
