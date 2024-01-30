"use client";
import React, { FC } from "react";

interface NewColumnFormProps {}

export const NewColumForm: FC<NewColumnFormProps> = () => {
  const handleNewColumn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = (e.target as HTMLFormElement).querySelector("input");

    const columnName = input?.value;

    alert(columnName);
  };

  return (
    <form className="max-w-xs" onSubmit={handleNewColumn}>
      <label className="block">
        <span className="text-gray-600 block">Column Name</span>
        <input type="text" placeholder="new column name" />
      </label>
      <button type="submit" className="mt-2 block w-full">
        Create column
      </button>
    </form>
  );
};
