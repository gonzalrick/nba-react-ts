import definitions from './definitions';
import { Schedule } from './schedule.type';
import { ScheduleTeam } from './scheduleTeam.type';
import { schedule } from './schedule.query';

export const ScheduleTypeDefs = definitions;
export const ScheduleResolvers = {
  Schedule,
  ScheduleTeam,
  Query: {
    schedule,
  }
};