import { LiveList, LiveObject, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  throttle: 100,
  authEndpoint: "/api/liveblocks-auth",
});

type Presence = {};

type Column = {
  name: string;
  index: number;
};

type Storage = {
  columns: LiveList<LiveObject<Column>>;
};

export const { RoomProvider, useMyPresence, useMutation, useStorage } =
  createRoomContext<Presence, Storage>(client);
