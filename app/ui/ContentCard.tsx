import React from "react";
import Image from "next/image";

interface ContentCardProps {
  cardItems: { _title: string, content: string }[];
  imageSrc: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ cardItems, imageSrc }) => {
  return (
    <>
      <div className="relative flex flex-row gap-3 leading-7 top-44 text-black py-6 px-6 mx-2 sm:mx-auto sm:rounded-lg sm:px-10 mt-auto -translate-x-24">
      <div className="flex items-center gap-4 relative transition-discrete transform justify-center overflow-hidden opacity-0 animate-slide-down bottom-44 left-44 z-10">
          <div className="w-24 h-24 rounded-full bg-olive-dark flex items-center">
            <Image
              src={imageSrc}
              alt="Profile"
              width={128}
              height={128}
              className="object-cover rounded-full"
            />
          </div>
        <h3 className="text-xl text-black font-semibold">User Name</h3>
      </div>
        {cardItems.map((items, index) => {
          return (
            <div 
              key={items._title} 
              className="relative bg-olive px-6 pb-8 pt-10 shadow-xl shadow-olive/50 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 opacity-0 animate-slide-down"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="h-10 text-2xl font-semibold">{items._title}</h3>
              <p className="">{items.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContentCard;
