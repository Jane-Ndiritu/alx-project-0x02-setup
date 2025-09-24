import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { type PostProps, type ApiPost, type ApiUser } from '../interfaces';

interface PostsPageProps {
  posts: PostProps[];
  error?: string;
}

const PostsPage: React.FC<PostsPageProps> = ({ posts, error }) => {
 
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <>
      <Head>
        <title>Posts - Airbnb Travel Blog</title>
        <meta name="description" content="Read the latest travel tips, hosting advice, and destination guides from our community." />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
         
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Travel Blog & Tips</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing travel stories, hosting tips, and destination guides from our community.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Showing {posts.length} posts {error && '(static fallback)'}
            </div>
          </div>
          {error && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Using Static Fallback Data</h3>
              <p className="text-gray-500 mb-4">{error}</p>
              <button
                onClick={handleRetry}
                className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                userId={post.userId}
                author={post.author}
                createdAt={post.createdAt}
              />
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Data from JSONPlaceholder API
                </h3>
                <p className="text-gray-600 text-sm">
                  These posts are fetched at build time using Next.js getStaticProps for optimal performance.
                </p>
                {error && (
                  <p className="text-amber-600 text-sm mt-2">
                    Note: Currently showing fallback data due to API fetch error during build.
                  </p>
                )}
              </div>
              <a
                href="https://jsonplaceholder.typicode.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                View API
              </a>
            </div>
          </div>
          {posts.length === 0 && !error && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts available</h3>
              <p className="text-gray-500">Check back later for new travel content.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Static Generation with getStaticProps
export async function getStaticProps() {
  try {
    const [postsResponse, usersResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/users')
    ]);

    if (!postsResponse.ok || !usersResponse.ok) {
      throw new Error(`API error: ${postsResponse.status} ${usersResponse.status}`);
    }

    const postsData: ApiPost[] = await postsResponse.json();
    const usersData: ApiUser[] = await usersResponse.json();

    const usersMap: { [key: number]: string } = {};
    usersData.forEach(user => {
      usersMap[user.id] = user.name;
    });

    const transformedPosts: PostProps[] = postsData.slice(0, 12).map(post => ({
      id: post.id,
      title: post.title.charAt(0).toUpperCase() + post.title.slice(1), 
      content: post.body.charAt(0).toUpperCase() + post.body.slice(1), 
      userId: post.userId,
      author: usersMap[post.userId],
      createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString() 
    }));

    return {
      props: {
        posts: transformedPosts,
      },
      revalidate: 3600, 
    };
  } catch (error) {
    console.error('Error fetching data in getStaticProps:', error);
    const fallbackPosts: PostProps[] = [
      {
        id: 1,
        title: 'Welcome to Our Travel Community',
        content: 'Discover amazing places to stay and unique experiences around the world. Join our community of travelers and hosts.',
        userId: 1,
        author: 'Travel Admin',
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        title: 'Best Travel Tips for 2024',
        content: 'Make the most of your travels with these insider tips and recommendations from experienced travelers.',
        userId: 2,
        author: 'Travel Expert',
        createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      },
      {
        id: 3,
        title: 'Hosting Guide for Beginners',
        content: 'Learn how to become a great host and provide exceptional experiences for your guests with our comprehensive guide.',
        userId: 3,
        author: 'Hosting Pro',
        createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      },
      {
        id: 4,
        title: 'Sustainable Travel Practices',
        content: 'How to travel responsibly and minimize your environmental impact while exploring the world.',
        userId: 4,
        author: 'Eco Traveler',
        createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
      },
      {
        id: 5,
        title: 'Family-Friendly Destinations',
        content: 'Discover the best destinations and accommodations for memorable family vacations.',
        userId: 5,
        author: 'Family Travel',
        createdAt: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
      },
      {
        id: 6,
        title: 'Budget Travel Secrets',
        content: 'Smart ways to save money while traveling without compromising on experiences.',
        userId: 6,
        author: 'Budget Explorer',
        createdAt: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
      },
    ];

    return {
      props: {
        posts: fallbackPosts,
        error: error instanceof Error ? error.message : 'Failed to fetch data',
      },
      revalidate: 600, 
    };
  }
}

export default PostsPage;