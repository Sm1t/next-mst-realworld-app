import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject(stores => ({ articles: stores.articleStore.articles }))
@observer
class Articles extends Component {
  render() {
    const { articles } = this.props;

    return (
      articles.length > 0 && (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>{article.title}</li>
          ))}
        </ul>
      )
    );
  }
}

export default Articles;