import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.css';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {
  GeneralStore,
  ScheduleStore,
  GameStore,
  TeamsStore,
  PlayerStore,
  ArticleStore,
} from './store/';
const generalStore = new GeneralStore();
const teamStore = new TeamsStore(generalStore);
const gameStore = new GameStore(generalStore);
const playerStore = new PlayerStore(generalStore);
const articleStore = new ArticleStore(generalStore);
const scheduleStore = new ScheduleStore(generalStore, teamStore);

ReactDOM.render(
  <Provider
    generalStore={generalStore}
    scheduleStore={scheduleStore}
    teamStore={teamStore}
    playerStore={playerStore}
    articleStore={articleStore}
    gameStore={gameStore}
  >
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
