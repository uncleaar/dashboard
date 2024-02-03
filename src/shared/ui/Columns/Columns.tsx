"use client";
import React, { FC } from "react";
import { NewColumForm } from "../Forms/NewColumnForm/NewColumnForm";
import { Column } from "../Column/Column";
import { useMutation, useStorage } from "@/config/liveblocks.config";
import { ReactSortable } from "react-sortablejs";
import { ColumnI } from "@/types/column";
import { LiveList, LiveObject, shallow } from "@liveblocks/client";
import { useStorageColums, useUpdateColumns } from "@/shared/hooks";

export default function Columns() {
  const { columns } = useStorageColums();

  const { updateColumns } = useUpdateColumns();

  const setColumnsOrder = (columns: ColumnI[]) => {
    const newColumns: LiveObject<ColumnI>[] = [];

    columns.forEach((column, index) => {
      const newSortedColumn = { ...column };
      newSortedColumn.index = index;
      newColumns.push(new LiveObject(newSortedColumn));
    });

    updateColumns(newColumns);
  };

  if (!columns) {
    return;
  }

  return (
    <div className="flex gap-4">
      <ReactSortable
        list={columns}
        ghostClass="opacity-40"
        className="flex gap-4"
        setList={setColumnsOrder}
        group="board-column"
      >
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </ReactSortable>
      <NewColumForm />
    </div>
  );
}
