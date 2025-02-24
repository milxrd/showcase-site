'use client'

import React from 'react';
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { useAppContext } from '../AppContext';

export default function Page() {
  const { pageTitle, navItems, author } = useAppContext();

  return (
    <div className="relative flex font-serif antialiased bg-hero-pattern bg-cover overflow-hidden bg-beige flex-col justify-center min-h-screen py-6 sm:py-12">
      <Header title={pageTitle} navItems={navItems}/>
      <Footer author={author} />
    </div>
  );
}
