import fetch from 'node-fetch';
import { NextFunction, Request, RequestHandler, Response } from 'express';

interface TeamsArgs {
  year: string;
}

export const TeamsController: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const args: TeamsArgs = req.params;
  const url = `http://data.nba.net/10s/prod/v1/${args.year}/teams.json`;
  fetch(url)
    .then(res => res.json())
    .then(json => res.json(json))
    .catch(err => next(err));
};
