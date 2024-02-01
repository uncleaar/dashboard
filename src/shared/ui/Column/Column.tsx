import React, { FC, SetStateAction } from "react";
import { Card } from "@/shared/ui/Card/Card";
import { ReactSortable } from "react-sortablejs";
import { CardI } from "@/types/card";
import { useStorage } from "@/config/liveblocks.config";
import { shallow } from "@liveblocks/client";
import NewCardForm from "../Forms/NewCardForm/NewCardForm";

interface ColumnProps {
  id: string;
  name?: string;
}

export const Column: FC<ColumnProps> = ({ id, name }) => {
  const cards = useStorage<CardI[]>((storage) => {
    return storage.cards
      .filter((card) => card.columnId === id)
      .map((c) => ({ ...c }));
  }, shallow);

  const addCardToColumn = (sortedCards: CardI[], newColumnId: string) => {};

  return (
    <div className="w-48 shadow-md rounded-md p-2">
      <h3>{name}</h3>
      {cards && cards.length > 0 && (
        <>
          <ReactSortable
            list={cards}
            setList={(cards) => addCardToColumn(cards, id)}
            group="cards"
            className="min-h-12"
            ghostClass="opacity-40"
          >
            {cards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </ReactSortable>
        </>
      )}
      <NewCardForm columnId={id} />
    </div>
  );
};
