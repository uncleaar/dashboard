import Image from "next/image";
import { Board } from "@/shared/ui";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { LoginView } from "@/shared/ui/Views/LoginView/LoginView";

export default async function Home() {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   return <LoginView />;
  // }

  return (
    <div>
      <Board />
    </div>
  );
}
