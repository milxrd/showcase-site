'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface HeaderProps {
  title: string;
  navItems: { name: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ title, navItems }) => {
  const pathname = usePathname();
  return (
    <header className="h-auto text-center w-full relative top-12 py-6 sm:py-12 mb-auto">
      <Link href="/"><span className="text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-bottle-green to-olive-dark">{title}</span></Link>
      <nav className="relative flex flex-row w-full max-w-1/3 gap-x-16 py-8 text-2xl whitespace-nowrap text-white justify-evenly">
        {navItems.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("py-5 px-20 text-white text-sm font-semibold rounded-md focus:outline-none bg-green-950 shadow-md shadow-green-950/50",
            {
              'bg-green-900 shadow-md shadow-green-900/50 text-white': pathname === link.href,
            },
            )}
          >
            <p className="hidden md:block text-xl">{link.name}</p>
          </Link>
        );
        })}
      </nav>
    </header>
    );
  };

export default Header;
