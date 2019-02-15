import { GetAllUsersUseCase } from './GetAllUsersUseCase';
import { NewUserUseCase } from './NewUserUseCase';
import { UsersServiceFactory } from '../Services/factory';
import { GetUserByTelegramIdUseCase } from './GetUserByTelegramIdUseCase';
import { IFactory } from '../../helpers/types';

export class UsersUseCaseFactory {
  static getAllUsersUseCase = ({ config }: IFactory) =>
    new GetAllUsersUseCase({ service: UsersServiceFactory.getAllUsersService({ config }) });
  static newUsersUseCase = ({ config }: IFactory) =>
    new NewUserUseCase({ service: UsersServiceFactory.saveUsersService({ config }) });
  static getUserByTelegramIdUseCase = ({ config }: IFactory) =>
    new GetUserByTelegramIdUseCase({ service: UsersServiceFactory.getUserByTelegramIdService({ config }) });
}
