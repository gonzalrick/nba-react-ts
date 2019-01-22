import fetch from 'node-fetch';
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
  const today: Date = new Date();

  let year = args.date.substring(0,4);
  let month = args.date.substring(4,6);
  let day = args.date.substring(6,8);
  
  const argDate: Date= new Date(year, month-1, day);
  let articleType: string;
  // Change article Type based on dates
  (argDate > today) ? articleType = 'preview': articleType =  'recap';
  const url = `http://data.nba.net/data/10s/prod/v1/${args.date}/${args.gameId}_${articleType}_article.json`;
  fetch(url)
    .then(res => {
      if(res.ok) {
        return res.json();
      } else if(res.status == 404) {
        let badRes = {status: res.status, message: "No news or article available for this game"}
        return badRes;
      }
    })
    .then(json => res.json(json))
    .catch(err => next(err));
};