import { Schedule, QueryResolvers } from '../../generated';

export const schedule: QueryResolvers.ScheduleResolver<Schedule[]> = async (root, { date }, context) => {
  return await context.dataSources.nbaAPI.getSchedule(date);
}