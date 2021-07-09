import React from 'react';
import { observer } from 'mobx-react';

import { useMst } from '../store';

import ArticlePreview from './ArticlePreview';

const Articles = () => {
  const { articleStore: { articles } } = useMst();

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

export default observer(Articles);
