import definitions from './definitions';
import { Schedule } from './schedule.type';
import { ScheduleTeam } from './scheduleTeam.type';
import { schedule } from './schedule.query';

export const typeDefs = definitions;
export const resolvers = {
  Schedule,
  ScheduleTeam,
  Query: {
    schedule,
  }
};