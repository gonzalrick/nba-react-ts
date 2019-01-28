import React from 'react';
import { inject } from 'mobx-react';

import './article.component.scss';
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
    return (
      <div id="article-paragraphs"> 
      {
        this.store.title ? <h2>{this.store.title}</h2> : <h2></h2>
      }
        <p>Written by: <b>{this.store.author ? this.store.author : "Anonymous"}</b></p>       
      {

        this.store.paragraphs ? 
        this.store.paragraphs.map((p: any,key: number) =><p key={key.toString()}>{p.paragraph}</p>) : <p>No article available yet.</p>
      }
      </div>
    );
  }
}