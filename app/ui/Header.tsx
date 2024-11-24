import React from "react";

interface HeaderProps {
  title: string;
  navItems: string[];
}

const Header: React.FC<HeaderProps> = ({ title, navItems }) => {
  return (
    <header className="h-6">
      {title}
      <nav className="flex gap-9 my-auto text-2xl whitespace-nowrap">
        {navItems.map((item, index) => (
          <a href={`#${item.toLowerCase()}`} key={index}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
