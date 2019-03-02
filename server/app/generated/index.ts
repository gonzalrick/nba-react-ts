export type Maybe<T> = T | null;

// ====================================================
// Types
// ====================================================

export interface Query {
  schedule: Schedule[];

  players: Player[];

  teams: Team[];
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

export interface Period {
  current: number;

  isEndOfPeriod: boolean;

  isHalftime: boolean;

  maxRegular: number;

  type: number;
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

// ====================================================
// Arguments
// ====================================================

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
    schedule?: ScheduleResolver<Schedule[], TypeParent, TContext>;

    players?: PlayersResolver<Player[], TypeParent, TContext>;

    teams?: TeamsResolver<Team[], TypeParent, TContext>;
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
  Schedule?: ScheduleResolvers.Resolvers<TContext>;
  ScheduleTeam?: ScheduleTeamResolvers.Resolvers<TContext>;
  Period?: PeriodResolvers.Resolvers<TContext>;
  Player?: PlayerResolvers.Resolvers<TContext>;
  Team?: TeamResolvers.Resolvers<TContext>;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
