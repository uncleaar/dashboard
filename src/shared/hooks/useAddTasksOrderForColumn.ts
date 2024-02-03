import { useMutation } from "@/config/liveblocks.config";
import { useUpdateCard } from ".";
import { CardI } from "@/types/card";

export const useAddTasksOrderForColumn = () => {
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

  return { addTasksOrderForColumn };
};
