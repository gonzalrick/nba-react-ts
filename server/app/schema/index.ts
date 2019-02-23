import { makeExecutableSchema } from 'graphql-tools';
import { gql } from 'apollo-server';

import { typeDefs as scheduleTypeDefs, resolvers as scheduleResolvers } from './schedule';
import { typeDefs as teamTypeDefs } from './team';

const typeDef = gql`
  type Query
`;

export const schema = makeExecutableSchema({
  typeDefs: [
    typeDef,
    scheduleTypeDefs,
    teamTypeDefs,
  ],
  resolvers: [
    scheduleResolvers,
  ],
});