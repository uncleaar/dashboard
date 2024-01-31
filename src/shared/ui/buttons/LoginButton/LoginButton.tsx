"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { IoIosLogIn } from "react-icons/io";

export const LoginButton = () => {
  return (
    <button
      type="button"
      className="text-black rounded-sm bg-gray-300 flex items-center gap-2 hover:bg-gray-400 hover:transition-all duration-300"
      onClick={() => signIn("google")}
    >
      login <IoIosLogIn />
    </button>
  );
};
