"use client";

import { redirect } from "next/navigation";
import { createBoard } from "../actions/board-actions";

export default function NewBoardPage() {
  const handleNewBoard = async (formData: FormData) => {
    const boardName = formData.get("name")?.toString() || "";

    const { id } = await createBoard(boardName);

    redirect(`/boards/${id}`);
  };
  return (
    <div>
      <form className="max-w-xs block" action={handleNewBoard}>
        <h2 className="text-2xl mb-4">Create new board</h2>
        <input type="text" placeholder="board name" name="name" />
        <button type="submit" className="rounded-lg w-full">
          Create board
        </button>
      </form>
    </div>
  );
}
