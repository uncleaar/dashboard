import React, { FC, SetStateAction } from "react";
import { Card } from "@/shared/ui/Card/Card";
import { ReactSortable } from "react-sortablejs";

interface ColumnProps {
  id: string;
  name?: string;
  setCards?: SetStateAction<any>;
  cards: Card[];
}

type Card = {
  name: string;
  id: string;
  index: number;
  columnId: string;
};

export const Column: FC<ColumnProps> = ({ id, setCards, name, cards }) => {
  const setCardsForColumn = (sortedCards: Card[], newColumnId: string) => {
    setCards((prevCards: Card[]) => {
      const newCards = [...prevCards];

      sortedCards.forEach((card: Card, newIndex: number) => {
        const foundCard = newCards.find((newCard) => newCard.id === card.id);

        if (foundCard) {
          foundCard.index = newIndex;
          foundCard.columnId = newColumnId;
        }
      });

      return newCards;
    });
  };

  return (
    <div className="w-48 shadow-md rounded-md p-2">
      <h3>{name}</h3>
      <ReactSortable
        list={cards}
        setList={(cards) => setCardsForColumn(cards, id)}
        group="cards"
        className="min-h-12"
        ghostClass="opacity-40"
      >
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ReactSortable>
    </div>
  );
};
