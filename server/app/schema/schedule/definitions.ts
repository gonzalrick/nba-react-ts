import { gql } from 'apollo-server';

const definitions = gql`
  extend type Query {
    schedule(date: String!): [Schedule!]!
  }

  type Schedule {
    gameId: ID!
  }
`;

export default () => [definitions];