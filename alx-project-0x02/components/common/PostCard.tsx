import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { type PostProps, type ApiPost, type ApiUser } from '../interfaces';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [users, setUsers] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts and users from JSONPlaceholder API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
   
        const [postsResponse, usersResponse] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/users')
        ]);

        if (!postsResponse.ok || !usersResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const postsData: ApiPost[] = await postsResponse.json();
        const usersData: ApiUser[] = await usersResponse.json();

        const usersMap: { [key: number]: string } = {};
        usersData.forEach(user => {
          usersMap[user.id] = user.name;
        });

        setUsers(usersMap);
        const transformedPosts: PostProps[] = postsData.slice(0, 12).map(post => ({
          id: post.id,
          title: post.title,
          content: post.body,
          userId: post.userId,
          author: usersMap[post.userId],
          createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString() // Random recent date
        }));

        setPosts(transformedPosts);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Travel Blog & Tips</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing travel stories, hosting tips, and destination guides from our community.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              {loading ? 'Loading posts...' : `Showing ${posts.length} posts`}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😞</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Failed to load posts</h3>
              <p className="text-gray-500 mb-4">{error}</p>
              <button
                onClick={handleRetry}
                className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Posts Grid */}
          {!loading && !error && (
            <>
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

              {/* API Info */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Data from JSONPlaceholder API
                    </h3>
                    <p className="text-gray-600 text-sm">
                      These posts are fetched from JSONPlaceholder, a free fake API for testing and prototyping.
                    </p>
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
            </>
          )}

          {/* Empty State */}
          {!loading && !error && posts.length === 0 && (
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

export default PostsPage;