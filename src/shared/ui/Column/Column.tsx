import React, { FC, SetStateAction } from "react";
import { Card } from "@/shared/ui/Card/Card";
import { ReactSortable } from "react-sortablejs";
import { CardI } from "@/types/card";
import { useMutation, useStorage } from "@/config/liveblocks.config";
import { shallow } from "@liveblocks/client";
import NewCardForm from "../Forms/NewCardForm/NewCardForm";
import { useCardsForColumn, useUpdateCard } from "@/shared/hooks";

interface ColumnProps {
  id: string;
  name?: string;
}

export const Column: FC<ColumnProps> = ({ id, name }) => {
  const cards = useCardsForColumn(id);

  const { updateCard } = useUpdateCard();

  const addTasksOrderForColumn = useMutation(
    ({ storage }, sortedCards: CardI[], newColumnId) => {
      const indexSortedCards = sortedCards.map((c) => c.id.toString());
      const allCards = [...storage.get("cards").map((c) => c.toObject())];

      indexSortedCards.forEach((cardId, columnIndex) => {
        const index = allCards.findIndex((c) => c.id.toString() === cardId);
        updateCard(index, {
          columnId: newColumnId,
          index: columnIndex,
        });
      });
    },
    [],
  );

  return (
    <div className="w-48 shadow-md rounded-md p-2">
      <h3>{name}</h3>
      {cards && (
        <>
          <ReactSortable
            list={cards}
            setList={(cards) => addTasksOrderForColumn(cards, id)}
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
