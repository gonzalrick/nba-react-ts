import { gql } from 'apollo-server-express';

const definitions = gql`
  extend type Query {
    schedule(date: String!): [Schedule!]!
  }

  type Schedule {
    gameId: ID!
    clock: String!
    hTeam: ScheduleTeam!
    isGameActivated: Boolean!
    nugget: String!
    period: Period!
    seasonYear: String!
    startTimeUTC: String!
    startDateEastern: String!
    statusNum: Int!
    vTeam: ScheduleTeam!
  }

  type ScheduleTeam {
    teamId: ID!
    triCode: String!
    linescore: [Int]!
    loss: Int!
    score: Int!
    win: Int!
    city: String
    fullName: String
    confName: String
    divName: String
    logo: String
  }

  type Period {
    current: Int!
    isEndOfPeriod: Boolean!
    isHalftime: Boolean!
    maxRegular: Int!
    type: Int!
  }
`;

export default () => [definitions];