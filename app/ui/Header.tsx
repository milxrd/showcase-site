import React from "react";

interface HeaderProps {
  title: string;
  navItems: string[];
}

const Header: React.FC<HeaderProps> = ({ title, navItems }) => {
  return (
    <header className="h-14 text-center">
      <span className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-bottle-green to-olive-dark">{title}</span>
      <nav className="relative flex flex-row gap-x-16 py-6 text-2xl whitespace-nowrap text-white justify-evenly">
        {navItems.map((item, index) => (
          <a className="py-3 px-8 text-white text-sm font-semibold rounded-md focus:outline-none bg-green-950 shadow-md shadow-green-950/50" href={`#${item.toLowerCase()}`} key={index}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
