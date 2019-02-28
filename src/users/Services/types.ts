import { UsersRepository } from '../Repositories/UsersRepository';

interface IUserService {
  repository: UsersRepository;
}
export interface IGetTelegramUserByTelegramIdService extends IUserService {}
export interface IGetTelegramUserService extends IUserService {}
export interface IGetUserService extends IUserService {}
export interface ILoginUserService extends IUserService {}
export interface ILoginTelegramBotUserService extends IUserService {}
export interface INewTelegramUserService extends IUserService {}
export interface INewTelegramBotUserService extends IUserService {}
export interface INewUserService extends IUserService {}
