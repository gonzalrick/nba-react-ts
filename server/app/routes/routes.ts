import express, { Router } from 'express';

import { GameController } from '../controllers';
import { PlayersController } from '../controllers';
import { StandingsController } from '../controllers';
import { TeamsController } from '../controllers';
import { ArticleController } from '../controllers';

const router: Router = express.Router();
router.route('/game/:date/:gameId').get(GameController);
router.route('/players/:year').get(PlayersController);
router.route('/standings').get(StandingsController);
router.route('/teams/:year').get(TeamsController);
router.route('/article/:date/:gameId').get(ArticleController);

export default router;
