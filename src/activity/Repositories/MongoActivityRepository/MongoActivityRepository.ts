import { getRepository, Repository } from 'typeorm';
import { startOfMonth, endOfMonth } from 'date-fns';

import { ActivityRepository, IGetActivitiesByMonth } from '../ActivityRepository';
import { Activity } from './Activity.entity';
import { Activity as ActivityEntity } from '../../Entities/Activity';

export class MongoActivityRepository implements ActivityRepository {
  private _activityRepository: Repository<Activity>;
  private get activityRepository() {
    if (!this._activityRepository) {
      this._activityRepository = getRepository(Activity);
    }
    return this._activityRepository;
  }

  newActivity({ activity }: { activity: Activity }) {
    return this.activityRepository.save(activity).then(this.flatActivity);
  }

  getActivity({ id }: { id: number }) {
    return this.activityRepository.findOne(id).then(this.flatActivity);
  }

  async getActivities({ user }: { user: Activity['user'] }) {
    const [activities, total] = await this.activityRepository.findAndCount({ where: { user } });
    const results = activities.map(this.flatActivity);
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
    const results = activities.map(this.flatActivity);
    return { results, total };
  }

  removeActivity({ id }: { id: string }): Promise<any> {
    return this.activityRepository.delete(id);
  }

  private flatActivity(activity: Activity): ActivityEntity {
    return {
      id: activity.id,
      concept: activity.concept,
      amount: activity.amount,
      user: activity.user,
      date: activity.date,
    };
  }
}
