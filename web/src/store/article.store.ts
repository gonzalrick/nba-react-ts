import { observable, computed, action, autorun } from 'mobx';

import { getArticle } from '../services';
import { GeneralStore } from './general.store';

interface IArticle {
  author: string,
  authorTitle: string,
  copyright: string,
  paragraphs: IParagraph[],
  pubDateUTC: string,
  title: string,
  status?: number,
  message?: string,
}

interface IParagraph {
  paragraph: string,
}

export class ArticleStore {
  @observable date: string = '';
  @observable gameId: number = 0;
  @observable article: IArticle = {
    author: '',
    authorTitle: '',
    copyright: '',
    paragraphs: [],
    pubDateUTC: '',
    title: '',
  };

  constructor(generalStore: GeneralStore) {
    autorun(async () => {
      if (this.gameId > 0) {
        generalStore.setLoading(true);
        this.article = await getArticle(this.date, this.gameId);
        generalStore.setLoading(false);
      }
    });
  }

  @computed
  get author(): string {
    return this.article.author;
  }

  @computed
  get authorTitle(): string {
    return this.article.authorTitle;
  }

  @computed
  get title(): string {
    return this.article.title;
  }

  @computed
  get status(): number | undefined {
    return this.article.status;
  }


  @computed
  get publishDate(): string {
    return this.article.pubDateUTC;
  }

  @computed
  get paragraphs(): IParagraph[] {
    return this.article.paragraphs;
  }

  @action.bound
  setArticleArgs(date: string, gameId: number) {
    this.date = date;
    this.gameId = gameId;
  }
}