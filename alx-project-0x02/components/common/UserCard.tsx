// components/common/UserCard.tsx
import React from 'react';
import { type UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
  company
}) => {
  // Format phone number for better display
  const formatPhone = (phone: string) => {
    return phone.replace(/(\d{1})?(\d{3})(\d{3})(\d{4})/, '$1 ($2) $3-$4');
  };

  // Get initials for avatar
  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Generate random color based on user ID for avatar
  const getAvatarColor = (userId: number) => {
    const colors = [
      'bg-rose-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 
      'bg-amber-500', 'bg-indigo-500', 'bg-pink-500', 'bg-cyan-500'
    ];
    return colors[userId % colors.length];
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
      {/* Card Header with Avatar */}
      <div className="bg-gradient-to-r from-rose-500 to-rose-600 p-6">
        <div className="flex items-center space-x-4">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold ${getAvatarColor(id)}`}>
            {getInitials(name)}
          </div>
          <div className="text-white">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-rose-100">@{username}</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a 
            href={`mailto:${email}`}
            className="text-gray-600 hover:text-rose-500 transition-colors break-all"
          >
            {email}
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a 
            href={`tel:${phone}`}
            className="text-gray-600 hover:text-rose-500 transition-colors"
          >
            {formatPhone(phone)}
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
          </svg>
          <a 
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-rose-500 transition-colors"
          >
            {website}
          </a>
        </div>
      </div>

      {/* Address Section */}
      <div className="px-6 pb-4">
        <div className="border-t border-gray-100 pt-4">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Address</span>
          </h4>
          <p className="text-sm text-gray-600">
            {address.street}, {address.suite}<br />
            {address.city}, {address.zipcode}
          </p>
        </div>
      </div>

      {/* Company Information */}
      <div className="px-6 pb-6">
        <div className="border-t border-gray-100 pt-4">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>Company</span>
          </h4>
          <p className="font-medium text-gray-800">{company.name}</p>
          <p className="text-sm text-gray-600 italic">"{company.catchPhrase}"</p>
          <p className="text-xs text-gray-500 mt-1">{company.bs}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex space-x-3">
          <button className="flex-1 bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 transition-colors font-medium text-sm">
            View Profile
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;