'use client'

import React from 'react';
import Link from 'next/link';
import Header from './ui/Header';
import Footer from './ui/Footer';
import { useAppContext } from './AppContext';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: React.FC<ErrorPageProps> = ({ error, reset }) => {
  const { pageTitle, navItems, author } = useAppContext();

  return (
    <div className="relative flex font-serif antialiased bg-hero-pattern bg-cover bg-fixed overflow-hidden bg-black flex-col justify-center min-h-screen py-6 sm:py-12">
      <Header title={pageTitle} navItems={navItems} />

      <div className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <div className="bg-red-900 bg-opacity-20 px-8 py-12 shadow-xl shadow-red-900/30 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 mb-8 border border-red-500/30">
          <h1 className="text-6xl font-bold text-red-400 mb-4">!</h1>
          <h2 className="text-2xl font-semibold text-white mb-6">Something went wrong</h2>
          <p className="text-white mb-6">
            An unexpected error occurred. This has been logged and we&apos;re working to fix it.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <details className="text-left mb-6 p-4 bg-black/30 rounded-md">
              <summary className="text-red-300 cursor-pointer mb-2">Error Details (Development)</summary>
              <pre className="text-xs text-red-200 overflow-auto">
                {error.message}
                {error.digest && `\nDigest: ${error.digest}`}
              </pre>
            </details>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-block py-3 px-6 text-white text-lg font-semibold rounded-md bg-green-950 shadow-md shadow-green-950/50 hover:bg-green-900 hover:shadow-green-900/50 transition-all duration-200"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-block py-3 px-6 text-white text-lg font-semibold rounded-md bg-gray-700 shadow-md shadow-gray-700/50 hover:bg-gray-600 hover:shadow-gray-600/50 transition-all duration-200"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>

      <Footer author={author} />
    </div>
  );
};

export default Error;
