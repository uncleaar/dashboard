import { CardI } from "@/types/card";
import { ColumnI } from "@/types/column";
import { LiveList, LiveObject, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  throttle: 100,
  authEndpoint: "/api/liveblocks-auth",
});

type Presence = {};

type Storage = {
  columns: LiveList<LiveObject<ColumnI>>;
  cards: LiveList<LiveObject<CardI>>;
};

export const { RoomProvider, useMyPresence, useMutation, useStorage } =
  createRoomContext<Presence, Storage>(client);
