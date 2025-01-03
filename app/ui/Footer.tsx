'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

interface SocialIcon {
  src: string;
  alt: string;
}

interface FooterProps {
  socialIcons: SocialIcon[];
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="mt-9 w-full max-w-[1525px] text-black text-opacity-80 max-md:max-w-full">
      <div className="flex shrink-0 h-px bg-black bg-opacity-50 mb-9 max-md:mb-5" />
      <div className="flex flex-wrap gap-5 justify-between text-base tracking-tight leading-relaxed">
        <p className="my-auto text-gray-dark">© Miłosz Lesiak 2025</p>
        <div className="flex gap-6 items-center text-right">
          <p className="grow self-stretch my-auto">Follow us:</p>
          <span className="">
            <FontAwesomeIcon icon={faFacebook} className="fa-stack hover:animate-beat"/>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
