import React from 'react';
import { inject } from 'mobx-react';

import './article.component.scss';
import { ArticleStore, GameStore } from '../../store';

interface IProps {
  gameStore?: GameStore,
  articleStore?: ArticleStore,
}

interface IParagraph {
  paragraph: string,
}


@inject('articleStore')
@inject('gameStore')
export class Article extends React.Component<IProps> {
  public gameStore = this.props.gameStore!;
  public store = this.props.articleStore!;

  componentDidMount() {
    this.store.setArticleArgs(this.gameStore.date, this.gameStore.gameId);
  }

  render() {
    return (
      <div id="article-paragraphs">
        {
          !this.store.status && <h2>{this.store.title}</h2>
        }
        {
          !this.store.status &&
          <p>Written by: <b>{this.store.author ? this.store.author : "Anonymous"}</b></p>
        }
        {
          this.store.paragraphs ?
            this.store.paragraphs.map((p: IParagraph, key: number) => <p key={key.toString()}>{p.paragraph}</p>) : <p>No article available yet.</p>
        }
      </div>
    );
  }
}