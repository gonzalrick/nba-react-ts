export type Maybe<T> = T | null;

// ====================================================
// Types
// ====================================================

export interface Query {
  schedule: Schedule[];

  teams: Team[];
}

export interface Schedule {
  gameId: string;

  clock?: Maybe<string>;

  hTeam?: Maybe<ScheduleTeam>;

  isGameActivated?: Maybe<boolean>;

  nugget?: Maybe<string>;

  period?: Maybe<Period>;

  seasonYear?: Maybe<string>;

  startTimeUTC?: Maybe<string>;

  startDateEastern?: Maybe<string>;

  statusNum?: Maybe<number>;

  vTeam?: Maybe<ScheduleTeam>;
}

export interface ScheduleTeam {
  teamId?: Maybe<string>;

  triCode?: Maybe<string>;

  linescore: (Maybe<number>)[];

  loss?: Maybe<number>;

  score?: Maybe<number>;

  win?: Maybe<number>;
}

export interface Period {
  current?: Maybe<number>;

  isEndOfPeriod?: Maybe<boolean>;

  isHalftime?: Maybe<boolean>;

  maxRegular?: Maybe<number>;

  type?: Maybe<number>;
}

export interface Team {
  city: string;

  fullName: string;

  triCode: string;

  teamId: string;

  confName: string;

  divName: string;
}

// ====================================================
// Arguments
// ====================================================

export interface ScheduleQueryArgs {
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

    clock?: ClockResolver<Maybe<string>, TypeParent, TContext>;

    hTeam?: HTeamResolver<Maybe<ScheduleTeam>, TypeParent, TContext>;

    isGameActivated?: IsGameActivatedResolver<
      Maybe<boolean>,
      TypeParent,
      TContext
    >;

    nugget?: NuggetResolver<Maybe<string>, TypeParent, TContext>;

    period?: PeriodResolver<Maybe<Period>, TypeParent, TContext>;

    seasonYear?: SeasonYearResolver<Maybe<string>, TypeParent, TContext>;

    startTimeUTC?: StartTimeUtcResolver<Maybe<string>, TypeParent, TContext>;

    startDateEastern?: StartDateEasternResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    statusNum?: StatusNumResolver<Maybe<number>, TypeParent, TContext>;

    vTeam?: VTeamResolver<Maybe<ScheduleTeam>, TypeParent, TContext>;
  }

  export type GameIdResolver<
    R = string,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ClockResolver<
    R = Maybe<string>,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type HTeamResolver<
    R = Maybe<ScheduleTeam>,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type IsGameActivatedResolver<
    R = Maybe<boolean>,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type NuggetResolver<
    R = Maybe<string>,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PeriodResolver<
    R = Maybe<Period>,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type SeasonYearResolver<
    R = Maybe<string>,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type StartTimeUtcResolver<
    R = Maybe<string>,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type StartDateEasternResolver<
    R = Maybe<string>,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type StatusNumResolver<
    R = Maybe<number>,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type VTeamResolver<
    R = Maybe<ScheduleTeam>,
    Parent = Schedule,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ScheduleTeamResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = ScheduleTeam> {
    teamId?: TeamIdResolver<Maybe<string>, TypeParent, TContext>;

    triCode?: TriCodeResolver<Maybe<string>, TypeParent, TContext>;

    linescore?: LinescoreResolver<(Maybe<number>)[], TypeParent, TContext>;

    loss?: LossResolver<Maybe<number>, TypeParent, TContext>;

    score?: ScoreResolver<Maybe<number>, TypeParent, TContext>;

    win?: WinResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type TeamIdResolver<
    R = Maybe<string>,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TriCodeResolver<
    R = Maybe<string>,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type LinescoreResolver<
    R = (Maybe<number>)[],
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type LossResolver<
    R = Maybe<number>,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ScoreResolver<
    R = Maybe<number>,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type WinResolver<
    R = Maybe<number>,
    Parent = ScheduleTeam,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace PeriodResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Period> {
    current?: CurrentResolver<Maybe<number>, TypeParent, TContext>;

    isEndOfPeriod?: IsEndOfPeriodResolver<Maybe<boolean>, TypeParent, TContext>;

    isHalftime?: IsHalftimeResolver<Maybe<boolean>, TypeParent, TContext>;

    maxRegular?: MaxRegularResolver<Maybe<number>, TypeParent, TContext>;

    type?: TypeResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type CurrentResolver<
    R = Maybe<number>,
    Parent = Period,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type IsEndOfPeriodResolver<
    R = Maybe<boolean>,
    Parent = Period,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type IsHalftimeResolver<
    R = Maybe<boolean>,
    Parent = Period,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type MaxRegularResolver<
    R = Maybe<number>,
    Parent = Period,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TypeResolver<
    R = Maybe<number>,
    Parent = Period,
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
  Team?: TeamResolvers.Resolvers<TContext>;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
