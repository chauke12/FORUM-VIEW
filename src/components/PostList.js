// src/components/PostList.js

import React from 'react';
import PostItem from './PostItem'; // Import the PostItem component

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} /> // Render each post using PostItem
      ))}
    </div>
  );
};

export default PostList;
