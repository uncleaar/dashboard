import { useStorage } from "@/config/liveblocks.config";
import { CardI } from "@/types/card";
import { shallow } from "@liveblocks/client";

/**
 * Returns an array of cards for the specified column ID, sorted by index.
 *
 * @param {string} columnId - The ID of the column to retrieve cards for.
 * @return {CardI[]} An array of cards for the specified column ID, sorted by index.
 */
export const useCardsForColumn = (columnId: string) => {
  const cards = useStorage<CardI[]>((storage) => {
    return storage.cards
      .filter((card) => card.columnId === columnId)
      .map((card) => ({ ...card }))
      .sort((a, b) => a.index - b.index);
  }, shallow);

  return cards;
};
