import React from 'react';
import { inject } from 'mobx-react';

import { ArticleStore, GameStore } from '../../store';


@inject('articleStore')
@inject('gameStore')
export class Article extends React.Component<any> {
  public gameStore: GameStore = this.props.gameStore;
  public store: ArticleStore = this.props.articleStore;

  componentDidMount() {
    this.store.setArticleArgs(this.gameStore.date, this.gameStore.gameId);
  }

  render() {
    const paragraphs = this.store.paragraphs.map((paragraph: any) => { //Use interface for p later
      return (
        <p>{paragraph.paragraph}</p>
      )
    });

    return (
      <div>
        wah
      </div>
    )
  }
}