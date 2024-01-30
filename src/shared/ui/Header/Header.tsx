import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";

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
              <button
                onClick={() => signOut()}
                className="bg-gray-300 py-2 px-4 ml-2"
              >
                logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
