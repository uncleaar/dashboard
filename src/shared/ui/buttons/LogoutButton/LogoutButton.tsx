import { signOut } from "next-auth/react";
import React from "react";
import { IoIosLogOut } from "react-icons/io";

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="text-black rounded-sm bg-gray-300 flex items-center gap-2 hover:bg-gray-400 hover:transition-all duration-300"
    >
      logout <IoIosLogOut />
    </button>
  );
};
