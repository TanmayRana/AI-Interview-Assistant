/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// "use client";

// /* eslint-disable @typescript-eslint/no-unused-expressions */
// import { useUser } from "@/app/Provider";
// import { Button } from "@/components/ui/button";
// import { supabase } from "@/services/supabaseClient";
// import { Video } from "lucide-react";
// import React, { useEffect, useState } from "react";

// const ScheduleInterview = () => {
//   const { user } = useUser();

//   const [interviewList, setInterviewList] = useState();

//   useEffect(() => {
//     user && GetInterviewList();
//   }, [user]);

//   const GetInterviewList = async () => {
//     let { data: Interviews, error } = await supabase
//       .from("Interviews")
//       .select(
//         "jobPosition,jobDescription,interview_id,interview-feedback(userEmail)"
//       )
//       .eq("userEmail", user.email)
//       .order("id", { ascending: false });

//     console.log(Interviews);
//     setInterviewList(Interviews);
//   };

//   return (
//     <div>
//       <h2 className="fomder-bold text-3xl">Interview List with CEC</h2>

//       {loading ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
//           {[...Array(6)].map((_, index) => (
//             <div
//               key={index}
//               className="h-56 w-full max-w-sm bg-muted animate-pulse rounded-xl"
//             />
//           ))}
//         </div>
//       ) : interviewList.length === 0 ? (
//         <div className="mt-6 flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-8 rounded-lg">
//           <Video className="h-10 w-10 text-primary mb-4" />
//           <h2 className="text-lg font-medium mb-2">
//             You have not created any interviews yet.
//           </h2>
//           <Button variant="default">+ Create New Interview</Button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
//           {interviewList.map((interview, index) => (
//             <InterviewCard key={index} interview={interview} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ScheduleInterview;

"use client";

/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useUser } from "@/app/Provider";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import { Video } from "lucide-react";
import React, { useEffect, useState } from "react";
import InterviewCard from "../dashboard/_components/InterviewCard";

type Interview = {
  jobPosition: any;
  jobDescription: any;
  interview_id: any;
  interview_feedback: { userEmail: any }[];
  duration: any;
};

const ScheduleInterview = () => {
  const { user }: any = useUser();
  const [interviewList, setInterviewList] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (user) {
      GetInterviewList();
    }
  }, [user]);

  const GetInterviewList = async () => {
    try {
      setLoading(true);
      let { data: Interviews, error } = await supabase
        .from("Interviews")
        .select(
          "jobPosition, jobDescription, interview_id, interview_feedback(userEmail), duration"
        )
        .eq("userEmail", user.email)
        .order("id", { ascending: false });

      console.log(Interviews);
      setInterviewList(Interviews || []);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching interviews:", error.message);
      } else {
        console.error("Error fetching interviews:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-3xl">Interview List with CEC</h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-56 w-full max-w-sm bg-gray-200 animate-pulse rounded-xl"
            />
          ))}
        </div>
      ) : interviewList.length === 0 ? (
        <div className="mt-6 flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-8 rounded-lg">
          <Video className="h-10 w-10 text-primary mb-4" />
          <h2 className="text-lg font-medium mb-2">
            You have not created any interviews yet.
          </h2>
          <Button variant="default">+ Create New Interview</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
          {interviewList.map((interview, index) => (
            <InterviewCard
              key={index}
              interview={interview}
              viedDetail={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ScheduleInterview;
