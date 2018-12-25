import express, { Request, Response } from 'express';
import path from 'path';

import config from './config/config';
import middleware from './middleware/middleware';
import router from './routes/routes';

const app: express.Application = express();
middleware(app);

app.use(express.static(path.join(__dirname,'..','..','web','build')));
app.use('/api', router);
app.use('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname,'..','..','web','build','index.html'));
});
app.listen(config.port, () => {
  console.log(`Listening at port:${config.port}`);
});