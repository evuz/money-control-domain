import { GetTelegramUserByTelegramIdService } from '../../users/Services/GetTelegramUserByTelegramIdService';
import { IActivityByTelegramIdService } from './types';
import { TelegramUser } from '../../users/Entities';

export abstract class ActivityByTelegramIdService {
  private userService: GetTelegramUserByTelegramIdService;

  constructor({ userService }: IActivityByTelegramIdService) {
    this.userService = userService;
  }

  protected getUser({ telegramId }: { telegramId: string }): Promise<TelegramUser> {
    return this.userService.execute({ telegramId });
  }
}
