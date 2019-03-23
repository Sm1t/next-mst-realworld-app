import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ArticlePreview from './ArticlePreview';

@inject(stores => ({ articles: stores.articleStore.articles }))
@observer
class Articles extends Component {
  render() {
    const { articles } = this.props;

    return (
      articles.length > 0 && (
        <ul>
          {articles.map(article => (
            <ArticlePreview {...article} key={article.slug} />
          ))}
        </ul>
      )
    );
  }
}

export default Articles;
