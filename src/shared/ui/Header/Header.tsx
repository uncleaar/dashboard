import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { LogoutButton } from "../buttons/LogoutButton/LogoutButton";
import { LoginButton } from "../buttons/LoginButton/LoginButton";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-gray-200 p-4 px-8">
      <div className="flex justify-between items-center">
        <Link href="/" className="logo">
          Trello
        </Link>
        <div>
          {session && (
            <div className="flex items-center gap-5">
              Hello, {session?.user?.name}
              <LogoutButton />
            </div>
          )}
          {!session && (
            <div className="flex items-center gap-5">
              Not logged in
              <LoginButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
