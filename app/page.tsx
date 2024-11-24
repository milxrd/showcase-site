import React from 'react';
import Header from './ui/Header';
import ContentCard from './ui/ContentCard';
import EmailSubscription from './ui/EmailSubscription';
import Footer from './ui/Footer';
import InfoCard from './ui/InfoCard';

const MainComponent: React.FC = () => {
  const navItems = ['Lorem', 'ipsum', 'dolor'];
  const infoCards = ['Lorem', 'ipsum', 'dolor'];
  const contentCards = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ];

  return (
    <>
    <div className="relative flex bg-hero-pattern min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 ">
      <div className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900 sm:mx-auto sm:max-w-xl sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <Header title="Page title" navItems={navItems} />
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              {infoCards.map((_title, index) => (
                <InfoCard key={index} title={''} />
              ))}
              {contentCards.map((content, index) => (
                <ContentCard key={index} content={content} />
              ))}
            </div>
          </div>
        </div>
        <EmailSubscription />
      </div>
      <Footer socialIcons={[]} />
    </div>  
    </>
  );
};

export default MainComponent;