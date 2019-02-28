import { GetTelegramUserByTelegramIdService } from './GetTelegramUserByTelegramIdService';
import { GetTelegramUserService } from './GetTelegramUserService';
import { GetUserService } from './GetUserService';
import { LoginUserService } from './LoginUserService';
import { NewTelegramUserService } from './NewTelegramUserService';
import { NewUserService } from './NewUserService';
import { IFactory } from '../../helpers/types';
import { repositorySelector } from '../../RepositorySelector';
import { NewTelegramBotUserService } from './NewTelegramBotUserService';
import { LoginTelegramBotUserService } from './LoginTelegramBotUserService';

export class UsersServiceFactory {
  static getTelegramUserByTelegramIdService = ({ config }: IFactory) =>
    new GetTelegramUserByTelegramIdService({ repository: repositorySelector.user({ config }) });
  static getTelegramUserService = ({ config }: IFactory) =>
    new GetTelegramUserService({ repository: repositorySelector.user({ config }) });
  static getUserService = ({ config }: IFactory) =>
    new GetUserService({ repository: repositorySelector.user({ config }) });
  static loginUserService = ({ config }: IFactory) =>
    new LoginUserService({ repository: repositorySelector.user({ config }) });
  static loginTelegramBotUserService = ({ config }: IFactory) =>
    new LoginTelegramBotUserService({ repository: repositorySelector.user({ config }) });
  static newTelegramUserService = ({ config }: IFactory) =>
    new NewTelegramUserService({ repository: repositorySelector.user({ config }) });
  static newTelegramBotUserService = ({ config }: IFactory) =>
    new NewTelegramBotUserService({ repository: repositorySelector.user({ config }) });
  static newUserService = ({ config }: IFactory) =>
    new NewUserService({ repository: repositorySelector.user({ config }) });
}
