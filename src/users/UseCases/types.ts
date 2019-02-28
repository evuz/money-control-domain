import { GetTelegramUserByTelegramIdService } from '../Services/GetTelegramUserByTelegramIdService';
import { GetTelegramUserService } from '../Services/GetTelegramUserService';
import { GetUserService } from '../Services/GetUserService';
import { LoginUserService } from '../Services/LoginUserService';
import { NewTelegramUserService } from '../Services/NewTelegramUserService';
import { NewUserService } from '../Services/NewUserService';
import { NewTelegramBotUserService } from '../Services/NewTelegramBotUserService';
import { LoginTelegramBotUserService } from '../Services/LoginTelegramBotUserService';

export interface IGetTelegramUserByTelegramIdUseCase {
  service: GetTelegramUserByTelegramIdService;
}
export interface IGetTelegramUserUseCase {
  service: GetTelegramUserService;
}
export interface IGetUserUseCase {
  service: GetUserService;
}
export interface ILoginUserUseCase {
  service: LoginUserService;
}
export interface ILoginTelegramBotUserUseCase {
  service: LoginTelegramBotUserService;
}
export interface INewTelegramUserUseCase {
  service: NewTelegramUserService;
}
export interface INewUserUseCase {
  service: NewUserService;
}
export interface INewTelegramBotUserUseCase {
  service: NewTelegramBotUserService;
}
