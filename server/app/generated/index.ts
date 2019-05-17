export type Maybe<T> = T | null;

// ====================================================
// Types
// ====================================================

export interface Query {
  game: Game;

  schedule: Schedule[];

  players: Player[];

  teams: Team[];
}

export interface Game {
  gameId: string;

  arena: string;

  isGameActivated: boolean;

  statusNum: number;

  startTimeEastern: string;

  startTimeUTC: string;

  startDateEastern: string;

  clock: string;

  nugget: string;

  period: Period;

  vTeam: ScheduleTeam;

  hTeam: ScheduleTeam;

  stats?: Maybe<GameStats>;

  playoffs?: Maybe<Playoffs>;
}

export interface Period {
  current: number;

  isEndOfPeriod: boolean;

  isHalftime: boolean;

  maxRegular: number;

  type: number;
}

export interface ScheduleTeam {
  teamId: string;

  triCode: string;

  linescore: (Maybe<number>)[];

  loss: number;

  score: number;

  win: number;

  city?: Maybe<string>;

  fullName?: Maybe<string>;

  confName?: Maybe<string>;

  divName?: Maybe<string>;

  logo?: Maybe<string>;
}

export interface GameStats {
  timesTied: number;

  leadChanges: number;

  vTeam: GameTeamStats;

  hTeam: GameTeamStats;

  activePlayers: GamePlayerStats[];
}

export interface GameTeamStats {
  fastBreakPoints: number;

  pointsInPaint: number;

  biggestLead: number;

  secondChancePoints: number;

  pointsOffTurnovers: number;

  longestRun: number;

  totals: GameTotals;
}

export interface GameTotals {
  points: number;

  fgm: number;

  fga: number;

  fgp: number;

  ftm: number;

  fta: number;

  ftp: number;

  tpm: number;

  tpa: number;

  tpp: number;

  offReb: number;

  defReb: number;

  totReb: number;

  assists: number;

  pFouls: number;

  steals: number;

  turnovers: number;

  blocks: number;

  plusMinus: number;

  min: string;
}

export interface GamePlayerStats {
  personId: string;

  firstName: string;

  lastName: string;

  teamId: string;

  jersey: string;

  isOnCourt: boolean;

  points: string;

  pos: string;

  min: string;

  fgm: string;

  fga: string;

  fgp: string;

  ftm: string;

  fta: string;

  ftp: string;

  tpm: string;

  tpa: string;

  tpp: string;

  offReb: string;

  defReb: string;

  totReb: string;

  assists: string;

  pFouls: string;

  steals: string;

  turnovers: string;

  blocks: string;

  plusMinus: string;

  dnp: string;
}

export interface Playoffs {
  summary: string;
}

export interface Schedule {
  gameId: string;

  clock: string;

  hTeam: ScheduleTeam;

  isGameActivated: boolean;

  nugget: string;

  period: Period;

  seasonYear: string;

  startTimeUTC: string;

  startDateEastern: string;

  statusNum: number;

  vTeam: ScheduleTeam;
}

export interface Player {
  firstName: string;

  lastName: string;

  personId: string;

  jersey: number;

  pos: string;

  heightFeet: number;

  heightInches: number;

  heightMeters: number;

  weightPounds: number;

  weightKilograms: number;

  dateOfBirthUTC: string;

  teams: Team[];
}

export interface Team {
  city: string;

  fullName: string;

  triCode: string;

  teamId: string;

  confName: string;

  divName: string;

  logo?: Maybe<string>;
}

export interface GameStatLeaders {
  points?: Maybe<GameStatLeaderValues>;

  rebounds?: Maybe<GameStatLeaderValues>;

  assists?: Maybe<GameStatLeaderValues>;
}

export interface GameStatLeaderValues {
  value: number;

  players: PlayerPersonId[];
}

export interface PlayerPersonId {
  personId: string;
}

// ====================================================
// Arguments
// ====================================================

export interface GameQueryArgs {
  date: string;

  gameId: string;
}
export interface ScheduleQueryArgs {
  date: string;
}
export interface PlayersQueryArgs {
  date: string;
}
export interface TeamsQueryArgs {
  date: string;
}

import { GraphQLResolveInfo } from 'graphql';

import { IContext } from '../interface';

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo,
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo,
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  TContext = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
  | ISubscriptionResolverObject<Result, Parent, TContext, Args>;

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
  parent: Parent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = {}> {
    game?: GameResolver<Game, TypeParent, TContext>;

    schedule?: ScheduleResolver<Schedule[], TypeParent, TContext>;

    players?: PlayersResolver<Player[], TypeParent, TContext>;

    teams?: TeamsResolver<Team[], TypeParent, TContext>;
  }

  export type GameResolver<
    R = Game,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, GameArgs>;
  export interface GameArgs {
    date: string;

    gameId: string;
  }

  export type ScheduleResolver<
    R = Schedule[],
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, ScheduleArgs>;
  export interface ScheduleArgs {
    date: string;
  }

  export type PlayersResolver<
    R = Player[],
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, PlayersArgs>;
  export interface PlayersArgs {
    date: string;
  }

  export type TeamsResolver<
    R = Team[],
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, TeamsArgs>;
  export interface TeamsArgs {
    date: string;
  }
}

export namespace GameResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Game> {
    gameId?: GameIdResolver<string, TypeParent, TContext>;

    arena?: ArenaResolver<string, TypeParent, TContext>;

    isGameActivated?: IsGameActivatedResolver<boolean, TypeParent, TContext>;

    statusNum?: StatusNumResolver<number, TypeParent, TContext>;

    startTimeEastern?: StartTimeEasternResolver<string, TypeParent, TContext>;

    startTimeUTC?: StartTimeUtcResolver<string, TypeParent, TContext>;

    startDateEastern?: StartDateEasternResolver<string, TypeParent, TContext>;

    clock?: ClockResolver<string, TypeParent, TContext>;

    nugget?: NuggetResolver<string, TypeParent, TContext>;

    period?: PeriodResolver<Period, TypeParent, TContext>;

    vTeam?: VTeamResolver<ScheduleTeam, TypeParent, TContext>;

    hTeam?: HTeamResolver<ScheduleTeam, TypeParent, TContext>;

    stats?: StatsResolver<Maybe<GameStats>, TypeParent, TContext>;

    playoffs?: PlayoffsResolver<Maybe<Playoffs>, TypeParent, TContext>;
  }

  export type GameIdResolver<
    R = string,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ArenaResolver<
    R = string,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type IsGameActivatedResolver<
    R = boolean,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type StatusNumResolver<
    R = number,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type StartTimeEasternResolver<
    R = string,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type StartTimeUtcResolver<
    R = string,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type StartDateEasternResolver<
    R = string,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ClockResolver<
    R = string,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type NuggetResolver<
    R = string,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PeriodResolver<
    R = Period,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type VTeamResolver<
    R = ScheduleTeam,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type HTeamResolver<
    R = ScheduleTeam,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type StatsResolver<
    R = Maybe<GameStats>,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PlayoffsResolver<
    R = Maybe<Playoffs>,
    Parent = Game,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace PeriodResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Period> {
    current?: CurrentResolver<number, TypeParent, TContext>;

    isEndOfPeriod?: IsEndOfPeriodResolver<boolean, TypeParent, TContext>;

    isHalftime?: IsHalftimeResolver<boolean, TypeParent, TContext>;

    maxRegular?: MaxRegularResolver<number, TypeParent, TContext>;

    type?: TypeResolver<number, TypeParent, TContext>;
  }

  export type CurrentResolver<
    R = number,
    Parent = Period,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type IsEndOfPeriodResolver<
    R = boolean,
    Parent = Period,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type IsHalftimeResolver<
    R = boolean,
    Parent = Period,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type MaxRegularResolver<
    R = number,
    Parent = Period,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TypeResolver<
    R = number,
    Parent = Period,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ScheduleTeamResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = ScheduleTeam> {
    teamId?: TeamIdResolver<string, TypeParent, TContext>;

    triCode?: TriCodeResolver<string, TypeParent, TContext>;

    linescore?: LinescoreResolver<(Maybe<number>)[], TypeParent, TContext>;

    loss?: LossResolver<number, TypeParent, TContext>;

    score?: ScoreResolver<number, TypeParent, TContext>;

    win?: WinResolver<number, TypeParent, TContext>;

    city?: CityResolver<Maybe<string>, TypeParent, TContext>;

    fullName?: FullNameResolver<Maybe<string>, TypeParent, TContext>;

    confName?: ConfNameResolver<Maybe<string>, TypeParent, TContext>;

    divName?: DivNameResolver<Maybe<string>, TypeParent, TContext>;

    logo?: LogoResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type TeamIdResolver<
    R = string,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TriCodeResolver<
    R = string,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type LinescoreResolver<
    R = (Maybe<number>)[],
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type LossResolver<
    R = number,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ScoreResolver<
    R = number,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type WinResolver<
    R = number,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CityResolver<
    R = Maybe<string>,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FullNameResolver<
    R = Maybe<string>,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ConfNameResolver<
    R = Maybe<string>,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type DivNameResolver<
    R = Maybe<string>,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type LogoResolver<
    R = Maybe<string>,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace GameStatsResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = GameStats> {
    timesTied?: TimesTiedResolver<number, TypeParent, TContext>;

    leadChanges?: LeadChangesResolver<number, TypeParent, TContext>;

    vTeam?: VTeamResolver<GameTeamStats, TypeParent, TContext>;

    hTeam?: HTeamResolver<GameTeamStats, TypeParent, TContext>;

    activePlayers?: ActivePlayersResolver<
      GamePlayerStats[],
      TypeParent,
      TContext
    >;
  }

  export type TimesTiedResolver<
    R = number,
    Parent = GameStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type LeadChangesResolver<
    R = number,
    Parent = GameStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type VTeamResolver<
    R = GameTeamStats,
    Parent = GameStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type HTeamResolver<
    R = GameTeamStats,
    Parent = GameStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ActivePlayersResolver<
    R = GamePlayerStats[],
    Parent = GameStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace GameTeamStatsResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = GameTeamStats> {
    fastBreakPoints?: FastBreakPointsResolver<number, TypeParent, TContext>;

    pointsInPaint?: PointsInPaintResolver<number, TypeParent, TContext>;

    biggestLead?: BiggestLeadResolver<number, TypeParent, TContext>;

    secondChancePoints?: SecondChancePointsResolver<
      number,
      TypeParent,
      TContext
    >;

    pointsOffTurnovers?: PointsOffTurnoversResolver<
      number,
      TypeParent,
      TContext
    >;

    longestRun?: LongestRunResolver<number, TypeParent, TContext>;

    totals?: TotalsResolver<GameTotals, TypeParent, TContext>;
  }

  export type FastBreakPointsResolver<
    R = number,
    Parent = GameTeamStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PointsInPaintResolver<
    R = number,
    Parent = GameTeamStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type BiggestLeadResolver<
    R = number,
    Parent = GameTeamStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type SecondChancePointsResolver<
    R = number,
    Parent = GameTeamStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PointsOffTurnoversResolver<
    R = number,
    Parent = GameTeamStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type LongestRunResolver<
    R = number,
    Parent = GameTeamStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TotalsResolver<
    R = GameTotals,
    Parent = GameTeamStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace GameTotalsResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = GameTotals> {
    points?: PointsResolver<number, TypeParent, TContext>;

    fgm?: FgmResolver<number, TypeParent, TContext>;

    fga?: FgaResolver<number, TypeParent, TContext>;

    fgp?: FgpResolver<number, TypeParent, TContext>;

    ftm?: FtmResolver<number, TypeParent, TContext>;

    fta?: FtaResolver<number, TypeParent, TContext>;

    ftp?: FtpResolver<number, TypeParent, TContext>;

    tpm?: TpmResolver<number, TypeParent, TContext>;

    tpa?: TpaResolver<number, TypeParent, TContext>;

    tpp?: TppResolver<number, TypeParent, TContext>;

    offReb?: OffRebResolver<number, TypeParent, TContext>;

    defReb?: DefRebResolver<number, TypeParent, TContext>;

    totReb?: TotRebResolver<number, TypeParent, TContext>;

    assists?: AssistsResolver<number, TypeParent, TContext>;

    pFouls?: PFoulsResolver<number, TypeParent, TContext>;

    steals?: StealsResolver<number, TypeParent, TContext>;

    turnovers?: TurnoversResolver<number, TypeParent, TContext>;

    blocks?: BlocksResolver<number, TypeParent, TContext>;

    plusMinus?: PlusMinusResolver<number, TypeParent, TContext>;

    min?: MinResolver<string, TypeParent, TContext>;
  }

  export type PointsResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FgmResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FgaResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FgpResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FtmResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FtaResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FtpResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TpmResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TpaResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TppResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type OffRebResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type DefRebResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TotRebResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type AssistsResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PFoulsResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type StealsResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TurnoversResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type BlocksResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PlusMinusResolver<
    R = number,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type MinResolver<
    R = string,
    Parent = GameTotals,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace GamePlayerStatsResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = GamePlayerStats
  > {
    personId?: PersonIdResolver<string, TypeParent, TContext>;

    firstName?: FirstNameResolver<string, TypeParent, TContext>;

    lastName?: LastNameResolver<string, TypeParent, TContext>;

    teamId?: TeamIdResolver<string, TypeParent, TContext>;

    jersey?: JerseyResolver<string, TypeParent, TContext>;

    isOnCourt?: IsOnCourtResolver<boolean, TypeParent, TContext>;

    points?: PointsResolver<string, TypeParent, TContext>;

    pos?: PosResolver<string, TypeParent, TContext>;

    min?: MinResolver<string, TypeParent, TContext>;

    fgm?: FgmResolver<string, TypeParent, TContext>;

    fga?: FgaResolver<string, TypeParent, TContext>;

    fgp?: FgpResolver<string, TypeParent, TContext>;

    ftm?: FtmResolver<string, TypeParent, TContext>;

    fta?: FtaResolver<string, TypeParent, TContext>;

    ftp?: FtpResolver<string, TypeParent, TContext>;

    tpm?: TpmResolver<string, TypeParent, TContext>;

    tpa?: TpaResolver<string, TypeParent, TContext>;

    tpp?: TppResolver<string, TypeParent, TContext>;

    offReb?: OffRebResolver<string, TypeParent, TContext>;

    defReb?: DefRebResolver<string, TypeParent, TContext>;

    totReb?: TotRebResolver<string, TypeParent, TContext>;

    assists?: AssistsResolver<string, TypeParent, TContext>;

    pFouls?: PFoulsResolver<string, TypeParent, TContext>;

    steals?: StealsResolver<string, TypeParent, TContext>;

    turnovers?: TurnoversResolver<string, TypeParent, TContext>;

    blocks?: BlocksResolver<string, TypeParent, TContext>;

    plusMinus?: PlusMinusResolver<string, TypeParent, TContext>;

    dnp?: DnpResolver<string, TypeParent, TContext>;
  }

  export type PersonIdResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FirstNameResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type LastNameResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TeamIdResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type JerseyResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type IsOnCourtResolver<
    R = boolean,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PointsResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PosResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type MinResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FgmResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FgaResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FgpResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FtmResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FtaResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FtpResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TpmResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TpaResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TppResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type OffRebResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type DefRebResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TotRebResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type AssistsResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PFoulsResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type StealsResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TurnoversResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type BlocksResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PlusMinusResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type DnpResolver<
    R = string,
    Parent = GamePlayerStats,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace PlayoffsResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Playoffs> {
    summary?: SummaryResolver<string, TypeParent, TContext>;
  }

  export type SummaryResolver<
    R = string,
    Parent = Playoffs,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ScheduleResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Schedule> {
    gameId?: GameIdResolver<string, TypeParent, TContext>;

    clock?: ClockResolver<string, TypeParent, TContext>;

    hTeam?: HTeamResolver<ScheduleTeam, TypeParent, TContext>;

    isGameActivated?: IsGameActivatedResolver<boolean, TypeParent, TContext>;

    nugget?: NuggetResolver<string, TypeParent, TContext>;

    period?: PeriodResolver<Period, TypeParent, TContext>;

    seasonYear?: SeasonYearResolver<string, TypeParent, TContext>;

    startTimeUTC?: StartTimeUtcResolver<string, TypeParent, TContext>;

    startDateEastern?: StartDateEasternResolver<string, TypeParent, TContext>;

    statusNum?: StatusNumResolver<number, TypeParent, TContext>;

    vTeam?: VTeamResolver<ScheduleTeam, TypeParent, TContext>;
  }

  export type GameIdResolver<
    R = string,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ClockResolver<
    R = string,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type HTeamResolver<
    R = ScheduleTeam,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type IsGameActivatedResolver<
    R = boolean,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type NuggetResolver<
    R = string,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PeriodResolver<
    R = Period,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type SeasonYearResolver<
    R = string,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type StartTimeUtcResolver<
    R = string,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type StartDateEasternResolver<
    R = string,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type StatusNumResolver<
    R = number,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type VTeamResolver<
    R = ScheduleTeam,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace PlayerResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Player> {
    firstName?: FirstNameResolver<string, TypeParent, TContext>;

    lastName?: LastNameResolver<string, TypeParent, TContext>;

    personId?: PersonIdResolver<string, TypeParent, TContext>;

    jersey?: JerseyResolver<number, TypeParent, TContext>;

    pos?: PosResolver<string, TypeParent, TContext>;

    heightFeet?: HeightFeetResolver<number, TypeParent, TContext>;

    heightInches?: HeightInchesResolver<number, TypeParent, TContext>;

    heightMeters?: HeightMetersResolver<number, TypeParent, TContext>;

    weightPounds?: WeightPoundsResolver<number, TypeParent, TContext>;

    weightKilograms?: WeightKilogramsResolver<number, TypeParent, TContext>;

    dateOfBirthUTC?: DateOfBirthUtcResolver<string, TypeParent, TContext>;

    teams?: TeamsResolver<Team[], TypeParent, TContext>;
  }

  export type FirstNameResolver<
    R = string,
    Parent = Player,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type LastNameResolver<
    R = string,
    Parent = Player,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PersonIdResolver<
    R = string,
    Parent = Player,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type JerseyResolver<
    R = number,
    Parent = Player,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PosResolver<
    R = string,
    Parent = Player,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type HeightFeetResolver<
    R = number,
    Parent = Player,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type HeightInchesResolver<
    R = number,
    Parent = Player,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type HeightMetersResolver<
    R = number,
    Parent = Player,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type WeightPoundsResolver<
    R = number,
    Parent = Player,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type WeightKilogramsResolver<
    R = number,
    Parent = Player,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type DateOfBirthUtcResolver<
    R = string,
    Parent = Player,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TeamsResolver<
    R = Team[],
    Parent = Player,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace TeamResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Team> {
    city?: CityResolver<string, TypeParent, TContext>;

    fullName?: FullNameResolver<string, TypeParent, TContext>;

    triCode?: TriCodeResolver<string, TypeParent, TContext>;

    teamId?: TeamIdResolver<string, TypeParent, TContext>;

    confName?: ConfNameResolver<string, TypeParent, TContext>;

    divName?: DivNameResolver<string, TypeParent, TContext>;

    logo?: LogoResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type CityResolver<
    R = string,
    Parent = Team,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FullNameResolver<
    R = string,
    Parent = Team,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TriCodeResolver<
    R = string,
    Parent = Team,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TeamIdResolver<
    R = string,
    Parent = Team,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ConfNameResolver<
    R = string,
    Parent = Team,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type DivNameResolver<
    R = string,
    Parent = Team,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type LogoResolver<
    R = Maybe<string>,
    Parent = Team,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace GameStatLeadersResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = GameStatLeaders
  > {
    points?: PointsResolver<Maybe<GameStatLeaderValues>, TypeParent, TContext>;

    rebounds?: ReboundsResolver<
      Maybe<GameStatLeaderValues>,
      TypeParent,
      TContext
    >;

    assists?: AssistsResolver<
      Maybe<GameStatLeaderValues>,
      TypeParent,
      TContext
    >;
  }

  export type PointsResolver<
    R = Maybe<GameStatLeaderValues>,
    Parent = GameStatLeaders,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ReboundsResolver<
    R = Maybe<GameStatLeaderValues>,
    Parent = GameStatLeaders,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type AssistsResolver<
    R = Maybe<GameStatLeaderValues>,
    Parent = GameStatLeaders,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace GameStatLeaderValuesResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = GameStatLeaderValues
  > {
    value?: ValueResolver<number, TypeParent, TContext>;

    players?: PlayersResolver<PlayerPersonId[], TypeParent, TContext>;
  }

  export type ValueResolver<
    R = number,
    Parent = GameStatLeaderValues,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PlayersResolver<
    R = PlayerPersonId[],
    Parent = GameStatLeaderValues,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace PlayerPersonIdResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = PlayerPersonId> {
    personId?: PersonIdResolver<string, TypeParent, TContext>;
  }

  export type PersonIdResolver<
    R = string,
    Parent = PlayerPersonId,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  IContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  IContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  IContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface IResolvers<TContext = IContext> {
  Query?: QueryResolvers.Resolvers<TContext>;
  Game?: GameResolvers.Resolvers<TContext>;
  Period?: PeriodResolvers.Resolvers<TContext>;
  ScheduleTeam?: ScheduleTeamResolvers.Resolvers<TContext>;
  GameStats?: GameStatsResolvers.Resolvers<TContext>;
  GameTeamStats?: GameTeamStatsResolvers.Resolvers<TContext>;
  GameTotals?: GameTotalsResolvers.Resolvers<TContext>;
  GamePlayerStats?: GamePlayerStatsResolvers.Resolvers<TContext>;
  Playoffs?: PlayoffsResolvers.Resolvers<TContext>;
  Schedule?: ScheduleResolvers.Resolvers<TContext>;
  Player?: PlayerResolvers.Resolvers<TContext>;
  Team?: TeamResolvers.Resolvers<TContext>;
  GameStatLeaders?: GameStatLeadersResolvers.Resolvers<TContext>;
  GameStatLeaderValues?: GameStatLeaderValuesResolvers.Resolvers<TContext>;
  PlayerPersonId?: PlayerPersonIdResolvers.Resolvers<TContext>;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
