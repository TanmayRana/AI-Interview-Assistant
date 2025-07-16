/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// /* eslint-disable @typescript-eslint/no-unused-expressions */
// import { useUser } from "@/app/Provider";
// import { Button } from "@/components/ui/button";
// import { supabase } from "@/services/supabaseClient";
// import { Video } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import InterviewCard from "../dashboard/_components/InterviewCard";

// const Allinterview = () => {
//   const [interviewList, setInterviewList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { user } = useUser();

//   // console.log("user", user);

//   useEffect(() => {
//     user && getInterviewList();
//   }, [user]);

//   const getInterviewList = async () => {
//     setLoading(true);
//     const { data: Interviews, error } = await supabase
//       .from("Interviews")
//       .select("*")
//       .eq("userEmail", user?.email)
//       .order("id", { ascending: false });

//     // console.log("Interviews", Interviews);

//     if (error) {
//       console.error("Error fetching interviews:", error.message);
//     } else {
//       setInterviewList(Interviews);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="my-6">
//       <h2 className="font-bold text-2xl">All Previously Created Interviews</h2>

//       {loading ? (
//         <p className="mt-4 text-sm text-gray-500">[1,2,3,4,5,6].map((index) => (

// <div role="status" className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">

//     <span className="sr-only">Loading...</span>
// </div>

//         )
//       ) : interviewList.length === 0 ? (
//         <div className="p-6 flex flex-col gap-5 items-center justify-center bg-gray-50 border rounded-lg mt-6">
//           <Video className="h-10 w-10 text-primary" />
//           <h2 className="text-center font-medium">
//             You have not created any interviews yet.
//           </h2>
//           <Button>+ Create New Interview</Button>
//         </div>
//       ) : (
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-4">
//           {interviewList.map((interview, index) => (
//             <InterviewCard key={index} interview={interview} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Allinterview;

// "use client";

// /* eslint-disable @typescript-eslint/no-unused-expressions */
// import { useUser } from "@/app/Provider";
// import { Button } from "@/components/ui/button";
// import { supabase } from "@/services/supabaseClient";
// import { Video } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import InterviewCard from "../dashboard/_components/InterviewCard";

// const Allinterview = () => {
//   const [interviewList, setInterviewList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { user } = useUser();

//   useEffect(() => {
//     if (user) {
//       getInterviewList();
//     }
//   }, [user]);

//   const getInterviewList = async () => {
//     setLoading(true);
//     try {
//       const { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select("*")
//         .eq("userEmail", user?.email)
//         .order("id", { ascending: false });

//       if (error) {
//         throw error;
//       }

//       setInterviewList(Interviews || []);
//     } catch (error) {
//       console.error("Error fetching interviews:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="my-6">
//       <h2 className="font-bold text-2xl">All Previously Created Interviews</h2>

//       {loading ? (
//         [1, 2, 3, 4, 5, 6].map((index) => (
//           <div
//             className="mt-6 flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
//             key={index}
//           >
//             <span className="sr-only">Loading...</span>
//           </div>
//         ))
//       ) : interviewList.length === 0 ? (
//         <div className="p-6 flex flex-col gap-5 items-center justify-center bg-gray-50 border rounded-lg mt-6">
//           <Video className="h-10 w-10 text-primary" />
//           <h2 className="text-center font-medium">
//             You have not created any interviews yet.
//           </h2>
//           <Button>+ Create New Interview</Button>
//         </div>
//       ) : (
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
//           {interviewList.map((interview, index) => (
//             <InterviewCard key={index} interview={interview} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Allinterview;

"use client";

import { useUser } from "@/app/Provider";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import { Video } from "lucide-react";
import React, { useEffect, useState } from "react";
import InterviewCard from "../dashboard/_components/InterviewCard";

const AllInterview = () => {
  const [interviewList, setInterviewList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user }: any = useUser();

  useEffect(() => {
    if (user) {
      fetchInterviews();
    }
  }, [user]);

  const fetchInterviews = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("Interviews")
        .select("*")
        .eq("userEmail", user?.email)
        .order("id", { ascending: false });

      if (error) throw error;

      setInterviewList(data || []);
    } catch (error: any) {
      console.error("Error fetching interviews:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">
        All Previously Created Interviews
      </h2>

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
            <InterviewCard key={index} interview={interview} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllInterview;
