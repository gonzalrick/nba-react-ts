import { TypeResolver } from '../../interface';
import { Game as GameType } from '../../generated';

export const Game: TypeResolver<GameType> = {
  gameId: root => root.gameId,
  arena: root => root.arena,
  isGameActivated: root => root.isGameActivated,
  statusNum: root => root.statusNum,
  startTimeEastern: root => root.startTimeEastern,
  startTimeUTC: root => root.startTimeUTC,
  startDateEastern: root => root.startDateEastern,
  clock: root => root.clock,
  nugget: root => root.nugget,
  period: root => root.period,
  vTeam: async (root, args, { loaders }) => {
    const team = await loaders.getTeamByIds.load(root.vTeam.teamId);
    return {
      ...root.vTeam,
      ...team,
    };
  },
  hTeam: async (root, args, { loaders }) => {
    const team = await loaders.getTeamByIds.load(root.hTeam.teamId);
    return {
      ...root.hTeam,
      ...team,
    };
  },
  stats: root => root.stats,
}