import React from 'react';
import Header from './ui/Header';
import Footer from "./ui/Footer";
import ContentCard from './ui/ContentCard';
import EmailSubscription from "./ui/EmailSubscription";

const MainComponent: React.FC = () => {
  
  const pageTitle = "Page title";
  
  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact'},
  ];

  const cardItems = [
    { _title: 'Lorem', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    { _title: 'Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    { _title: 'Dolor', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
  ];

  const profilePic = "/profilepicture.webp";

  const author = "Full Name";

  return (
    <>
      <div className="relative flex font-serif antialiased bg-hero-pattern bg-cover overflow-hidden bg-beige flex-col justify-center min-h-screen py-6 sm:py-12">
        <Header title={pageTitle} navItems={navItems}/>
        <ContentCard cardItems={cardItems} imageSrc={profilePic}/>
        <EmailSubscription />
        <Footer author={author} />
      </div>
    </>
  );
};

export default MainComponent;