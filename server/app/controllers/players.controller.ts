import fetch from 'node-fetch';
import { NextFunction, Request, RequestHandler, Response } from 'express';

interface PlayerArgs {
  year: string;
}

export const PlayersController: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const args: PlayerArgs = req.params;
  const url = `http://data.nba.net/10s/prod/v1/${args.year}/players.json`;
  fetch(url)
    .then(res => res.json())
    .then(json => res.json(json))
    .catch(err => next(err));
};
