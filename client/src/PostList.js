import React from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default (props) => {
  const renderedPosts = Object.values(props.posts).map((p) => {
    return (
      <div
        key={p.id}
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
      >
        <div className="card-body">
          <h3>{p.title}</h3>
          <CommentCreate postId={p.id} />
          <CommentList postId={p.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
