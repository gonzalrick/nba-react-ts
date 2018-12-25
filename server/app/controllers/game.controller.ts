import fetch from 'node-fetch';
import {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';

interface GameArgs {
  date: string,
  gameId: string,
}

export const GameController: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const args: GameArgs = req.params;
  const url = `http://data.nba.net/10s/prod/v1/${args.date}/${args.gameId}_boxscore.json`;
  fetch(url)
    .then(res => res.json())
    .then(json => res.json(json))
    .catch(err => next(err));
};