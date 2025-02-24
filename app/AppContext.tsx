'use client'

import React, { createContext, useContext } from 'react';

interface AppContextProps {
  pageTitle: string;
  navItems: { name: string; href: string }[];
  author: string;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const pageTitle = "Page title";
  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];
  const author = "Full Name";

  return (
    <AppContext.Provider value={{ pageTitle, navItems, author }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};