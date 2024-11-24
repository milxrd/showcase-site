import React from "react";

interface ContentSectionProps {
  content: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ content }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="grow px-5 py-28 w-full text-2xl text-center text-black bg-white rounded-3xl max-md:py-24 max-md:mt-10 max-md:max-w-full">
        {content}
      </div>
    </div>
  );
};

export default ContentSection;
