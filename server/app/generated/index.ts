export type Maybe<T> = T | null;

// ====================================================
// Types
// ====================================================

export interface Query {
  schedule: Schedule[];
}

export interface Schedule {
  gameId: string;

  endTimeUTC: string;

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

  linescore: Score[];

  loss: number;

  score: number;

  win: number;
}

export interface Score {
  score: number;
}

export interface Period {
  current: number;

  isEndOfPeriod: boolean;

  isHalftime: boolean;

  maxRegular: number;

  type: number;
}

// ====================================================
// Arguments
// ====================================================

export interface ScheduleQueryArgs {
  date: string;
}

import { GraphQLResolveInfo } from 'graphql';

import { IContext } from '../interface';

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
  > =
  | ((
    ...args: any[]
  ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
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
  export interface Resolvers<Context = IContext, TypeParent = {}> {
    schedule?: ScheduleResolver<Schedule[], TypeParent, Context>;
  }

  export type ScheduleResolver<
    R = Schedule[],
    Parent = {},
    Context = IContext
    > = Resolver<R, Parent, Context, ScheduleArgs>;
  export interface ScheduleArgs {
    date: string;
  }
}

export namespace ScheduleResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Schedule> {
    gameId?: GameIdResolver<string, TypeParent, Context>;

    endTimeUTC?: EndTimeUtcResolver<string, TypeParent, Context>;

    hTeam?: HTeamResolver<ScheduleTeam, TypeParent, Context>;

    isGameActivated?: IsGameActivatedResolver<boolean, TypeParent, Context>;

    nugget?: NuggetResolver<string, TypeParent, Context>;

    period?: PeriodResolver<Period, TypeParent, Context>;

    seasonYear?: SeasonYearResolver<string, TypeParent, Context>;

    startTimeUTC?: StartTimeUtcResolver<string, TypeParent, Context>;

    startDateEastern?: StartDateEasternResolver<string, TypeParent, Context>;

    statusNum?: StatusNumResolver<number, TypeParent, Context>;

    vTeam?: VTeamResolver<ScheduleTeam, TypeParent, Context>;
  }

  export type GameIdResolver<
    R = string,
    Parent = Schedule,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type EndTimeUtcResolver<
    R = string,
    Parent = Schedule,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type HTeamResolver<
    R = ScheduleTeam,
    Parent = Schedule,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type IsGameActivatedResolver<
    R = boolean,
    Parent = Schedule,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type NuggetResolver<
    R = string,
    Parent = Schedule,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type PeriodResolver<
    R = Period,
    Parent = Schedule,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type SeasonYearResolver<
    R = string,
    Parent = Schedule,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type StartTimeUtcResolver<
    R = string,
    Parent = Schedule,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type StartDateEasternResolver<
    R = string,
    Parent = Schedule,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type StatusNumResolver<
    R = number,
    Parent = Schedule,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type VTeamResolver<
    R = ScheduleTeam,
    Parent = Schedule,
    Context = IContext
    > = Resolver<R, Parent, Context>;
}

export namespace ScheduleTeamResolvers {
  export interface Resolvers<Context = IContext, TypeParent = ScheduleTeam> {
    teamId?: TeamIdResolver<string, TypeParent, Context>;

    triCode?: TriCodeResolver<string, TypeParent, Context>;

    linescore?: LinescoreResolver<Score[], TypeParent, Context>;

    loss?: LossResolver<number, TypeParent, Context>;

    score?: ScoreResolver<number, TypeParent, Context>;

    win?: WinResolver<number, TypeParent, Context>;
  }

  export type TeamIdResolver<
    R = string,
    Parent = ScheduleTeam,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type TriCodeResolver<
    R = string,
    Parent = ScheduleTeam,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type LinescoreResolver<
    R = Score[],
    Parent = ScheduleTeam,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type LossResolver<
    R = number,
    Parent = ScheduleTeam,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type ScoreResolver<
    R = number,
    Parent = ScheduleTeam,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type WinResolver<
    R = number,
    Parent = ScheduleTeam,
    Context = IContext
    > = Resolver<R, Parent, Context>;
}

export namespace ScoreResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Score> {
    score?: ScoreResolver<number, TypeParent, Context>;
  }

  export type ScoreResolver<
    R = number,
    Parent = Score,
    Context = IContext
    > = Resolver<R, Parent, Context>;
}

export namespace PeriodResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Period> {
    current?: CurrentResolver<number, TypeParent, Context>;

    isEndOfPeriod?: IsEndOfPeriodResolver<boolean, TypeParent, Context>;

    isHalftime?: IsHalftimeResolver<boolean, TypeParent, Context>;

    maxRegular?: MaxRegularResolver<number, TypeParent, Context>;

    type?: TypeResolver<number, TypeParent, Context>;
  }

  export type CurrentResolver<
    R = number,
    Parent = Period,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type IsEndOfPeriodResolver<
    R = boolean,
    Parent = Period,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type IsHalftimeResolver<
    R = boolean,
    Parent = Period,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type MaxRegularResolver<
    R = number,
    Parent = Period,
    Context = IContext
    > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = number,
    Parent = Period,
    Context = IContext
    > = Resolver<R, Parent, Context>;
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

export interface IResolvers<Context = IContext> {
  Query?: QueryResolvers.Resolvers<Context>;
  Schedule?: ScheduleResolvers.Resolvers<Context>;
  ScheduleTeam?: ScheduleTeamResolvers.Resolvers<Context>;
  Score?: ScoreResolvers.Resolvers<Context>;
  Period?: PeriodResolvers.Resolvers<Context>;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
