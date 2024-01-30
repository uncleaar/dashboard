import { signOut } from "next-auth/react";
import React from "react";

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="text-black rounded-sm bg-gray-300"
    >
      logout
    </button>
  );
};
