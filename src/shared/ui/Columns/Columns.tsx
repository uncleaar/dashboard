import React, { FC } from "react";
import { NewColumForm } from "../Forms/NewColumnForm/NewColumnForm";
import { Column } from "../Column/Column";
import { useStorage } from "@/config/liveblocks.config";

interface ColumnsProps {
  setCards: () => void;
}

export const Columns: FC<ColumnsProps> = ({ setCards }) => {
  const columns = useStorage((storage) => storage.columns);
  console.log(columns, "cpolm");

  return (
    <div className="flex gap-4">
      {columns &&
        columns.map((column) => (
          <Column key={column.id} {...column} setCards={() => {}} cards={[]} />
        ))}
      <NewColumForm />
    </div>
  );
};
