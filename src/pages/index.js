import React, { Component } from 'react';

import ArticleList from '../components/ArticleList';

class Index extends Component {
  static async getInitialProps(ctx, { articleStore }) {
    await articleStore.loadArticles();
  }

  render() {
    return (
      <ArticleList />
    );
  }
}

export default Index;
