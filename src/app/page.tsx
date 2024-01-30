import Image from "next/image";
import { Board } from "@/shared/ui";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { LoginView } from "@/shared/ui/Views/LoginView/LoginView";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div>your boards</div>

      <ul>
        <li>
          <Board />
        </li>
      </ul>
    </div>
  );
}
