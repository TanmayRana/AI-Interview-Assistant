"use client";
import Image from "next/image";
import React from "react";
// import { Button } from "@/components/ui/button";
import { Button } from "../../components/ui/button";
import { supabase } from "../../services/supabaseClient";

const Login = () => {
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.log("error=", error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center border rounded-2xl p-8">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={100}
          height={100}
          //   className="w-[180px]"
        />
        <div className="flex items-center flex-col ">
          <Image
            src={"/login.jpg"}
            alt="login"
            width={600}
            height={400}
            className="w-[500px] h-[300px] rounded-2xl"
          />
          <h2 className="text-2xl font-bold text-center">
            Welcome to Interview Platform
          </h2>
          <p className="text-gray-500 text-center">
            Sign In With Google Authentication
          </p>
          <Button
            className="mt-2 w-full"
            variant={undefined}
            size={undefined}
            onClick={signInWithGoogle}
          >
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
