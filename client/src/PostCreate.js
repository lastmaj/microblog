import React, { useState, useEffect } from 'react';
import PostList from './PostList';
import axios from 'axios';

export default () => {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState('');

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:4000/posts', { title });
    const id = res.data.id;
    setPosts({ ...posts, [id]: { ...res.data } });
    setTitle('');
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      <hr />
      <h1> Posts </h1>
      <PostList posts={posts} />
    </div>
  );
};
