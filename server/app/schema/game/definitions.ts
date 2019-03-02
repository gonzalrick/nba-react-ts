import { gql } from 'apollo-server';

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
    period: Period
    vTeam: ScheduleTeam!
    hTeam: ScheduleTeam!
    stats: GameStats!
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
    jersey: Int!
    isOnCourt: Boolean!
    points: Int!
    pos: String!
    min: String!
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
`;

export default () => [definitions];