"use client";
import React, { FC, useState } from "react";
import { RoomProvider } from "@/config/liveblocks.config";
import { LiveList } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import Columns from "../Columns/Columns";

interface BoardProps {
  id: string;
}

export const Board: FC<BoardProps> = ({ id }) => {
  return (
    <RoomProvider
      id={id}
      initialPresence={{}}
      initialStorage={{
        columns: new LiveList(),
        cards: new LiveList(),
      }}
    >
      <ClientSideSuspense fallback={<div>Loading...</div>}>
        {() => <Columns />}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
