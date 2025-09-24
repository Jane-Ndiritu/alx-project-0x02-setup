// pages/posts.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';

const PostsPage: React.FC = () => {
  // Sample posts data
  const posts = [
    {
      id: '1',
      title: 'Travel Tips for 2024',
      content: 'Discover the best travel destinations and tips for the upcoming year. From hidden gems to popular spots, make your travels unforgettable.',
    },
    {
      id: '2',
      title: 'Hosting Best Practices',
      content: 'Learn how to become a great host and provide exceptional experiences for your guests. Tips for communication, cleanliness, and more.',
    },
    {
      id: '3',
      title: 'Local Experiences Guide',
      content: 'Explore unique local experiences that travelers love. From cooking classes to guided tours, find what makes each destination special.',
    },
    {
      id: '4',
      title: 'Sustainable Travel',
      content: 'How to travel responsibly and minimize your environmental impact while still enjoying amazing experiences around the world.',
    },
    {
      id: '5',
      title: 'Budget Travel Hacks',
      content: 'Smart ways to save money while traveling without compromising on the quality of your experiences and accommodations.',
    },
    {
      id: '6',
      title: 'Family-Friendly Stays',
      content: 'The best types of accommodations and destinations for family travel. Tips for keeping everyone happy and comfortable.',
    },
  ];

  return (
    <>
      <Head>
        <title>Posts - Airbnb Travel Blog</title>
        <meta name="description" content="Read the latest travel tips, hosting advice, and destination guides from Airbnb." />
      </Head>
      
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Travel Blog & Tips</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing travel stories, hosting tips, and destination guides from our community.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              content={post.content}
              variant="elevated"
              size="medium"
              className="hover:shadow-xl transition-shadow cursor-pointer h-full"
            />
          ))}
        </div>

        {/* Empty State (if no posts) */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts available</h3>
            <p className="text-gray-500">Check back later for new travel content.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PostsPage;