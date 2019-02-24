import { TypeResolver } from '../../interface';
import { Schedule as ScheduleType } from '../../generated';

export const Schedule: TypeResolver<ScheduleType> = {
  gameId: root => root.gameId,
  clock: root => root.clock,
  hTeam: root => root.hTeam,
  isGameActivated: root => root.isGameActivated,
  nugget: root => root.nugget,
  period: root => root.period,
  seasonYear: root => root.seasonYear,
  startTimeUTC: root => root.startTimeUTC,
  startDateEastern: root => root.startDateEastern,
  statusNum: root => root.statusNum,
  vTeam: root => root.vTeam,
}