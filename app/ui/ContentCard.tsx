import React from "react";

interface ContentCardProps {
  cardItems: { _title: string, content: string }[];
}

const ContentCard: React.FC<ContentCardProps> = ({ cardItems }) => {
  return (
    <>
      <div className="relative flex flex-row gap-3 leading-7 text-black py-6 px-6 mx-2 sm:mx-auto sm:rounded-lg sm:px-10 mt-auto">
        {cardItems.map((items) => {
          return (
            <div key={items._title} className="relative bg-olive px-6 pb-8 pt-10 shadow-xl shadow-olive/50 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
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
