import React, { Component } from 'react';
import { inject } from 'mobx-react';

import { ArticleService } from '../api/article.service';
import TagList from '../components/TagList';
import formatDate from '../utils/formatDate';

@inject(stores => ({ currentUser: stores.userStore.currentUser }))
class Article extends Component {
  static getInitialProps = async context => {
    const { slug } = context.query;
    const res = await ArticleService.get(slug);

    return { ...res.data.article };
  };

  render() {
    const {
      title,
      body,
      favoritesCount,
      createdAt,
      tagList,
      author: { username, image },
      currentUser,
    } = this.props;

    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{title}</h1>

            <div className="article-meta">
              <a href="/profile.html">
                <img src={image} alt="" />
              </a>
              <div className="info">
                <a href="/" className="author">
                  {username}
                </a>
                <span className="date">{formatDate(createdAt)}</span>
              </div>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round" />
                &nbsp; Follow {username}
              </button>
              &nbsp;&nbsp;
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart" />
                &nbsp; Favorite Post <span className="counter">{favoritesCount}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">
              <p>{body}</p>
            </div>
          </div>

          <TagList tags={tagList} outline />

          <hr />

          <div className="article-actions">
            <div className="article-meta">
              <a href="profile.html">
                <img src={image} alt="" />
              </a>
              <div className="info">
                <a href="/" className="author">
                  {username}
                </a>
                <span className="date">{formatDate(createdAt)}</span>
              </div>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round" />
                &nbsp; Follow {username}
              </button>
              &nbsp;
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart" />
                &nbsp; Favorite Post <span className="counter">{favoritesCount}</span>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              {currentUser ? (
                <form className="card comment-form">
                  <div className="card-block">
                    <textarea
                      className="form-control"
                      placeholder="Write a comment..."
                      rows="3"
                    />
                  </div>
                  <div className="card-footer">
                    <img
                      src={currentUser.image}
                      className="comment-author-img"
                      alt=""
                    />
                    <button className="btn btn-sm btn-primary">
                      Post Comment
                    </button>
                  </div>
                </form>
              ) : (
                <p>
                  <a href="#/login">Sign in</a>&nbsp;or&nbsp;
                  <a href="#/register">sign up</a>
                  &nbsp;to add comments on this article.
                </p>
              )}

              {/* <div className="card">
                <div className="card-block">
                  <p className="card-text">
                    With supporting text below as a natural lead-in to additional
                    content.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="" className="comment-author">
                    <img
                      src="http://i.imgur.com/Qr71crq.jpg"
                      className="comment-author-img"
                    />
                  </a>
                  &nbsp;
                  <a href="" className="comment-author">
                    Jacob Schmidt
                  </a>
                  <span className="date-posted">Dec 29th</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
