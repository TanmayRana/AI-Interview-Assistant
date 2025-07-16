/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
// "use client";
// import { Button } from "@/components/ui/button";
// import { Video } from "lucide-react";
// import React, { useState } from "react";
// import { supabase } from "@/services/supabaseClient";

// const LatestInterviewsList = () => {
//   const [interviewList, setinterviewList] = useState([]);

//   const GetInterviewList = async () => {
//     let { data: interview-feedback, error } = await supabase
//   .from('interview-feedback')
//   .select('*')
//   }

//   return (
//     <div className="my-5">
//       <h2 className="font-bold text-2xl">Previously created Interviews</h2>
//       {interviewList.length === 0 && (
//         <div className="p-5 flex flex-col gap-5 items-center justify-center">
//           <Video className="h-10 w-10 text-primary" />
//           <h2 className="">You have not created any interview yet</h2>
//           <Button>+ Create New Interview</Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LatestInterviewsList;

// "use client";

// import { Button } from "@/components/ui/button";
// import { Video } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { supabase } from "@/services/supabaseClient";
// import { useUser } from "@/app/Provider";

// const LatestInterviewsList = () => {
//   const [interviewList, setInterviewList] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const { user } = useUser();

//   const getInterviewList = async () => {
//     let { data: Interviews, error } = await supabase
//       .from("Interviews")
//       .select("*")
//       .eq("userEmail", user?.email);

//     if (error) {
//       console.error("Error fetching interviews:", error.message);
//     } else {
//       setInterviewList(Interviews || []);
//     }

//     setLoading(false);
//   };

//   useEffect(() => {
//     user && getInterviewList();
//   }, []);

//   console.log("interviewList", interviewList);

//   return (
//     <div className="my-5">
//       <h2 className="font-bold text-2xl">Previously Created Interviews</h2>

//       {loading ? (
//         <p className="mt-4 text-sm text-gray-500">Loading...</p>
//       ) : interviewList.length === 0 ? (
//         <div className="p-5 flex flex-col gap-5 items-center justify-center">
//           <Video className="h-10 w-10 text-primary" />
//           <h2>You have not created any interviews yet.</h2>
//           <Button>+ Create New Interview</Button>
//         </div>
//       ) : (
//         <div className="mt-4 space-y-3">
//           {interviewList.map((interview, idx) => (
//             <div
//               key={interview.id || idx}
//               className="p-4 rounded-lg bg-gray-100 border shadow-sm"
//             >
//               <p className="font-medium">Interview ID: {interview.id}</p>
//               <p className="text-sm text-gray-600">
//                 Created at: {new Date(interview.created_at).toLocaleString()}
//               </p>
//               {/* You can add more fields here */}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LatestInterviewsList;

"use client";

import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import React, { useEffect, useState } from "react";
import { supabase } from "@/services/supabaseClient";
import { useUser } from "@/app/Provider";
import InterviewCard from "./InterviewCard";

const LatestInterviewsList = () => {
  const [interviewList, setInterviewList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user }: any = useUser();

  console.log("user in LatestInterviewsList", user);

  // console.log("user", user);

  useEffect(() => {
    user && getInterviewList();
  }, [user]);

  const getInterviewList = async () => {
    setLoading(true);
    const { data: Interviews, error } = await supabase
      .from("Interviews")
      .select("*")
      .eq("userEmail", user?.email)
      .order("id", { ascending: false })
      .limit(6);

    // console.log("Interviews", Interviews);

    if (error) {
      console.error("Error fetching interviews:", error.message);
    } else {
      setInterviewList(Interviews);
    }

    setLoading(false);
  };

  console.log("interviewList", interviewList);

  return (
    <div className="my-6">
      <h2 className="font-bold text-2xl">Previously Created Interviews</h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-56 w-full max-w-sm bg-muted animate-pulse rounded-xl"
            />
          ))}
        </div>
      ) : interviewList.length === 0 ? (
        <div className="p-6 flex flex-col gap-5 items-center justify-center bg-gray-50 border rounded-lg mt-6">
          <Video className="h-10 w-10 text-primary" />
          <h2 className="text-center font-medium">
            You have not created any interviews yet.
          </h2>
          <Button>+ Create New Interview</Button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-4">
          {interviewList.map((interview, index) => (
            <InterviewCard key={index} interview={interview} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestInterviewsList;
