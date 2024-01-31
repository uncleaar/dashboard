"use server";
import { liveblocksClient } from "@/lib/blocks";
import { getUserEmail } from "@/lib/getUserEmail";
import Link from "next/link";
import React from "react";

export default async function Boards() {
  const email = await getUserEmail();

  const { data: rooms } = await liveblocksClient.getRooms({ userId: email });

  return (
    <div className="grid md:grid-cols-4 my-2 gap-2">
      {rooms.length > 0 &&
        rooms.map((room) => (
          <Link
            key={room.id}
            href={`/boards/${room.id}`}
            className="border p-4 rounded-lg bg-gray-200"
          >
            {room.metadata.boardName}
          </Link>
        ))}
    </div>
  );
}
