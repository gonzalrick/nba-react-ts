import { Team, QueryResolvers } from '../../generated';

export const teams: QueryResolvers.TeamsResolver<Team[]> = async (root, { date }, context) => {
  return context.dataSources.nbaAPI.getTeams(date);
}