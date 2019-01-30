import fetch from 'node-fetch';
import { startOfDay, parse, format } from 'date-fns';
import {
  NextFunction,
  Request,
  RequestHandler,
  Response
} from 'express';
import { json } from 'body-parser';

interface ArticleArgs {
  date: any,
  gameId: string,
}

export const ArticleController: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const args: ArticleArgs = req.params;
  const today: Date = startOfDay(format(new Date()));
  const argDate: Date = startOfDay(format(parse(args.date)));

  // Change article Type based on dates
  const articleType = argDate >= today ? 'preview' : 'recap';
  const url = `http://data.nba.net/data/10s/prod/v1/${args.date}/${args.gameId}_${articleType}_article.json`;
  fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else { // Bad or no response
        let badRes = {
          status: res.status,
          message: "No article available for this game"
        }
        return badRes;
      }
    })
    .then(json => {
      res.json(json);
    })
    .catch(err => next(err));
};