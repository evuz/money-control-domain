import { IService } from '../../lib/models/Service';

interface IUserUseCase {
  service: IService;
}

export interface IGetAllUsersUseCase extends IUserUseCase {}

export interface INewUserUseCase extends IUserUseCase {}