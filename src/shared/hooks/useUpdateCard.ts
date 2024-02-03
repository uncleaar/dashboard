import { useMutation } from "@/config/liveblocks.config";
import { CardI } from "@/types/card";

export const useUpdateCard = () => {
  const updateCard = useMutation(({ storage }, index, updateData) => {
    const card = storage.get("cards").get(index);

    if (card) {
      Object.keys(updateData).forEach((key) => {
        card.set(key as keyof CardI, updateData[key]);
      });
    }
  }, []);

  return { updateCard };
};
