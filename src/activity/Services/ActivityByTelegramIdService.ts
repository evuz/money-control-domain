import { GetUserByTelegramIdService } from '../../users/Services/GetUserByTelegramIdService';
import { IActivityByTelegramIdService } from './types';
import { User } from '../../users/Entities';

export abstract class ActivityByTelegramIdService {
  private userService: GetUserByTelegramIdService;

  constructor({ userService }: IActivityByTelegramIdService) {
    this.userService = userService;
  }

  protected getUser({ telegramId }: { telegramId: string }): Promise<User> {
    return this.userService.execute({ telegramId });
  }
}
