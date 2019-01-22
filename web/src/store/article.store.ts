import { observable, computed, action, autorun } from 'mobx';

import { getArticle } from '../services';
import { GeneralStore } from './general.store';

export class ArticleStore {
  @observable date: string = '';
  @observable gameId: any = 0;
  @observable article: any = {};

  constructor(generalStore: GeneralStore) {
    autorun(async () => {
      if (this.gameId > 0) {
        generalStore.setLoading(true);
        console.log(this.date,this.gameId);
        this.article = await getArticle(this.date,this.gameId);
        generalStore.setLoading(false);
      }
    });
  }

  @action.bound
  setGameArgs(date: string, gameId: number) {
    this.date = date;
    this.gameId = gameId;
  }
}