import React from "react";

interface ContentCardProps {
  content: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  return (
    <>
      <div className="relative bg-olive px-6 pb-8 pt-10 shadow-xl shadow-olive/50 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <p className="">{content}</p>
      </div>
    </>
  );
};

export default ContentCard;
