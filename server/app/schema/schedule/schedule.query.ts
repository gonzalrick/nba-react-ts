import { Schedule, QueryResolvers } from '../../generated';
import { IContext } from '../../interface';

export const schedule: QueryResolvers.ScheduleResolver<Schedule[]> = async (root, { date }, { dataSources }: IContext) => {
  return await dataSources.nbaAPI.getSchedule(date);
}