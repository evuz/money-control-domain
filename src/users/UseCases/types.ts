import { GetAllUsersService } from '../Services/GetAllUsersService';
import { NewUserService } from '../Services/NewUserService';
import { GetUserByTelegramIdService } from '../Services/GetUserByTelegramIdService';

export interface IGetAllUsersUseCase {
  service: GetAllUsersService;
}
export interface INewUserUseCase {
  service: NewUserService;
}
export interface IGetUserByTelegramIdUseCase {
  service: GetUserByTelegramIdService;
}
