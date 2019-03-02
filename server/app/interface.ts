
import { DataSource } from "apollo-datasource";
import { GraphQLResolveInfo } from 'graphql';
import { NextResolverFn } from 'graphql-tools';

import { NbaAPI } from "./dataSource/nba";
import { createLoaders } from "./dataLoaders";

export interface IContext {
  dataSources: IDataSource,
  loaders: ReturnType<typeof createLoaders>,
}

interface IDataSource extends DataSource {
  nbaAPI: NbaAPI,
}

export type DirectiveResolver<Args = {}> = (
  next: NextResolverFn,
  source: null,
  args: Args,
  context: IContext,
  info: GraphQLResolveInfo,
) => void;

export type MutationResolver<Args> = QueryResolver<Args>;

export type QueryResolver<Args> = (
  source: null,
  args: Args,
  context: IContext,
  info: GraphQLResolveInfo,
) => any;

export type TypeResolver<Source, Args = {}> = {
  [field: string]: (
    source: Source,
    args: Args,
    context: IContext,
    info: GraphQLResolveInfo,
  ) => any;
};