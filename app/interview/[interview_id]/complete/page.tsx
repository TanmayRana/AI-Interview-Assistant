"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const InterviewComplete = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center">
      <div className="mt-5 flex flex-col items-center justify-center mb-3">
        <div className="">
          <Image src={"/check.jpg"} alt="check" width={100} height={100} />
        </div>
        <h2 className="text-2xl font-bold text-center">
          Interview Completed Successfully
        </h2>
        <p className="my-2 text-center text-gray-400 text-sm font-medium">
          Thank you for participating in our interview in the AI-Powered
          Interview Platform.
        </p>
        <div className="  rounded-xl  flex  items-center justify-center flex-col gap-4 p-4 relative">
          <Image
            src={"/interviewing.jpg"}
            alt="AI Recruiter"
            width={400}
            height={400}
            className="rounded-full object-cover"
          />
        </div>

        <Button
          onClick={() => router.push("/dashboard")}
          className="w-full max-w-xs mx-auto font-semibold"
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default InterviewComplete;
