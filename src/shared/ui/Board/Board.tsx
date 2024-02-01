"use client";
import React, { FC, useState } from "react";
import { NewColumForm } from "@/shared/ui/Forms/NewColumnForm/NewColumnForm";
import { Column } from "@/shared/ui/Column/Column";
import { RoomProvider } from "@/config/liveblocks.config";
import { LiveList } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import { Columns } from "../Columns/Columns";

interface BoardProps {
  id: string;
}

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

export const Board: FC<BoardProps> = ({ id }) => {
  const [cards, setCards] = useState(defaultCards);
  const [columns, setColumns] = useState(defaultColumns);

  return (
    <RoomProvider
      id={id}
      initialPresence={{}}
      initialStorage={{
        columns: new LiveList(),
      }}
    >
      <ClientSideSuspense fallback={<div>Loading...</div>}>
        {() => (
          <>
            <Columns columns={columns} />
          </>
        )}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
