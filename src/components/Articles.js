import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject(stores => ({ articleStore: stores.articleStore }))
@observer
class Articles extends Component {
  render() {
    const {
      articleStore: { articles }, // eslint-disable-line react/prop-types
    } = this.props;

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
