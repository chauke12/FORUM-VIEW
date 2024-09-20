// src/pages/index.js

import React from 'react';
import PostList from '../components/PostList';

// Mock data for demonstration
const mockPosts = [
  { id: 1, title: 'First Post', body: 'This is the body of the first post.' },
  { id: 2, title: 'Second Post', body: 'This is the body of the second post.' },
];

const HomePage = ({ posts }) => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Forum Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

// Use Next.js's getStaticProps to fetch the posts
export async function getStaticProps() {
  // Simulate fetching data from an API
  const posts = mockPosts;

  return {
    props: {
      posts,
    },
  };
}

export default HomePage;
