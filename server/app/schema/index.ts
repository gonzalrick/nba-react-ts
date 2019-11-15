import { makeExecutableSchema } from 'graphql-tools';
import gql from 'graphql-tag';

import { GameTypeDefs, GameResolvers } from './game';
import { ScheduleTypeDefs, ScheduleResolvers } from './schedule';
import { PlayerTypeDefs, PlayerResolvers } from './player';
import { TeamTypeDefs, TeamResolvers } from './team';

const typeDef = gql`
  type Query
`;

export const schema = makeExecutableSchema({
  typeDefs: [
    typeDef,
    GameTypeDefs,
    ScheduleTypeDefs,
    PlayerTypeDefs,
    TeamTypeDefs,
  ],
  resolvers: [GameResolvers, ScheduleResolvers, PlayerResolvers, TeamResolvers],
});
