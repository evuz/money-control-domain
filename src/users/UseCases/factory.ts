import { GetTelegramUserByTelegramIdUseCase } from './GetTelegramUserByTelegramIdUseCase';
import { GetTelegramUserUseCase } from './GetTelegramUserUseCase';
import { GetUserUseCase } from './GetUserUseCase';
import { LoginUserUseCase } from './LoginUserUseCase';
import { NewTelegramUserUseCase } from './NewTelegramUserUseCase';
import { NewUserUseCase } from './NewUserUseCase';
import { UsersServiceFactory } from '../Services/factory';
import { IFactory } from '../../helpers/types';
import { NewTelegramBotUserUseCase } from './NewTelegramBotUserUseCase';
import { LoginTelegramBotUserUseCase } from './LoginTelegramBotUserUseCase';

export class UsersUseCaseFactory {
  static getTelegramUserByTelegramIdUseCase = ({ config }: IFactory) =>
    new GetTelegramUserByTelegramIdUseCase({
      service: UsersServiceFactory.getTelegramUserByTelegramIdService({ config }),
    });
  static getTelegramUserUseCase = ({ config }: IFactory) =>
    new GetTelegramUserUseCase({ service: UsersServiceFactory.getTelegramUserService({ config }) });
  static getUserUseCase = ({ config }: IFactory) =>
    new GetUserUseCase({ service: UsersServiceFactory.getUserService({ config }) });
  static loginUserUseCase = ({ config }: IFactory) =>
    new LoginUserUseCase({ service: UsersServiceFactory.loginUserService({ config }) });
  static loginTelegramBotUserUseCase = ({ config }: IFactory) =>
    new LoginTelegramBotUserUseCase({ service: UsersServiceFactory.loginTelegramBotUserService({ config }) });
  static newTelegramUserUseCase = ({ config }: IFactory) =>
    new NewTelegramUserUseCase({ service: UsersServiceFactory.newTelegramUserService({ config }) });
  static newUserUseCase = ({ config }: IFactory) =>
    new NewUserUseCase({ service: UsersServiceFactory.newUserService({ config }) });
  static newTelegramBotUserUseCase = ({ config }: IFactory) =>
    new NewTelegramBotUserUseCase({ service: UsersServiceFactory.newTelegramBotUserService({ config }) });
}
