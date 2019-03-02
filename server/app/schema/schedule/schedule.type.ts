import { TypeResolver } from '../../interface';
import { Schedule as ScheduleType } from '../../generated';

export const Schedule: TypeResolver<ScheduleType> = {
  gameId: root => root.gameId,
  clock: root => root.clock,
  hTeam: async (root, args, { loaders }) => {
    const team = await loaders.getTeamByIds.load(root.hTeam.teamId);
    return {
      ...root.hTeam,
      ...team,
    };
  },
  isGameActivated: root => root.isGameActivated,
  nugget: root => root.nugget,
  period: root => root.period,
  seasonYear: root => root.seasonYear,
  startTimeUTC: root => root.startTimeUTC,
  startDateEastern: root => root.startDateEastern,
  statusNum: root => root.statusNum,
  vTeam: async (root, args, { loaders }) => {
    const team = await loaders.getTeamByIds.load(root.vTeam.teamId);
    return {
      ...root.vTeam,
      ...team,
    };
  },
}