"use server";
import { liveblocksClient } from "@/lib/blocks";
import { getUserEmail } from "@/lib/getUserEmail";
import { Board } from "@/shared/ui";
import { useParams } from "next/navigation";

interface PageProps {
  params: {
    boardId: string;
  };
}

export default async function BoardPage(props: PageProps) {
  const boardId = props.params.boardId;
  const email = await getUserEmail();
  const boardInfo = await liveblocksClient.getRoom(boardId);

  return (
    <div>
      Board page: {boardInfo.metadata.boardName}
      <div>email: {email}</div>
      <Board />
    </div>
  );
}
