import { gql } from 'apollo-server-express';

const definitions = gql`
  extend type Query {
    players(date: String!): [Player!]!
  }

  type Player {
    firstName: String!
    lastName: String!
    personId: String!
    jersey: Int!
    pos: String!
    heightFeet: Int!
    heightInches: Int!
    heightMeters: Float!
    weightPounds: Float!
    weightKilograms: Float!
    dateOfBirthUTC: String!
    teams: [Team!]!
  }
`;

export default () => [definitions];