import React, { Component } from 'react';

import ArticleList from '../components/ArticleList';
import TagList from '../components/TagList';
import { TagService } from '../api';

class Index extends Component {
  static async getInitialProps(ctx, { articleStore }) {
    const [tags] = await Promise.all([
      TagService.getAll(),
      articleStore.loadArticles(),
    ]);

    return { tags };
  }

  render() {
    const { tags = [] } = this.props;

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
                <TagList tags={tags} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
