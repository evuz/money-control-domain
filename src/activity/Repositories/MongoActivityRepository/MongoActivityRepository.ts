import { getRepository, Repository } from 'typeorm';
import { startOfMonth, endOfMonth } from 'date-fns';

import { ActivityRepository, IGetActivitiesByMonth } from '../ActivityRepository';
import { ActivityEntity } from '../../Entities/Activity';
import { Activity } from './Activity.entity';

export class MongoActivityRepository implements ActivityRepository {
  private _activityRepository: Repository<Activity>;
  private get activityRepository() {
    if (!this._activityRepository) {
      this._activityRepository = getRepository(Activity);
    }
    return this._activityRepository;
  }

  newActivity({ activity }: { activity: ActivityEntity }) {
    return this.activityRepository.save(new Activity(activity.flat())).then(a => new ActivityEntity(a.flat()));
  }

  getActivity({ id }: { id: number }) {
    return this.activityRepository.findOne(id).then(activity => new ActivityEntity(activity.flat()));
  }

  async getActivities({ user }: { user: Activity['user'] }) {
    const [activities, total] = await this.activityRepository.findAndCount({ where: { user } });
    const results = activities.map(activity => new ActivityEntity(activity.flat()));
    return { results, total };
  }

  async getActivitiesByMonth({ user, date, take, page }: IGetActivitiesByMonth) {
    const firsDayOfMonth = startOfMonth(date).getTime();
    const lastDayOfMonth = endOfMonth(date).getTime();
    const skip = take * page;
    const [activities, total] = await this.activityRepository.findAndCount({
      take,
      skip,
      where: { user, date: { $gte: firsDayOfMonth, $lte: lastDayOfMonth } },
      order: {
        date: 'ASC',
      },
    });
    const results = activities.map(activity => new ActivityEntity(activity.flat()));
    return { results, total };
  }

  removeActivity({ id }: { id: string }): Promise<any> {
    return this.activityRepository.delete(id);
  }
}
