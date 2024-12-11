import React from "react";

interface InfoCardProps {
  title: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title }) => {
  return (
    <>
      <div>{title}</div>
    </>
  );
};

export default InfoCard;
