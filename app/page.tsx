'use client'

import React from 'react';
import Header from './ui/Header';
import Footer from "./ui/Footer";
import ContentCard from './ui/ContentCard';
import { useAppContext } from './AppContext';

const MainComponent: React.FC = () => {
  const { pageTitle, navItems, author } = useAppContext();

  const cardItems = [
    { _title: 'Lorem', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    { _title: 'Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    { _title: 'Dolor', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
  ];

  const profilePic = "/profilepicture.webp";

  return (
      <div className="relative flex font-serif antialiased bg-hero-pattern bg-cover bg-fixed overflow-hidden bg-black flex-col justify-center min-h-screen py-6 sm:py-12">
        <Header title={pageTitle} navItems={navItems} />
        <ContentCard cardItems={cardItems} imageSrc={profilePic} />
        <Footer author={author} />
      </div>
  );
};

export default MainComponent;