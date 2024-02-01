"use client";
import { useMutation } from "@/config/liveblocks.config";
import { LiveObject } from "@liveblocks/client";
import { Liveblocks } from "@liveblocks/node";
import React, { FC, useRef, useState } from "react";

import uniqid from "uniqid";
interface NewColumnFormProps {}

export const NewColumForm: FC<NewColumnFormProps> = () => {
  const [columnName, setColumnName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const addColumn = useMutation(({ storage }, columnName) => {
    storage.get("columns").push(
      new LiveObject({
        name: columnName,
        id: uniqid.time(),
        createdAt: Date.now(),
        index: 0,
      }),
    );
  }, []);

  const handleNewColumn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = columnName.trim();
    if (name) {
      addColumn(name);
      setColumnName("");
      inputRef.current?.focus();
    }
  };

  return (
    <form className="max-w-xs" onSubmit={handleNewColumn}>
      <label className="block">
        <span className="text-gray-600 block">Column Name</span>
        <input
          ref={inputRef}
          type="text"
          placeholder="new column name"
          value={columnName}
          onChange={(e) => setColumnName(e.target.value)}
        />
      </label>
      <button type="submit" className="mt-2 block w-full">
        Create column
      </button>
    </form>
  );
};
