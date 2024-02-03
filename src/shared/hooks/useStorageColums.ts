import { useStorage } from "@/config/liveblocks.config";
import { shallow } from "@liveblocks/client";

export const useStorageColums = () => {
  const columns = useStorage(
    (storage) => storage.columns.map((card) => ({ ...card })),
    shallow,
  );

  return { columns };
};
