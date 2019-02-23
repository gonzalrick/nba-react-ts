export type Maybe<T> = T | null;

// ====================================================
// Types
// ====================================================

export interface Query {
  schedule: Schedule[];
}

export interface Schedule {
  gameId: string;

  endTimeUTC?: Maybe<string>;

  hTeam?: Maybe<Team>;

  isGameActivated?: Maybe<boolean>;

  nugget?: Maybe<string>;

  period?: Maybe<Period>;

  seasonYear?: Maybe<string>;

  startTimeUTC?: Maybe<string>;

  startDateEastern?: Maybe<string>;

  statusNum?: Maybe<number>;

  vTeam?: Maybe<Team>;
}

export interface Team {
  teamId?: Maybe<string>;

  triCode?: Maybe<string>;

  linescore: (Maybe<Linescore>)[];

  loss?: Maybe<number>;

  score?: Maybe<number>;

  win?: Maybe<number>;
}

export interface Linescore {
  score?: Maybe<string>;
}

export interface Period {
  current?: Maybe<number>;

  isEndOfPeriod?: Maybe<boolean>;

  isHalftime?: Maybe<boolean>;

  maxRegular?: Maybe<number>;

  type?: Maybe<number>;
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

    endTimeUTC?: EndTimeUtcResolver<Maybe<string>, TypeParent, Context>;

    hTeam?: HTeamResolver<Maybe<Team>, TypeParent, Context>;

    isGameActivated?: IsGameActivatedResolver<
      Maybe<boolean>,
      TypeParent,
      Context
    >;

    nugget?: NuggetResolver<Maybe<string>, TypeParent, Context>;

    period?: PeriodResolver<Maybe<Period>, TypeParent, Context>;

    seasonYear?: SeasonYearResolver<Maybe<string>, TypeParent, Context>;

    startTimeUTC?: StartTimeUtcResolver<Maybe<string>, TypeParent, Context>;

    startDateEastern?: StartDateEasternResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    statusNum?: StatusNumResolver<Maybe<number>, TypeParent, Context>;

    vTeam?: VTeamResolver<Maybe<Team>, TypeParent, Context>;
  }

  export type GameIdResolver<
    R = string,
    Parent = Schedule,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type EndTimeUtcResolver<
    R = Maybe<string>,
    Parent = Schedule,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type HTeamResolver<
    R = Maybe<Team>,
    Parent = Schedule,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type IsGameActivatedResolver<
    R = Maybe<boolean>,
    Parent = Schedule,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type NuggetResolver<
    R = Maybe<string>,
    Parent = Schedule,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type PeriodResolver<
    R = Maybe<Period>,
    Parent = Schedule,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type SeasonYearResolver<
    R = Maybe<string>,
    Parent = Schedule,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type StartTimeUtcResolver<
    R = Maybe<string>,
    Parent = Schedule,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type StartDateEasternResolver<
    R = Maybe<string>,
    Parent = Schedule,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type StatusNumResolver<
    R = Maybe<number>,
    Parent = Schedule,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type VTeamResolver<
    R = Maybe<Team>,
    Parent = Schedule,
    Context = IContext
  > = Resolver<R, Parent, Context>;
}

export namespace TeamResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Team> {
    teamId?: TeamIdResolver<Maybe<string>, TypeParent, Context>;

    triCode?: TriCodeResolver<Maybe<string>, TypeParent, Context>;

    linescore?: LinescoreResolver<(Maybe<Linescore>)[], TypeParent, Context>;

    loss?: LossResolver<Maybe<number>, TypeParent, Context>;

    score?: ScoreResolver<Maybe<number>, TypeParent, Context>;

    win?: WinResolver<Maybe<number>, TypeParent, Context>;
  }

  export type TeamIdResolver<
    R = Maybe<string>,
    Parent = Team,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type TriCodeResolver<
    R = Maybe<string>,
    Parent = Team,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type LinescoreResolver<
    R = (Maybe<Linescore>)[],
    Parent = Team,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type LossResolver<
    R = Maybe<number>,
    Parent = Team,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type ScoreResolver<
    R = Maybe<number>,
    Parent = Team,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type WinResolver<
    R = Maybe<number>,
    Parent = Team,
    Context = IContext
  > = Resolver<R, Parent, Context>;
}

export namespace LinescoreResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Linescore> {
    score?: ScoreResolver<Maybe<string>, TypeParent, Context>;
  }

  export type ScoreResolver<
    R = Maybe<string>,
    Parent = Linescore,
    Context = IContext
  > = Resolver<R, Parent, Context>;
}

export namespace PeriodResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Period> {
    current?: CurrentResolver<Maybe<number>, TypeParent, Context>;

    isEndOfPeriod?: IsEndOfPeriodResolver<Maybe<boolean>, TypeParent, Context>;

    isHalftime?: IsHalftimeResolver<Maybe<boolean>, TypeParent, Context>;

    maxRegular?: MaxRegularResolver<Maybe<number>, TypeParent, Context>;

    type?: TypeResolver<Maybe<number>, TypeParent, Context>;
  }

  export type CurrentResolver<
    R = Maybe<number>,
    Parent = Period,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type IsEndOfPeriodResolver<
    R = Maybe<boolean>,
    Parent = Period,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type IsHalftimeResolver<
    R = Maybe<boolean>,
    Parent = Period,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type MaxRegularResolver<
    R = Maybe<number>,
    Parent = Period,
    Context = IContext
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = Maybe<number>,
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
  Team?: TeamResolvers.Resolvers<Context>;
  Linescore?: LinescoreResolvers.Resolvers<Context>;
  Period?: PeriodResolvers.Resolvers<Context>;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
