import express, { Request, Response } from 'express';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';

import config from './config/config';
import middleware from './middleware/middleware';
import router from './routes/routes';
import { createLoaders } from './dataLoaders';
import { NbaAPI } from './dataSource';
import { schema } from './schema/index';

const app: express.Application = express();
middleware(app);

const server = new ApolloServer({
  schema,
  dataSources: () => ({
    nbaAPI: new NbaAPI(),
  }),
  context: {
    loaders: createLoaders(),
  },
});

server.applyMiddleware({ app });
app.use('/api', router);
app.use(express.static(path.join(__dirname, '..', '..', 'web', 'build')));
app.use('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', '..', 'web', 'build', 'index.html'));
});

app.listen({ port: config.port }, () => {
  console.log(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`)
});