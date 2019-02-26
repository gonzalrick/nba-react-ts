import { gql } from 'apollo-server';

const definitions = gql`
  extend type Query {
    teams(date: String!): [Team!]!
  }

  type Team {
    city: String!,
    fullName: String!,
    triCode: String!,
    teamId: String!,
    confName: String!,
    divName: String!,
  }
`;

export default () => [definitions];