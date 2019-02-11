import { UsersRepository } from '../Repositories/UsersRepository';

interface IUserService {
  repository: UsersRepository;
}
export interface IGetAllUsersService extends IUserService {}
export interface INewUserService extends IUserService {}
