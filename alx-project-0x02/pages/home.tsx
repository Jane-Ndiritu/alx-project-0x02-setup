import React from 'react';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Airbnb - Vacation Rentals, Cabins, Beach Houses & More</title>
        <meta name="description" content="Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb." />
      </Head>
      
      {/* Hero Section */}
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
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-12">
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

      {/* Featured Listings */}
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
    </>
  );
};

export default HomePage;