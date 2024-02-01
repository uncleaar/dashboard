import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: process.env.LIVEBLOCKS_PUBLIC_KEY as string,
  throttle: 100,
});

type Presence = {};

type Storage = {};

export const { RoomProvider, useMyPresence, useStorage } = createRoomContext<
  Presence,
  Storage
>(client);
