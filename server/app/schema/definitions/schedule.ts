import { gql } from 'apollo-server'

const definitions = gql`
  extend type Query {
    schedule(date: String!): [Schedule!]!
  }

  type Schedule {
    gameId: ID!
    endTimeUTC: String!
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
    teamId: String!
    triCode: String!
    linescore: [Score!]!
    loss: Int!
    score: Int!
    win: Int!
  }

  type Score {
    score: Int!
  }

  type Period {
    current: Int!
    isEndOfPeriod: Boolean!
    isHalftime: Boolean!
    maxRegular: Int!
    type: Int!
  }
`

export default () => [definitions]