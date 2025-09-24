import React from 'react';
import Head from 'next/head';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Airbnb - How we started and where we're going</title>
        <meta name="description" content="Learn about Airbnb's mission to create a world where anyone can belong anywhere." />
      </Head>
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Airbnb</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating a world where anyone can belong anywhere—where people can live in a place, instead of just traveling to it.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              It all began in 2007 when two designers who had space to share hosted three travelers looking for a place to stay. 
              Now, millions of hosts and travelers choose to create a free Airbnb account so they can list their space and book 
              unique accommodations anywhere in the world.
            </p>
            <p className="text-gray-600">
              Today, Airbnb is a global travel community that offers unique access to extraordinary places, experiences, and 
              communities around the corner and across the globe.
            </p>
          </div>
          <div className="bg-rose-50 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-semibold mb-2">7+ Million</h3>
            <p className="text-gray-600">Active listings worldwide</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto">
            To create a world where anyone can belong anywhere, providing healthy travel that is local, authentic, diverse, inclusive and sustainable.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What we believe in</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Community', description: 'We champion diversity and welcome people from all backgrounds.', icon: '👥' },
              { title: 'Sustainability', description: 'We promote responsible travel that benefits local communities.', icon: '🌱' },
              { title: 'Innovation', description: 'We continuously improve our platform to serve our community better.', icon: '💡' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-rose-500 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join our community</h2>
          <p className="text-xl mb-6">Become a host or start your next adventure</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-rose-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Become a Host
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-600 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;