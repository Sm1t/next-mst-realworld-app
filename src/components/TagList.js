import React from 'react';
import cn from 'classnames';

const TagList = ({ tags = [], outline }) => {
  const classes = cn('tag-default tag-pill', {
    'tag-outline': outline,
  });

  return (
    <ul className="tag-list">
      {tags.map((tag, index) => (
        <li
          key={index}
          className={classes}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
