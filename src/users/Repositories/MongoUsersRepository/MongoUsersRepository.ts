import { getRepository, Repository } from 'typeorm';

import { UsersRepository } from '../UsersRepository';
import { UserEntity } from '../../Entities/User';
import { User } from './User.entity';

export class MongoUsersRepository implements UsersRepository {
  private _userRepository: Repository<User>;
  private get userRepository() {
    if (!this._userRepository) {
      this._userRepository = getRepository(User);
    }
    return this._userRepository;
  }

  getAllUsers() {
    return this.userRepository.find().then(users => {
      return users.map(user => new UserEntity(user.flat()));
    });
  }

  newUser({ user }: { user: UserEntity }) {
    return this.userRepository.save(new User(user.flat())).then(u => new UserEntity(u.flat()));
  }

  getUserByTelegramId({ telegramId }: { telegramId: string }) {
    return this.userRepository.findOneOrFail({ where: { telegramId } }).then(user => {
      return new UserEntity(user.flat());
    });
  }
}
