import { Phone, Video } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateOptions = () => {
  return (
    <div className="grid grid-cols-2 gap-5 ">
      <Link
        href="/dashboard/create-interview"
        className="bg-white shadow border border-gray-200 rounded-lg p-5 cursor-pointer"
      >
        <Video className="p-3 text-primary bg-blue-50 rounded-lg h-12 w-12" />
        <h2 className="font-bold">Create New Interview</h2>
        <p className="text-gray-500">
          Create AI Interview and schedule then with Candidates
        </p>
      </Link>
      <div className="bg-white shadow border border-gray-200 rounded-lg p-5">
        <Phone className="p-3 text-primary bg-blue-50 rounded-lg h-12 w-12" />
        <h2 className="font-bold">Create Phone Screening Call</h2>
        <p className="text-gray-500">
          Schedule phone screening call with Candidates
        </p>
      </div>
    </div>
  );
};

export default CreateOptions;
