"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { IoIosLogIn } from "react-icons/io";

export const LoginButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="text-black rounded-sm bg-gray-300 flex items-center gap-2 hover:bg-gray-400 hover:transition-all duration-300"
        onClick={() => signIn("google", { callbackUrl })}
      >
        login google
        <IoIosLogIn />
      </button>

      <button
        type="button"
        className="text-black rounded-sm bg-gray-300 flex items-center gap-2 hover:bg-gray-400 hover:transition-all duration-300"
        onClick={() => signIn("github", { callbackUrl })}
      >
        login github <IoIosLogIn />
      </button>
    </div>
  );
};
