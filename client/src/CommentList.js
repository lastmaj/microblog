import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line
  }, []);

  const renderedComments = comments.map((c) => <li key={c.id}>{c.content}</li>);

  return <ul>{renderedComments}</ul>;
};