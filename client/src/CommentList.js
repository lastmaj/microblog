import React from 'react';

export default ({ comments }) => {
  const renderedComments = comments
    ? comments.map((c) => <li key={c.id}>{c.content}</li>)
    : null;

  return <ul>{renderedComments}</ul>;
};
