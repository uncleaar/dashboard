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
  const userEmail = await getUserEmail();
  const boardInfo = await liveblocksClient.getRoom(boardId);

  const userAccess = boardInfo.usersAccesses?.[userEmail];

  const hasAccess = userAccess && [...userAccess].includes("room:write");

  if (!hasAccess) {
    return <div> Access denied</div>;
  }

  return (
    <div>
      Board page: {boardInfo.metadata.boardName}
      <div>email{userEmail}</div>
      <Board id={boardId} />
    </div>
  );
}
