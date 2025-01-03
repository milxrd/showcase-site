import React from 'react';
import Header from './ui/Header';
import ContentCard from './ui/ContentCard';
import Footer from './ui/Footer';
import InfoCard from './ui/InfoCard';

const MainComponent: React.FC = () => {
  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact'},
  ];
  const infoCards = ['Lorem', 'ipsum', 'dolor']; 
  const contentCards = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ];

  return (
    <>
      <div className="relative flex font-serif antialiased bg-hero-pattern bg-cover min-h-screen overflow-hidden bg-olive flex-col justify-center py-6 sm:py-12">
        <div className="relative text-black mx-2 px-6 pb-8 pt-10 sm:mx-auto sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md pb-16">
            <Header title='Page title' navItems={navItems}/>
          </div>
          <div className="relative flex flex-row gap-3 py-8 leading-7 text-black">
            {infoCards.map((_title, index) => (
              <InfoCard key={index} title={''} />
            ))}
            {contentCards.map((content, index) => (
              <ContentCard key={index} content={content} />
            ))}
          </div>
          <Footer socialIcons={[]} />
        </div>
      </div>  
    </>
  );
};

export default MainComponent;