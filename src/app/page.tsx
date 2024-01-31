import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { LoginView } from "@/shared/ui/Views/LoginView/LoginView";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Boards from "@/shared/ui/Boards/Boards";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) return <LoginView />;

  return (
    <div className="flex gap-2 flex-col max-w-xs">
      <div className="text-3xl">Your boards</div>

      <Boards />

      <div className="">
        <Link
          href="/new-board"
          className="btn primary p-2 rounded-lg text-yellow-50 flex items-center gap-2 w-44"
        >
          Create new board <FaArrowRight className="h-4" />
        </Link>
      </div>
    </div>
  );
}
