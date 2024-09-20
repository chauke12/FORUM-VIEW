// src/components/PostItem.js

import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div className="border rounded p-4 mb-4">
      <h2 className="text-2xl font-semibold">{post.title}</h2>
      <p className="mt-2">{post.body}</p>
    </div>
  );
};

export default PostItem;
