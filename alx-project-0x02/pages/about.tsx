// pages/about.tsx
import React from 'react';
import Head from 'next/head';
import Button from '../components/common/Button';

const AboutPage: React.FC = () => {
  const handleButtonClick = (message: string) => {
    alert(message);
  };

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

        {/* Button Demonstration Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Button Components</h2>
          
          {/* Size Variations */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Size Variations</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <Button
                size="small"
                shape="rounded-md"
                variant="primary"
                onClick={() => handleButtonClick('Small button clicked!')}
              >
                Small Button
              </Button>
              
              <Button
                size="medium"
                shape="rounded-md"
                variant="primary"
                onClick={() => handleButtonClick('Medium button clicked!')}
              >
                Medium Button
              </Button>
              
              <Button
                size="large"
                shape="rounded-md"
                variant="primary"
                onClick={() => handleButtonClick('Large button clicked!')}
              >
                Large Button
              </Button>
            </div>
          </div>

          {/* Shape Variations */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Shape Variations</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <Button
                size="medium"
                shape="rounded-sm"
                variant="secondary"
                onClick={() => handleButtonClick('Rounded-sm button clicked!')}
              >
                Slightly Rounded
              </Button>
              
              <Button
                size="medium"
                shape="rounded-md"
                variant="secondary"
                onClick={() => handleButtonClick('Rounded-md button clicked!')}
              >
                Medium Rounded
              </Button>
              
              <Button
                size="medium"
                shape="rounded-full"
                variant="secondary"
                onClick={() => handleButtonClick('Rounded-full button clicked!')}
              >
                Fully Rounded
              </Button>
            </div>
          </div>

          {/* Combined Variations */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Combined Variations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg">
                <h4 className="font-semibold mb-4">Small & Round</h4>
                <Button
                  size="small"
                  shape="rounded-full"
                  variant="outline"
                  onClick={() => handleButtonClick('Small rounded button clicked!')}
                >
                  Explore
                </Button>
              </div>
              
              <div className="text-center p-6 border rounded-lg">
                <h4 className="font-semibold mb-4">Medium & Sharp</h4>
                <Button
                  size="medium"
                  shape="rounded-sm"
                  variant="primary"
                  onClick={() => handleButtonClick('Medium sharp button clicked!')}
                >
                  Book Now
                </Button>
              </div>
              
              <div className="text-center p-6 border rounded-lg">
                <h4 className="font-semibold mb-4">Large & Rounded</h4>
                <Button
                  size="large"
                  shape="rounded-md"
                  variant="ghost"
                  onClick={() => handleButtonClick('Large rounded button clicked!')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Demo */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Additional Features</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="medium"
              shape="rounded-md"
              variant="primary"
              disabled
            >
              Disabled Button
            </Button>
            
            <Button
              size="medium"
              shape="rounded-md"
              variant="primary"
              loading
            >
              Loading State
            </Button>
            
            <Button
              size="medium"
              shape="rounded-full"
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-50"
            >
              Custom Styled
            </Button>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto">
            To create a world where anyone can belong anywhere, providing healthy travel that is local, authentic, diverse, inclusive and sustainable.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-rose-500 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join our community</h2>
          <p className="text-xl mb-6">Become a host or start your next adventure</p>
          <div className="flex justify-center space-x-4">
            <Button
              size="large"
              shape="rounded-lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-500"
              onClick={() => handleButtonClick('Become a Host clicked!')}
            >
              Become a Host
            </Button>
            <Button
              size="large"
              shape="rounded-lg"
              variant="ghost"
              className="text-white hover:bg-rose-600"
              onClick={() => handleButtonClick('Contact Support clicked!')}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;