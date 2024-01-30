import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";
import { LogoutButton } from "../buttons/LogoutButton/LogoutButton";
import { LoginButton } from "../buttons/LoginButton/LoginButton";

export const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-gray-200 p-4 px-8">
      <div className="flex justify-between items-center">
        <a href="">Trello</a>
        <div>
          {session && (
            <>
              hello {session.user?.name}
              <LogoutButton />
            </>
          )}

          {!session && (
            <div className="flex items-center gap-5">
              not logged in
              <LoginButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
