import { GetAllUsersService } from './GetAllUsersService';
import { NewUserService } from './NewUserService';
import { GetUserByTelegramIdService } from './GetUserByTelegramIdService';
import { IFactory } from '../../helpers/types';
import { repositorySelector } from '../../RepositorySelector';

export class UsersServiceFactory {
  static getAllUsersService = ({ config }: IFactory) =>
    new GetAllUsersService({ repository: repositorySelector.user({ config }) });
  static saveUsersService = ({ config }: IFactory) =>
    new NewUserService({ repository: repositorySelector.user({ config }) });
  static getUserByTelegramIdService = ({ config }: IFactory) =>
    new GetUserByTelegramIdService({ repository: repositorySelector.user({ config }) });
}
