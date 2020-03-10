import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'ramda';

import ArticlePreview from './ArticlePreview';

const selector = stores => ({ articles: stores.articleStore.articles });

class Articles extends Component {
  render() {
    const { articles } = this.props;

    return (
      articles.length > 0 && (
        <div>
          {articles.map(article => (
            <ArticlePreview {...article} key={article.slug} />
          ))}
        </div>
      )
    );
  }
}

export default compose(inject(selector), observer)(Articles);
