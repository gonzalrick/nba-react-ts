import { gql } from 'apollo-server';
import { typeDefs as Team } from '../team'

const definitions = gql`
  extend type Query {
    schedule(date: String!): [Schedule!]!
  }

  type Schedule {
    gameId: ID!
    endTimeUTC: String
    hTeam: Team
    isGameActivated: Boolean
    nugget: String
    period: Period
    seasonYear: String
    startTimeUTC: String
    startDateEastern: String
    statusNum: Int
    vTeam: Team
  }

  type Period {
    current: Int
    isEndOfPeriod: Boolean
    isHalftime: Boolean
    maxRegular: Int
    type: Int
  }
`;

export default () => [definitions, Team];