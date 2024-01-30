"use client";
import React, { FC, useState } from "react";
import { NewColumForm } from "@/shared/ui/Forms/NewColumnForm/NewColumnForm";
import { Column } from "@/shared/ui/Column/Column";

interface BoardProps {}

const defaultColumns = [
  { id: "1", name: "todo", index: 0 },
  { id: "2", name: "in progress", index: 1 },
  { id: "3", name: "done", index: 2 },
];

const defaultCards = [
  { id: "1", name: "Task 1", index: 0, columnId: "1" },
  { id: "4", name: "Task 1", index: 0, columnId: "1" },
  { id: "2", name: "Task 2", index: 1, columnId: "2" },
  { id: "3", name: "Task 3", index: 2, columnId: "3" },
];

export const Board: FC<BoardProps> = () => {
  const [cards, setCards] = useState(defaultCards);
  const [columns, setColumns] = useState(defaultColumns);

  return (
    <div className="flex gap-4">
      {columns.map((column) => (
        <Column
          key={column.id}
          {...column}
          setCards={setCards}
          cards={cards
            .sort((a, b) => a.index - b.index)
            .filter((card) => card.columnId === column.id)}
        />
      ))}
      <NewColumForm />
    </div>
  );
};
