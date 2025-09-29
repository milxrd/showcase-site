'use client'

import React from 'react';
import Link from 'next/link';
import Header from './ui/Header';
import Footer from './ui/Footer';
import { useAppContext } from './AppContext';

const NotFound: React.FC = () => {
  const { pageTitle, navItems, author } = useAppContext();

  return (
    <div className="relative flex font-serif antialiased bg-hero-pattern bg-cover bg-fixed overflow-hidden bg-black flex-col justify-center min-h-screen py-6 sm:py-12">
      <Header title={pageTitle} navItems={navItems} />

      <div className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <div className="bg-olive bg-opacity-20 px-8 py-12 shadow-xl shadow-olive/30 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-6">Page Not Found</h2>
          <p className="text-white mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block py-3 px-6 text-white text-lg font-semibold rounded-md bg-green-950 shadow-md shadow-green-950/50 hover:bg-green-900 hover:shadow-green-900/50 transition-all duration-200"
          >
            Go Back Home
          </Link>
        </div>
      </div>

      <Footer author={author} />
    </div>
  );
};

export default NotFound;
