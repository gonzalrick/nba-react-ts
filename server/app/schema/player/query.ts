import { Player, QueryResolvers } from '../../generated';

export const players: QueryResolvers.TeamsResolver<Player[]> = async (root, { date }, context) => {
  return context.dataSources.nbaAPI.getPlayers(date);
}