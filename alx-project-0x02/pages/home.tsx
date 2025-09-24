import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type Post, type PostFormData } from "@/interfaces";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      title: 'Welcome to Airbnb!',
      content: 'Discover amazing places to stay and unique experiences around the world.',
      createdAt: new Date('2024-01-01'),
      author: 'Airbnb Team',
    },
    {
      id: '2',
      title: 'Travel Tips for 2024',
      content: 'Make the most of your travels with these insider tips and recommendations.',
      createdAt: new Date('2024-01-02'),
      author: 'Travel Expert',
    },
  ]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitPost = (formData: PostFormData) => {
    const newPost: Post = {
      id: Date.now().toString(),
      title: formData.title,
      content: formData.content,
      createdAt: new Date(),
      author: 'Current User',
    };

    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  return (
    <>
      <Head>
        <title>Airbnb - Vacation Rentals, Cabins, Beach Houses & More</title>
        <meta name="description" content="Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb." />
      </Head>

      <div className="relative bg-gradient-to-r from-rose-500 to-rose-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Find your next getaway</h1>
          <p className="text-xl mb-8">Discover homes, experiences, and unique stays tailored to your style</p>
          <div className="bg-white rounded-full p-2 max-w-2xl mx-auto shadow-lg">
            <div className="flex items-center justify-between">
              <button className="px-6 py-3 text-left border-r border-gray-200">
                <div className="text-sm font-semibold text-gray-800">Where</div>
                <div className="text-gray-500">Search destinations</div>
              </button>
              <button className="px-6 py-3 text-left border-r border-gray-200">
                <div className="text-sm font-semibold text-gray-800">Check in</div>
                <div className="text-gray-500">Add dates</div>
              </button>
              <button className="px-6 py-3 text-left border-r border-gray-200">
                <div className="text-sm font-semibold text-gray-800">Check out</div>
                <div className="text-gray-500">Add dates</div>
              </button>
              <button className="px-6 py-3 text-left">
                <div className="text-sm font-semibold text-gray-800">Who</div>
                <div className="text-gray-500">Add guests</div>
              </button>
              <button className="bg-rose-500 text-white p-3 rounded-full ml-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        
          <button
            onClick={handleOpenModal}
            className="mt-8 bg-white text-rose-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            ✨ Share Your Experience
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Recent Posts</h2>
            <button
              onClick={handleOpenModal}
              className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition-colors font-medium flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Add New Post</span>
            </button>
          </div>
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts yet</h3>
              <p className="text-gray-500 mb-4">Be the first to share your experience!</p>
              <button
                onClick={handleOpenModal}
                className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition-colors"
              >
                Create First Post
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  variant="elevated"
                  size="medium"
                  className="hover:shadow-xl transition-shadow"
                />
              ))}
            </div>
          )}
        </div>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore nearby destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Beachfront', count: '324 properties', image: '🏖️' },
              { name: 'Cabins', count: '189 properties', image: '🏡' },
              { name: 'Tiny Homes', count: '142 properties', image: '🚐' },
              { name: 'Luxury', count: '276 properties', image: '⭐' },
            ].map((category, index) => (
              <div key={index} className="border rounded-xl p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-3">{category.image}</div>
                <h3 className="font-semibold text-lg">{category.name}</h3>
                <p className="text-gray-600">{category.count}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 bg-gray-50 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Live anywhere</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Outdoor getaways', description: 'Properties with amazing views and nature access', image: '🌄' },
              { title: 'Unique stays', description: 'Spaces that are more than just a place to sleep', image: '🏰' },
              { title: 'Entire homes', description: 'Comfortable private places with room for friends', image: '🏠' },
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{item.image}</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitPost}
      />
    </>
  );
};

export default HomePage;