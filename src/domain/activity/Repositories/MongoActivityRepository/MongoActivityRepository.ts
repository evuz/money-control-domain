import { getRepository, Repository, Between, MoreThan } from 'typeorm';

import { ActivityRepository, IGetActivitiesByMonth } from '../ActivityRepository';
import { Activity } from './Activity.entity';
import { startOfMonth, endOfMonth, isFirstDayOfMonth } from 'date-fns';

export class MongoActivityRepository implements ActivityRepository {
  private activityRepository: Repository<Activity>;

  constructor() {
    this.activityRepository = getRepository(Activity);
  }

  newActivity({ activity }: { activity: Activity }) {
    return this.activityRepository.save(activity);
  }

  getActivity({ id }: { id: number }) {
    return this.activityRepository.findOne(id);
  }

  async getActivitiesByUserId({ userId }: { userId: Activity['userId'] }) {
    const [results, total] = await this.activityRepository.findAndCount({ where: { userId } });
    return { results, total };
  }

  async getActivitiesByMonth({ userId, date, take, page }: IGetActivitiesByMonth) {
    const firsDayOfMonth = startOfMonth(date).getTime();
    console.log(firsDayOfMonth);
    const lastDayOfMonth = endOfMonth(date).getTime();
    const skip = take * page;
    const [results, total] = await this.activityRepository.findAndCount({
      take,
      skip,
      where: { userId, date: { $gte: firsDayOfMonth, $lte: lastDayOfMonth } },
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
