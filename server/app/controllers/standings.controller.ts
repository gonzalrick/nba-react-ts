import fetch from 'node-fetch';
import {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';

export const StandingsController: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const url = `http://data.nba.net/10s/prod/v1/current/standings_conference.json`;
  fetch(url)
    .then(res => res.json())
    .then(json => res.json(json))
    .catch(err => next(err));
};