import React, { Component } from 'react';

import ArticleList from '../components/ArticleList';

class Index extends Component {
  static async getInitialProps(ctx, { articleStore }) {
    await articleStore.loadArticles();
  }

  render() {
    return (
      <div className="home-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <ArticleList />
            </div>
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
