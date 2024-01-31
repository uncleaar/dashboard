import Image from "next/image";
import { Board } from "@/shared/ui";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { LoginView } from "@/shared/ui/Views/LoginView/LoginView";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center gap-2">
      <div className="text-3xl">Your boards</div>

      <div className="m-3">
        <Link
          href="/new-board"
          className="btn primary p-2 rounded-lg text-yellow-50 flex items-center gap-2"
        >
          Create new board <FaArrowRight className="h-4" />
        </Link>
      </div>
    </div>
  );
}
