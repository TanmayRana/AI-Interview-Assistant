/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useUser } from "@/app/Provider";
import Image from "next/image";
import React from "react";

const WelcomeContainer = () => {
  const { user }: any = useUser();
  //   console.log("user=", user);

  return (
    <div className="bg-white p-5 rounded-xl shadow border flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">Welcome {user?.name}</h2>
        <h2 className=""></h2>
      </div>
      {user && (
        <Image
          src={user?.picture}
          alt="user"
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
    </div>
  );
};

export default WelcomeContainer;
