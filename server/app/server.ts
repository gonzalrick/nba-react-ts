import express, { Request, Response } from 'express';
import path from 'path';
import { ApolloServer, ServerInfo } from 'apollo-server';

import config from './config/config';
import middleware from './middleware/middleware';
import router from './routes/routes';
import DataSource from './dataSource'
import { schema } from './schema/index';

const app: express.Application = express();
middleware(app);

app.use(express.static(path.join(__dirname, '..', '..', 'web', 'build')));
app.use('/api', router);
app.use('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', '..', 'web', 'build', 'index.html'));
});
app.listen(config.port, () => {
  console.log(`REST API Listening at port:${config.port}`);
});

const server = new ApolloServer({
  schema,
  dataSources: () => (DataSource),
});

server.listen().then(({ url }: ServerInfo) => {
  console.log(`🚀 GRAPHQL ready at ${url}`);
});