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
        this.article = await getArticle(this.date,this.gameId).then((res) => {
          console.log(this.article);
        })
        generalStore.setLoading(false);
      }
    });
  }

  @computed
  get author(): any {
    return this.article.author;
  }

  @computed
  get authorTitle(): any {
    return this.article.authorTitle;
  }

  @computed
  get publishDate(): any {
    return this.article.pubDateUTC;
  }

  @computed
  get paragraphs(): any {
    return this.article.paragraphs !== undefined
  }

  @action.bound
  setArticleArgs(date: string, gameId: number) {
    this.date = date;
    this.gameId = gameId;
  }
}