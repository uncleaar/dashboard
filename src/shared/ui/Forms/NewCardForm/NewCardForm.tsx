"use client";
import { useMutation } from "@/config/liveblocks.config";
import { CardI } from "@/types/card";
import { LiveObject } from "@liveblocks/client";
import React, { useRef, useState } from "react";
import uniqid from "uniqid";

interface NewCardFormProps {
  columnId: string;
}

export default function NewCardForm({ columnId }: NewCardFormProps) {
  const [cardName, setCardName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const addCard = useMutation(
    ({ storage }, cardName) => {
      return storage.get("cards").push(
        new LiveObject<CardI>({
          name: cardName,
          id: uniqid.time(),
          createdAt: Date.now(),
          index: 9999,
          columnId: columnId,
        }),
      );
    },
    [columnId],
  );

  const handleNewCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = cardName.trim();
    if (name) {
      addCard(name);
      setCardName("");
      inputRef.current?.focus();
    }
  };

  return (
    <form onSubmit={handleNewCard}>
      <input
        ref={inputRef}
        type="text"
        placeholder="new  card"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
      />
    </form>
  );
}
