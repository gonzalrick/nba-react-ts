import { DataSource } from "apollo-datasource";
import { NbaAPI } from "./dataSource/nba";

export interface IContext {
  dataSources: IDataSource,
}

interface IDataSource extends DataSource {
  nbaAPI: NbaAPI,
}