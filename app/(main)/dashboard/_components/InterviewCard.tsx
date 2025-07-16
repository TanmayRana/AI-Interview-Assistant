/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import moment from "moment";
// import { Button } from "@/components/ui/button";
// import { Copy, Send } from "lucide-react";

// const InterviewCard = ({ interview }) => {
//   return (
//     <div className="p-5 rounded-lg bg-gray-100 border shadow-sm">
//       <div className="flex items-center justify-between">
//         <div className="h-[40px] w-[40px] rounded-full bg-gray-500 text-white flex justify-center items-center"></div>
//         <h2 className="text-sm font-medium">
//           {moment(interview.created_at).format("DD MMM YYYY")}
//         </h2>
//       </div>
//       <h2 className="mt-3 font-bold text-lg">{interview?.jobPosition}</h2>
//       <h2 className="mt-2 ">{interview?.duration}</h2>

//       <div className="flex gap-3 w-full">
//         <Button variant={"outline"} className=" w-full">
//           <Copy /> Copy Link
//         </Button>
//         <Button className="bg-blue-500 text-white w-full">
//           <Send /> Send
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default InterviewCard;

import React from "react";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, Send } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const InterviewCard = ({ interview, viedDetail = false }: any) => {
  const formattedDate = moment(interview.created_at).format("DD MMM YYYY");
  const jobPosition = interview?.jobPosition || "Untitled Position";
  const duration = interview?.duration || "Not specified";
  const router = useRouter();

  const url = `${process.env.NEXT_PUBLIC_HOST_URL}/${interview.interview_id}`;
  const copylink = () => {
    navigator.clipboard.writeText(url);
    toast("Link copied to clipboard");
  };

  const onSend = () => {
    window.location.href = `mailto:tanmay602@gmail.com?subject=Interview Link&body=Please find the interview link attached.${url}`;
    toast("Email sent successfully");
  };

  // console.log("interview", interview);

  return (
    <div className="p-6 rounded-xl bg-white border shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-4">
        {/* Placeholder avatar or initials */}
        <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
          {jobPosition.charAt(0).toUpperCase()}
        </div>
        <span className="text-sm text-gray-500">{formattedDate}</span>
      </div>

      <h2 className="font-semibold text-lg text-gray-800">{jobPosition}</h2>
      <h2 className="text-sm text-gray-600 mt-1 flex justify-between items-center">
        Duration: {duration}
        <span className="text-green-700">
          {interview["interview_feedback"]?.length} Candidates
        </span>
      </h2>

      {!viedDetail ? (
        <div className="flex gap-3 mt-5">
          <Button
            variant="outline"
            className="flex-1 flex items-center justify-center gap-x-2 cursor-pointer"
            onClick={() => copylink()}
          >
            <Copy size={16} /> Copy Link
          </Button>
          <Button
            className="flex-1 flex items-center justify-center gap-x-2 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
            onClick={() => onSend()}
          >
            <Send size={16} /> Send
          </Button>
        </div>
      ) : (
        <Button
          className="mt-5 w-full cursor-pointer"
          variant={"outline"}
          onClick={() =>
            router.push(
              `/schedule-interview/${interview?.interview_id}/details`
            )
          }
        >
          View Detail <ArrowRight />
        </Button>
      )}
    </div>
  );
};

export default InterviewCard;
