import { getRepository, Repository } from 'typeorm';

import { ActivityRepository, IGetActivitiesByMonth } from '../ActivityRepository';
import { Activity } from './Activity.entity';
import { startOfMonth, endOfMonth } from 'date-fns';

export class MongoActivityRepository implements ActivityRepository {
  private _activityRepository: Repository<Activity>;
  private get activityRepository() {
    if (!this._activityRepository) {
      this._activityRepository = getRepository(Activity);
    }
    return this._activityRepository;
  }

  newActivity({ activity }: { activity: Activity }) {
    return this.activityRepository.save(activity);
  }

  getActivity({ id }: { id: number }) {
    return this.activityRepository.findOne(id);
  }

  async getActivities({ user }: { user: Activity['user'] }) {
    const [results, total] = await this.activityRepository.findAndCount({ where: { user } });
    return { results, total };
  }

  async getActivitiesByMonth({ user, date, take, page }: IGetActivitiesByMonth) {
    const firsDayOfMonth = startOfMonth(date).getTime();
    const lastDayOfMonth = endOfMonth(date).getTime();
    const skip = take * page;
    const [results, total] = await this.activityRepository.findAndCount({
      take,
      skip,
      where: { user, date: { $gte: firsDayOfMonth, $lte: lastDayOfMonth } },
      order: {
        date: 'ASC',
      },
    });
    return { results, total };
  }

  removeActivity({ id }: { id: string }): Promise<any> {
    return this.activityRepository.delete(id);
  }
}
