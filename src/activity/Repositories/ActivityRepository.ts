import { ActivityEntity as Activity } from '../Entities/Activity';

export interface IGetActivitiesByMonth {
  user: Activity['user'];
  date: number;
  take?: number;
  page?: number;
}

export interface IGetActivities {
  results: Activity[];
  total: number;
}

export interface ActivityRepository {
  newActivity: (args: { activity: Activity }) => Promise<Activity>;
  getActivity: ({ id: string }) => Promise<Activity>;
  getActivities: ({ user }: { user: Activity['user'] }) => Promise<IGetActivities>;
  getActivitiesByMonth: ({ user, date }: IGetActivitiesByMonth) => Promise<IGetActivities>;
  removeActivity: ({ id: string }) => Promise<void>;
}
