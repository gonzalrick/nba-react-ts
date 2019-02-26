import { Team, QueryResolvers } from '../../generated';

export const teams: QueryResolvers.TeamsResolver<Team[]> = async (root, { date }, context) => {
  const results = await context.dataSources.nbaAPI.getTeams(date);
  return results;
}