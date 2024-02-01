import React, { FC } from "react";
import { NewColumForm } from "../Forms/NewColumnForm/NewColumnForm";
import { Column } from "../Column/Column";
import { useStorage } from "@/config/liveblocks.config";

interface ColumnsProps {}

export const Columns: FC<ColumnsProps> = () => {
  const columns = useStorage((storage) => storage.columns);

  if (!columns) {
    return;
  }

  return (
    <div className="flex gap-4">
      {columns &&
        columns.map((column) => (
          <Column key={column.id} {...column} cards={[]} />
        ))}
      <NewColumForm />
    </div>
  );
};
