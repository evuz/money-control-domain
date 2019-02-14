import { getRepository, Repository } from 'typeorm';

import { UsersRepository } from '../UsersRepository';
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
    return this.userRepository.find();
  }

  newUser({ user }: { user: User }) {
    return this.userRepository.save(user);
  }

  getUserByTelegramId({ telegramId }: { telegramId: string }) {
    return this.userRepository.findOneOrFail({ where: { telegramId } });
  }
}
