import React, { FC } from "react";

interface CardProps {
  name?: string;
}

export const Card: FC<CardProps> = ({ name }) => {
  return (
    <div className="border my-2 p-2 rounded-md">
      <span>{name}</span>
    </div>
  );
};
