// components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h3 className="font-bold text-2xl text-rose-500">
          <Link href="/" className="hover:text-rose-600 transition-colors">
            Airbnb
          </Link>
        </h3>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link 
                href="/home" 
                className={`font-medium transition-colors hover:text-rose-500 ${
                  isActive('/home') ? 'text-rose-500 font-semibold' : 'text-gray-600'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`font-medium transition-colors hover:text-rose-500 ${
                  isActive('/about') ? 'text-rose-500 font-semibold' : 'text-gray-600'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/posts" 
                className={`font-medium transition-colors hover:text-rose-500 ${
                  isActive('/posts') ? 'text-rose-500 font-semibold' : 'text-gray-600'
                }`}
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>

        {/* User Actions (optional) */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-rose-500 transition-colors font-medium">
            Become a Host
          </button>
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">👤</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;