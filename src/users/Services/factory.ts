import { GetAllUsersService } from './GetAllUsersService';
import { NewUserService } from './NewUserService';
import { UsersRepositoryFactory } from '../Repositories/factory';
import { GetUserByTelegramIdService } from './GetUserByTelegramIdService';

export class UsersServiceFactory {
  static getAllUsersService = () =>
    new GetAllUsersService({ repository: UsersRepositoryFactory.mongoUsersRepository() });
  static saveUsersService = () => new NewUserService({ repository: UsersRepositoryFactory.mongoUsersRepository() });
  static getUserByTelegramIdService = () =>
    new GetUserByTelegramIdService({ repository: UsersRepositoryFactory.mongoUsersRepository() });
}
