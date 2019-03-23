import React from 'react';

const ArticlePreview = ({
  author, createdAt, favoritesCount, title, description,
}) => (
  <div className="article-preview">
    <div className="article-meta">
      <a href="profile.html">
        <img src={author.image} alt="" />
      </a>
      <div className="info">
        <a href="/" className="author">
          {author.username}
        </a>
        <span className="date">{createdAt}</span>
      </div>
      <button className="btn btn-outline-primary btn-sm pull-xs-right">
        <i className="ion-heart" /> {favoritesCount}
      </button>
    </div>
    <a href="/" className="preview-link">
      <h1>{title}</h1>
      <p>{description}</p>
      <span>Read more...</span>
    </a>
  </div>
);

export default ArticlePreview;
