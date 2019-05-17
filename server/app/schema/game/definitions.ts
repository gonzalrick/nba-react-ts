import { gql } from 'apollo-server-express';

const definitions = gql`
  extend type Query {
    game(date: String!, gameId: String!): Game!
  }

  type Game {
    gameId: String!
    arena: String!
    isGameActivated: Boolean!
    statusNum: Int!
    startTimeEastern: String!
    startTimeUTC: String!
    startDateEastern: String!
    clock: String!
    nugget: String!
    period: Period!
    vTeam: ScheduleTeam!
    hTeam: ScheduleTeam!
    stats: GameStats
    playoffs: Playoffs
  }

  type GameStats {
    timesTied: Int!
    leadChanges: Int!
    vTeam: GameTeamStats!
    hTeam: GameTeamStats!
    activePlayers: [GamePlayerStats!]!
  }

  type GameTeamStats {
    fastBreakPoints: Int!
    pointsInPaint: Int!
    biggestLead: Int!
    secondChancePoints: Int!
    pointsOffTurnovers: Int!
    longestRun: Int!
    totals: GameTotals!
  }

  type GamePlayerStats {
    personId: String!
    firstName: String!
    lastName: String!
    teamId: String!
    jersey: String!
    isOnCourt: Boolean!
    points: String!
    pos: String!
    min: String!
    fgm: String!
    fga: String!
    fgp: String!
    ftm: String!
    fta: String!
    ftp: String!
    tpm: String!
    tpa: String!
    tpp: String!
    offReb: String!
    defReb: String!
    totReb: String!
    assists: String!
    pFouls: String!
    steals: String!
    turnovers: String!
    blocks: String!
    plusMinus: String!
    dnp: String!
  }

  type GameTotals {
    points: Int!
    fgm: Int!
    fga: Int!
    fgp: Float!
    ftm: Int!
    fta: Int!
    ftp: Float!
    tpm: Int!
    tpa: Int!
    tpp: Float!
    offReb: Int!
    defReb: Int!
    totReb: Int!
    assists: Int!
    pFouls: Int!
    steals: Int!
    turnovers: Int!
    blocks: Int!
    plusMinus: Int!
    min: String!
  }

  type GameStatLeaders {
    points: GameStatLeaderValues
    rebounds: GameStatLeaderValues
    assists: GameStatLeaderValues
  }

  type GameStatLeaderValues {
    value: Int!
    players: [PlayerPersonId!]!
  }

  type PlayerPersonId {
    personId: String!
  }

  type Playoffs {
    summary: String!
  }
`;

export default () => [definitions];