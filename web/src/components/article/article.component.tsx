import React from 'react';
import { inject } from 'mobx-react';

import './article.component.scss';
import { ArticleStore } from '../../store';


@inject('articleStore')
export class Article extends React.Component<any> {
  public store: ArticleStore = this.props.articleStore;

  componentDidMount() {
    this.store.setArticleArgs(this.props.date, this.props.gameId);
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
            this.store.paragraphs.map((p: any, key: number) => <p key={key.toString()}>{p.paragraph}</p>) : <p>No article available yet.</p>
        }
      </div>
    );
  }
}