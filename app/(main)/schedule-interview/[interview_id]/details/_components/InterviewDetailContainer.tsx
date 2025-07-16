// import { Calendar, Clock } from "lucide-react";
// import moment from "moment";
// import { Caladea } from "next/font/google";
// import React from "react";

// const InterviewDetailContainer = ({ interviewDetail }) => {
//   console.log("interviewDetail in InterviewDetailContainer", interviewDetail);

//   return (
//     <div className="p-6 rounded-xl bg-white border shadow-sm ">
//       <h2 className="">{interviewDetail?.jobPosition}</h2>
//       <div className="mt-4 flex items-center justify-between lg:pr-52">
//         <div className="">
//           <h2 className="text-sm text-gray-500">Duration:</h2>
//           <h2 className="flex items-center gap-2 text-sm font-bold">
//             <Clock className="h-4 w-4" />
//             {interviewDetail?.duration}
//           </h2>
//         </div>
//         <div className="">
//           <h2 className="text-sm text-gray-500">Created On:</h2>
//           <h2 className="flex items-center gap-2 text-sm font-bold">
//             <Calendar className="h-4 w-4" />
//             {moment(interviewDetail?.created_at).format("MMM DD YYYY")}
//           </h2>
//         </div>
//         {interviewDetail?.type && (
//           <div className="">
//             <h2 className="text-sm text-gray-500">Type:</h2>
//             <h2 className="flex items-center gap-2 text-sm font-bold">
//               <Clock className="h-4 w-4" />
//               {JSON.parse(interviewDetail?.type)[0]}
//             </h2>
//           </div>
//         )}
//       </div>
//       <div className="mt-5">
//         <h2 className="font-bold">Job Description:</h2>
//         <p className="text-sm leading-6">{interviewDetail?.jobDescription}</p>
//       </div>
//       <div className="mt-5">
//         <h2 className="font-bold ">Interview Questions:</h2>
//         <div className="">
//           {interviewDetail?.questionList.map((question, index) => (
//             <div key={index} className="text-sm leading-6">
//               {index + 1}. {question}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterviewDetailContainer;

// import { Calendar, Clock } from "lucide-react";
// import moment from "moment";
// import React from "react";

// // Type for a single interview feedback
// type InterviewFeedback = {
//   userEmail: string;
//   userName: string;
//   feedback: string;
//   created_at: string;
// };

// // Type for a question item
// type QuestionItem = {
//   question: string;
//   type: string;
// };

// // Type for the full interview object
// type Interview = {
//   jobPosition: string;
//   jobDescription: string;
//   interview_id: string;
//   duration: number;
//   type: string;
//   questionList: QuestionItem[];
//   created_at: string;
//   interview_feedback: InterviewFeedback[];
// };

// // Props type
// type InterviewDetailContainerProps = {
//   interviewDetail: Interview | null;
// };

// const InterviewDetailContainer: React.FC<InterviewDetailContainerProps> = ({
//   interviewDetail,
// }) => {
//   if (!interviewDetail) return <p>No interview data available.</p>;

//   // Parse type safely
//   const parsedType = (() => {
//     try {
//       const parsed = JSON.parse(interviewDetail.type);
//       return Array.isArray(parsed) ? parsed[0] : interviewDetail.type;
//     } catch {
//       return interviewDetail.type;
//     }
//   })();

//   return (
//     <div className="p-6 rounded-xl bg-white border shadow-sm">
//       <h2 className="text-xl font-semibold mb-4">
//         {interviewDetail.jobPosition}
//       </h2>

//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
//         <div>
//           <h3 className="text-sm text-gray-500">Duration:</h3>
//           <div className="flex items-center gap-2 text-sm font-bold mt-1">
//             <Clock className="h-4 w-4" />
//             {interviewDetail.duration} mins
//           </div>
//         </div>

//         <div>
//           <h3 className="text-sm text-gray-500">Created On:</h3>
//           <div className="flex items-center gap-2 text-sm font-bold mt-1">
//             <Calendar className="h-4 w-4" />
//             {moment(interviewDetail.created_at).format("MMM DD, YYYY")}
//           </div>
//         </div>

//         {parsedType && (
//           <div>
//             <h3 className="text-sm text-gray-500">Type:</h3>
//             <div className="flex items-center gap-2 text-sm font-bold mt-1">
//               <Clock className="h-4 w-4" />
//               {parsedType}
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="mb-6">
//         <h3 className="font-bold text-gray-800 mb-1">Job Description:</h3>
//         <p className="text-sm leading-6 text-gray-700">
//           {interviewDetail.jobDescription}
//         </p>
//       </div>

//       <div>
//         <h3 className="font-bold text-gray-800 mb-2">Interview Questions:</h3>
//         {interviewDetail.questionList?.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {interviewDetail.questionList.map((q, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 border rounded-lg p-4 shadow-sm hover:shadow-md transition"
//               >
//                 <p className="text-sm font-medium text-gray-800 mb-1">
//                   {index + 1}. {q.question}
//                 </p>
//                 <p className="text-xs text-gray-500">Type: {q.type}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-sm text-gray-500">No questions available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InterviewDetailContainer;

import { Interview } from "@/lib/type";
import { Calendar, Clock } from "lucide-react";
import moment from "moment";
import React from "react";
// import { Interview } from "@/types"; // Import the Interview type

type InterviewDetailContainerProps = {
  interviewDetail: Interview | null;
};

const InterviewDetailContainer: React.FC<InterviewDetailContainerProps> = ({
  interviewDetail,
}) => {
  if (!interviewDetail) return <p>No interview data available.</p>;

  const parsedType = (() => {
    try {
      const parsed = JSON.parse(interviewDetail.type);
      return Array.isArray(parsed) ? parsed[0] : interviewDetail.type;
    } catch {
      return interviewDetail.type;
    }
  })();

  return (
    <div className="p-6 rounded-xl bg-white border shadow-sm">
      <h2 className="text-xl font-semibold">{interviewDetail.jobPosition}</h2>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-sm text-gray-500">Duration:</h2>
          <div className="flex items-center gap-2 text-sm font-bold mt-2">
            <Clock className="h-4 w-4" />
            {interviewDetail.duration} mins
          </div>
        </div>

        <div>
          <h2 className="text-sm text-gray-500">Created On:</h2>
          <div className="flex items-center gap-2 text-sm font-bold mt-2">
            <Calendar className="h-4 w-4" />
            {moment(interviewDetail.created_at).format("MMM DD, YYYY")}
          </div>
        </div>

        {parsedType && (
          <div>
            <h2 className="text-sm text-gray-500">Type:</h2>
            <div className="flex items-center gap-2 text-sm font-bold mt-2">
              <Clock className="h-4 w-4" />
              {parsedType}
            </div>
          </div>
        )}
      </div>

      <div className="mt-5">
        <h2 className="font-bold mb-1">Job Description:</h2>
        <p className="text-sm leading-6 text-gray-700">
          {interviewDetail.jobDescription}
        </p>
      </div>

      <div>
        <h3 className="font-bold text-gray-800 mb-2">Interview Questions:</h3>
        {interviewDetail.questionList?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interviewDetail.questionList.map((q, index) => (
              <div
                key={index}
                className="bg-gray-50 border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <p className="text-sm font-medium text-gray-800 mb-1">
                  {index + 1}. {q.question}
                </p>
                <p className="text-xs text-gray-500">Type: {q.type}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No questions available.</p>
        )}
      </div>
    </div>
  );
};

export default InterviewDetailContainer;
