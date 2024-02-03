import { useMutation } from "@/config/liveblocks.config";
import { LiveList } from "@liveblocks/client";

export const useUpdateColumns = () => {
  const updateColumns = useMutation(({ storage }, columns) => {
    storage.set("columns", new LiveList(columns));
  }, []);

  return { updateColumns };
};
