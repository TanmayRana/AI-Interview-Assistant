/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-expressions */
// "use client";

// import React, { useEffect, useState } from "react";

// import Image from "next/image";
// import { Clock, Info, Video } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useParams } from "next/navigation";
// import { supabase } from "@/services/supabaseClient";
// import { toast } from "sonner";

// const Interview = () => {
//   const { interview_id } = useParams();
//   const [interviewValue, setInterviewValue] = useState();

//   const [userName, setUserName] = useState();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     interview_id && GetInterviewDetails();
//   }, [interview_id]);

//   const GetInterviewDetails = async () => {
//     setLoading(true);
//     try {
//       let { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select("jobPosition, jobDescription,duration, type")
//         .eq("interview_id", interview_id);

//       // console.log("data", Interviews[0]);
//       setInterviewValue(Interviews[0]);
//       setLoading(false);

//       if (Interviews?.length === 0) {
//         toast("Invalid Interview Link");
//         return;
//       }
//     } catch (error) {
//       toast("Invalid Interview Link");
//       setLoading(false);
//     }
//   };
//   return (
//     <div
//       className="px-10 md:px-28 lg:px-48 xl:px-64 mt-26
//      "
//     >
//       <div className="flex flex-col items-center justify-center border rounded-lg bg-white p-7 lg:px-32 xl:px-52 mb-20">
//         <Image
//           src={"/logo.svg"}
//           alt="logo"
//           width={100}
//           height={50}
//           // className="w-[140px]"
//         />
//         <h2 className="mt-3">AI-Powered Interview Platform</h2>
//         <Image
//           src={"/interview_pic.jpg"}
//           alt="interview"
//           width={500}
//           height={500}
//           className="w-[280px] my-6"
//         />

//         <h2 className="font-bold text-xl ">{interviewValue?.jobPosition}</h2>
//         <h2
//           className="flex gap-2 items-center text-gray-500 mt-3
//         "
//         >
//           <Clock className="h-4 w-4" />
//           {interviewValue?.duration}
//         </h2>
//         <div className="w-full ">
//           <h2 className="">Enter your full name</h2>
//           <Input
//             placeholder="John Doe"
//             onChange={(e) => setUserName(e.target.value)}
//           />
//         </div>

//         <div className="p-3 bg-blue-100 gap-4 rounded-md mt-3">
//           <div className="flex gap-2 items-center">
//             <Info className="text-blue-500" />
//             <h2 className="font-bold">Before you begin</h2>
//           </div>
//           <div className="mt-2 pl-6">
//             <ul>
//               <li className="text-sm text-blue-500">
//                 - Ensure you have a stable internet connection
//               </li>
//               <li className="text-sm text-blue-500">
//                 - Test your camera and microphone{" "}
//               </li>
//               <li className="text-sm text-blue-500">
//                 - Find a quiet place for the interview
//               </li>
//             </ul>
//           </div>
//         </div>
//         <Button
//           className="mt-5 w-full font-bold bg-blue-500 text-white hover:bg-blue-600"
//           disabled={loading || !userName}
//         >
//           <Video />
//           Join Interview
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Interview;

// http://localhost:3000/interview/c300bcc5-0208-44e6-a066-7489c84b6057

"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Clock, Info, Loader2Icon, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/services/supabaseClient";
import { toast } from "sonner";
import { InterviewDataContext } from "@/context/InterviewDataContext";

// Define type for interview data
type InterviewType = {
  jobPosition: string;
  jobDescription: string;
  duration: string;
  type: string;
};

const Interview = () => {
  const { interview_id } = useParams();
  const [interviewValue, setInterviewValue] = useState<InterviewType | null>(
    null
  );
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { interviewInfo, setInterviewInfo }: any =
    useContext(InterviewDataContext);

  const router = useRouter();

  useEffect(() => {
    if (interview_id) {
      getInterviewDetails();
    }
  }, [interview_id]);

  const getInterviewDetails = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("Interviews")
        .select("jobPosition, jobDescription, duration, type")
        .eq("interview_id", interview_id)
        .maybeSingle(); // Expecting only one result

      if (error || !data) {
        toast("Invalid Interview Link");
        return;
      }

      setInterviewValue(data);
    } catch (err) {
      console.error("Error fetching interview:", err);
      toast("Failed to fetch interview details");
    } finally {
      setLoading(false);
    }
  };

  const onJoinInterview = async () => {
    setLoading(true);
    let { data: Interviews, error } = await supabase
      .from("Interviews")
      .select("*")
      .eq("interview_id", interview_id);
    // console.log("interview==", Interviews[0]);
    setInterviewInfo({
      userName: userName,
      userEmail: userEmail,
      interviewData: Interviews?.[0] || null,
    });
    router.push(`/interview/${interview_id}/start`);
    setLoading(false);
  };
  // console.log("intrviewInfo", interviewInfo);

  return (
    <div className="px-10 md:px-28 lg:px-48 xl:px-64 mt-26">
      <div className="flex flex-col items-center justify-center border rounded-lg bg-white p-7 lg:px-32 xl:px-52 mb-20">
        <Image src={"/logo.svg"} alt="logo" width={100} height={50} />
        <h2 className="mt-3">AI-Powered Interview Platform</h2>
        <Image
          src={"/interview_pic.jpg"}
          alt="interview"
          width={500}
          height={500}
          className="w-[280px] my-6"
        />

        <h2 className="font-bold text-xl">{interviewValue?.jobPosition}</h2>
        <h2 className="flex gap-2 items-center text-gray-500 mt-3">
          <Clock className="h-4 w-4" />
          {interviewValue?.duration}
        </h2>

        <div className="w-full mt-3">
          <h2 className="">Full name</h2>
          <Input
            placeholder="John Doe"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="w-full mt-3">
          <h2 className="">Email</h2>
          <Input
            placeholder="johndoe@gmail.com"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>

        <div className="p-3 bg-blue-100 gap-4 rounded-md mt-3">
          <div className="flex gap-2 items-center">
            <Info className="text-blue-500" />
            <h2 className="font-bold">Before you begin</h2>
          </div>
          <div className="mt-2 pl-6">
            <ul>
              <li className="text-sm text-blue-500">
                - Ensure you have a stable internet connection
              </li>
              <li className="text-sm text-blue-500">
                - Test your camera and microphone
              </li>
              <li className="text-sm text-blue-500">
                - Find a quiet place for the interview
              </li>
            </ul>
          </div>
        </div>

        <Button
          className="mt-5 w-full font-bold bg-blue-500 text-white hover:bg-blue-600"
          disabled={loading || !userName}
          onClick={onJoinInterview}
        >
          <Video />
          {loading && <Loader2Icon className="animate-spin" />}
          Join Interview
        </Button>
      </div>
    </div>
  );
};

export default Interview;
