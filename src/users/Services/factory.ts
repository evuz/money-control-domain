import { GetAllUsersService } from './GetAllUsersService';
import { NewUserService } from './NewUserService';
import { UsersRepositoryFactory } from '../Repositories/factory';
import { GetUserByTelegramIdService } from './GetUserByTelegramIdService';
import { IFactory } from '../../helpers/types';

export class UsersServiceFactory {
  static getAllUsersService = ({ config }: IFactory) =>
    new GetAllUsersService({ repository: UsersRepositoryFactory.mongoUsersRepository({ config }) });
  static saveUsersService = ({ config }: IFactory) =>
    new NewUserService({ repository: UsersRepositoryFactory.mongoUsersRepository({ config }) });
  static getUserByTelegramIdService = ({ config }: IFactory) =>
    new GetUserByTelegramIdService({ repository: UsersRepositoryFactory.mongoUsersRepository({ config }) });
}
