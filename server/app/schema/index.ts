import { makeExecutableSchema } from 'graphql-tools';
import { gql } from 'apollo-server';

import { typeDefs as scheduleTypeDefs, resolvers as scheduleResolvers } from './schedule';

const typeDef = gql`
  type Query
`;

export const schema = makeExecutableSchema({
  typeDefs: [
    typeDef,
    scheduleTypeDefs,
  ],
  resolvers: [
    scheduleResolvers,
  ],
});