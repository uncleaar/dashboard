"use client";
import { signIn } from "next-auth/react";
import React from "react";

export const LoginButton = () => {
  return (
    <button
      type="button"
      className="text-black rounded-sm bg-gray-300"
      onClick={() => signIn("google")}
    >
      login
    </button>
  );
};
