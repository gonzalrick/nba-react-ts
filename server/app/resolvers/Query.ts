import { GraphQLArgs } from "graphql";
import { GraphQLRequest } from "apollo-server-plugin-base";

export default {
  Query: {
    schedule: async (root: any, { date }: any, { dataSources }: any) => {
      const results = await dataSources.nbaAPI.getSchedule(date);
      return {
        results: [results]
      };
    }
  }
}