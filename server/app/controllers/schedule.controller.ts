import fetch from 'node-fetch';
import { NextFunction, Request, RequestHandler, Response } from 'express';

interface ScheduleArgs {
  date: string;
}

export const ScheduleController: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const args: ScheduleArgs = req.params;
  const url = `http://data.nba.net/10s/prod/v2/${args.date}/scoreboard.json`;
  fetch(url)
    .then(res => res.json())
    .then(json => res.json(json))
    .catch(err => next(err));
};
