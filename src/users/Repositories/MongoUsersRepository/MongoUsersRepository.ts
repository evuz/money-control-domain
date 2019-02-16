import { getRepository, Repository } from 'typeorm';

import { UsersRepository } from '../UsersRepository';
import { User } from './User.entity';
import { User as UserEntity } from '../../Entities/User';

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
      return users.map(this.flatUser);
    });
  }

  newUser({ user }: { user: User }) {
    return this.userRepository.save(user).then(this.flatUser);
  }

  getUserByTelegramId({ telegramId }: { telegramId: string }) {
    return this.userRepository.findOneOrFail({ where: { telegramId } }).then(this.flatUser);
  }

  private flatUser(user: User): UserEntity {
    return {
      id: user.id,
      firstname: user.firstname,
      telegramId: user.telegramId,
      lastname: user.lastname,
      username: user.username,
    };
  }
}
