import React from "react";

interface ContentCardProps {
  content: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  return (
    <>
    <div className="grid grid-cols-3 gap-3">
      <div className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <p className="">{content}</p>
        </div>
      </div>
    </>
  );
};

export default ContentCard;
