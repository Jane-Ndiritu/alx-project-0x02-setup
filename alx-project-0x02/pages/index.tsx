// pages/users.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { type UserProps, type ApiUser } from '../interfaces';

interface UsersPageProps {
  users: UserProps[];
  error?: string;
}

const UsersPage: React.FC<UsersPageProps> = ({ users, error }) => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <>
      <Head>
        <title>Users - Airbnb Community</title>
        <meta name="description" content="Meet our amazing community of hosts and travelers on Airbnb." />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Community</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the amazing hosts and travelers who make Airbnb special. Discover their stories and connect with our global community.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              {users.length} community members {error && '(using fallback data)'}
            </div>
          </div>

          {/* Error State */}
          {error && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-amber-800">API Connection Issue</h3>
                  <p className="text-amber-700 text-sm">{error}</p>
                  <button
                    onClick={handleRetry}
                    className="mt-2 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors text-sm"
                  >
                    Retry Connection
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Users Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
                phone={user.phone}
                website={user.website}
                address={user.address}
                company={user.company}
              />
            ))}
          </div>

          {/* Community Stats */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-rose-500">{users.length}</div>
                <div className="text-gray-600">Total Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500">
                  {users.filter(user => user.company.name.includes('Group') || user.company.name.includes('LLC')).length}
                </div>
                <div className="text-gray-600">Business Hosts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500">
                  {users.filter(user => user.email.includes('.net')).length}
                </div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-500">
                  {new Set(users.map(user => user.address.city)).size}
                </div>
                <div className="text-gray-600">Cities</div>
              </div>
            </div>
          </div>

          {/* Empty State */}
          {users.length === 0 && !error && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No users found</h3>
              <p className="text-gray-500">Check back later to meet our community members.</p>
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
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const usersData: ApiUser[] = await response.json();

    // Transform API data to match UserProps interface
    const transformedUsers: UserProps[] = usersData.map(user => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
      address: user.address,
      company: user.company
    }));

    return {
      props: {
        users: transformedUsers,
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching users:', error);

    // Fallback data
    const fallbackUsers: UserProps[] = [
      {
        id: 1,
        name: 'John Traveler',
        username: 'johnt',
        email: 'john.traveler@example.com',
        phone: '1-555-0123',
        website: 'johntravels.com',
        address: {
          street: '123 Main St',
          suite: 'Apt 4B',
          city: 'New York',
          zipcode: '10001',
          geo: { lat: '40.7128', lng: '-74.0060' }
        },
        company: {
          name: 'Travel Enthusiasts Group',
          catchPhrase: 'Exploring the world one destination at a time',
          bs: 'travel experiences'
        }
      },
      {
        id: 2,
        name: 'Sarah Host',
        username: 'sarahh',
        email: 'sarah.host@example.com',
        phone: '1-555-0124',
        website: 'sarahshome.com',
        address: {
          street: '456 Oak Avenue',
          suite: 'Suite 200',
          city: 'San Francisco',
          zipcode: '94102',
          geo: { lat: '37.7749', lng: '-122.4194' }
        },
        company: {
          name: 'Cozy Homes LLC',
          catchPhrase: 'Making travelers feel at home',
          bs: 'hospitality services'
        }
      },
      {
        id: 3,
        name: 'Mike Explorer',
        username: 'mikee',
        email: 'mike.explorer@example.com',
        phone: '1-555-0125',
        website: 'mikeadventures.com',
        address: {
          street: '789 Beach Blvd',
          suite: 'Unit 5',
          city: 'Miami',
          zipcode: '33101',
          geo: { lat: '25.7617', lng: '-80.1918' }
        },
        company: {
          name: 'Adventure Seekers Inc',
          catchPhrase: 'Life is either a daring adventure or nothing',
          bs: 'adventure tourism'
        }
      }
    ];

    return {
      props: {
        users: fallbackUsers,
        error: error instanceof Error ? error.message : 'Failed to fetch users'
      },
      revalidate: 600, // Retry more frequently if error
    };
  }
}

export default UsersPage;