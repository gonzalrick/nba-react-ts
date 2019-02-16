export const schedule = async (root: any, { date }: any, { dataSources }: any) => {
  const results = await dataSources.nbaAPI.getSchedule(date);
  return [results, results];
}