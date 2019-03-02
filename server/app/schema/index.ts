import { makeExecutableSchema } from 'graphql-tools';
import { gql } from 'apollo-server';

import { typeDefs as scheduleTypeDefs, resolvers as scheduleResolvers } from './schedule';
import { typeDefs as playerTypeDefs, resolvers as playerResolvers } from './player';
import { typeDefs as teamTypeDefs, resolvers as teamResolvers } from './team';

const typeDef = gql`
  type Query
`;

export const schema = makeExecutableSchema({
  typeDefs: [
    typeDef,
    scheduleTypeDefs,
    playerTypeDefs,
    teamTypeDefs,
  ],
  resolvers: [
    scheduleResolvers,
    playerResolvers,
    teamResolvers,
  ],
});