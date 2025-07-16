/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-expressions */
// "use client";

// import { useUser } from "@/app/Provider";
// import { supabase } from "@/services/supabaseClient";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import InterviewDetailContainer from "./_components/InterviewDetailContainer";
// import CandidatList from "./_components/CandidatList";

// // Type for individual feedback
// type InterviewFeedback = {
//   userEmail: string;
//   userName: string;
//   feedback: string;
//   created_at: string;
// };

// // Type for a single interview
// type Interview = {
//   jobPosition: string;
//   jobDescription: string;
//   interview_id: string;
//   duration: number;
//   type: string;
//   questionList: string[]; // or use `any[]` if needed
//   created_at: string;
//   interview_feedback: InterviewFeedback[];
// };

// const InterviewDetail = () => {
//   const params = useParams();
//   const interview_id =
//     typeof params?.interview_id === "string" ? params.interview_id : "";

//   const { user } = useUser();
//   const [interviewDetail, setInterviewDetail] = useState<Interview | null>(
//     null
//   );
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     user && GetInterviewDetail();
//   }, [user]);

//   const GetInterviewDetail = async () => {
//     try {
//       setLoading(true);
//       const { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select(
//           "jobPosition, jobDescription, interview_id, duration, type, questionList, created_at, interview_feedback(userEmail, userName, feedback, created_at)"
//         )
//         .eq("userEmail", user.email)
//         .eq("interview_id", interview_id);

//       if (error) {
//         throw error;
//       }
//       console.log("Interviews in GetInterviewDetail", Interviews);

//       if (Interviews && Interviews.length > 0) {
//         setInterviewDetail(Interviews[0]);
//       } else {
//         setInterviewDetail(null);
//       }
//     } catch (error: any) {
//       console.error("Error fetching interview:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   console.log("interviewDetail", interviewDetail);

//   return (
//     <div>
//       <h2 className="font-bold text-2xl mb-4">Interview Details</h2>
//       <InterviewDetailContainer interviewDetail={interviewDetail} />
//       <CandidatList detail={interviewDetail["interview_feedback"][0]} />
//     </div>
//   );
// };

// export default InterviewDetail;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
// "use client";

// import { useUser } from "@/app/Provider";
// import { supabase } from "@/services/supabaseClient";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import InterviewDetailContainer from "./_components/InterviewDetailContainer";
// import CandidatList from "./_components/CandidatList";

// // Type for individual feedback
// type InterviewFeedback = {
//   userEmail: string;
//   userName: string;
//   feedback: string;
//   created_at: string;
// };

// // Type for a single interview
// type Interview = {
//   jobPosition: string;
//   jobDescription: string;
//   interview_id: string;
//   duration: number;
//   type: string;
//   questionList: string[]; // Array of interview questions (strings)
//   created_at: string;
//   interview_feedback: InterviewFeedback[]; // Array of interview feedback objects
// };

// // Type for the props of the CandidatList component (feedback data)
// type CandidatListProps = {
//   detail: InterviewFeedback | null;
// };

// const InterviewDetail = () => {
//   const params = useParams();
//   const interview_id =
//     typeof params?.interview_id === "string" ? params.interview_id : "";

//   const { user } = useUser();
//   const [interviewDetail, setInterviewDetail] = useState<Interview | null>(
//     null
//   );
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (user) {
//       GetInterviewDetail();
//     }
//   }, [user]);

//   const GetInterviewDetail = async () => {
//     try {
//       setLoading(true);
//       const { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select(
//           "jobPosition, jobDescription, interview_id, duration, type, questionList, created_at, interview_feedback(userEmail, userName, feedback, created_at)"
//         )
//         .eq("userEmail", user.email)
//         .eq("interview_id", interview_id);

//       if (error) {
//         throw error;
//       }
//       console.log("Interviews in GetInterviewDetail", Interviews);

//       if (Interviews && Interviews.length > 0) {
//         setInterviewDetail(Interviews[0]);
//       } else {
//         setInterviewDetail(null);
//       }
//     } catch (error: any) {
//       console.error("Error fetching interview:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   console.log("interviewDetail", interviewDetail);

//   return (
//     <div>
//       <h2 className="font-bold text-2xl mb-4">Interview Details</h2>
//       <InterviewDetailContainer interviewDetail={interviewDetail} />
//       {interviewDetail?.interview_feedback?.length > 0 && (
//         <CandidatList detail={interviewDetail.interview_feedback[0]} />
//       )}
//     </div>
//   );
// };

// export default InterviewDetail;

// import { useUser } from "@/app/Provider";
// import { supabase } from "@/services/supabaseClient";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import InterviewDetailContainer from "./_components/InterviewDetailContainer";
// import CandidatList from "./_components/CandidatList";
// import { Interview } from "@/lib/type";
// // import { Interview } from "@/types"; // Import the Interview type

// const InterviewDetail = () => {
//   const params = useParams();
//   const interview_id =
//     typeof params?.interview_id === "string" ? params.interview_id : "";

//   const { user } = useUser();
//   const [interviewDetail, setInterviewDetail] = useState<Interview | null>(
//     null
//   );
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (user) {
//       GetInterviewDetail();
//     }
//   }, [user]);

//   const GetInterviewDetail = async () => {
//     try {
//       setLoading(true);
//       const { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select(
//           "jobPosition, jobDescription, interview_id, duration, type, questionList, created_at, interview_feedback(userEmail, userName, feedback, created_at)"
//         )
//         .eq("userEmail", user.email)
//         .eq("interview_id", interview_id);

//       if (error) {
//         throw error;
//       }
//       console.log("Interviews in GetInterviewDetail", Interviews);

//       if (Interviews && Interviews.length > 0) {
//         setInterviewDetail(Interviews[0]);
//       } else {
//         setInterviewDetail(null);
//       }
//     } catch (error: any) {
//       console.error("Error fetching interview:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   console.log("interviewDetail", interviewDetail);

//   return (
//     <div>
//       <h2 className="font-bold text-2xl mb-4">Interview Details</h2>
//       <InterviewDetailContainer interviewDetail={interviewDetail} />
//       {interviewDetail?.interview_feedback?.length > 0 && (
//         <CandidatList detail={interviewDetail.interview_feedback[0]} />
//       )}
//     </div>
//   );
// };

// export default InterviewDetail;

"use client";

import { useUser } from "@/app/Provider";
import { supabase } from "@/services/supabaseClient";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import InterviewDetailContainer from "./_components/InterviewDetailContainer";
import CandidatList from "./_components/CandidatList";
import { Interview } from "@/lib/type";

const InterviewDetail = () => {
  const params = useParams();
  const interview_id =
    typeof params?.interview_id === "string" ? params.interview_id : "";

  const { user }: any = useUser();
  const [interviewDetail, setInterviewDetail] = useState<Interview | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      GetInterviewDetail();
    }
  }, [user]);

  const GetInterviewDetail = async () => {
    try {
      setLoading(true);
      const { data: Interviews, error } = await supabase
        .from("Interviews")
        .select(
          "jobPosition, jobDescription, interview_id, duration, type, questionList, created_at, interview_feedback(userEmail, userName, feedback, created_at)"
        )
        .eq("userEmail", user.email)
        .eq("interview_id", interview_id);

      if (error) {
        throw error;
      }

      if (Interviews && Interviews.length > 0) {
        setInterviewDetail(Interviews[0]);
      } else {
        setInterviewDetail(null);
      }
    } catch (error: any) {
      console.error("Error fetching interview:", error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log("interviewDetail", interviewDetail);

  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">Interview Details</h2>
      <InterviewDetailContainer interviewDetail={interviewDetail} />

      {/* Check if interviewDetail and interview_feedback are not undefined or null */}
      {interviewDetail?.interview_feedback &&
        interviewDetail.interview_feedback.length > 0 && (
          <CandidatList candidatList={interviewDetail.interview_feedback} />
        )}
    </div>
  );
};

export default InterviewDetail;
