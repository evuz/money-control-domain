import { GetAllUsersUseCase } from './GetAllUsersUseCase';
import { NewUserUseCase } from './NewUserUseCase';
import { UsersServiceFactory } from '../Services/factory';
import { GetUserByTelegramIdUseCase } from './GetUserByTelegramIdUseCase';

export class UsersUseCaseFactory {
  static getAllUsersUseCase = () => new GetAllUsersUseCase({ service: UsersServiceFactory.getAllUsersService() });
  static newUsersUseCase = () => new NewUserUseCase({ service: UsersServiceFactory.saveUsersService() });
  static getUserByTelegramIdUseCase = () =>
    new GetUserByTelegramIdUseCase({ service: UsersServiceFactory.getUserByTelegramIdService() });
}
