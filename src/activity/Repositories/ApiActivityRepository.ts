import { ActivityRepository, IGetActivitiesByMonth } from './ActivityRepository';
import { ApiRepository } from '../../helpers/ApiRepository';
import { Activity } from '../Entities/Activity';

export class ApiActivityRepository extends ApiRepository implements ActivityRepository {
  newActivity({ activity }: { activity: Activity }) {
    const activityType = activity.amount > 0 ? 'income' : 'expense';
    const endpoint = `/activity/${activityType}`;
    return this.http.post(endpoint, activity).then(res => res.data);
  }

  getActivity({ id }: { id: number }) {
    return this.http.get(`/activity/${id}`).then(res => res.data);
  }

  getActivities({  }: { user: Activity['user'] }): any {
    throw Error('ApiActivityRepository#getActivities not implemented');
  }

  async getActivitiesByMonth({ user, date, take, page }: IGetActivitiesByMonth) {
    return this.http
      .get(`activities/${user}/${date}`, {
        params: {
          take,
          page,
        },
      })
      .then(res => res.data);
  }

  removeActivity({ id }: { id: string }): Promise<any> {
    return this.http.delete(`/activity/${id}`);
  }
}
