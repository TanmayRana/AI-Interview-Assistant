// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import moment from "moment";
// import { Progress } from "@/components/ui/progress";

// const CandidateFeedbackDialog = ({ children, candidate }: any) => {
//   const feedback = candidate?.feedback;
//   const { technicalSkills, communication, problemSolving, experience } =
//     feedback.rating;

//   console.log("candidate", feedback);

//   return (
//     <Dialog>
//       <DialogTrigger asChild>{children}</DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Feedback</DialogTitle>
//           <DialogDescription asChild>
//             <div className="mt-5">
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-4">
//                   <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
//                     {candidate.userName?.[0]?.toUpperCase() || "?"}
//                   </div>

//                   <div className="flex flex-col">
//                     <span className="font-semibold text-gray-900 text-lg">
//                       {candidate.userName}
//                     </span>
//                     <span className="text-sm text-gray-600">
//                       {candidate.userEmail}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex gap-3 items-center">
//                   <h2 className="text-green-600 text-2xl font-bold">6/10</h2>
//                 </div>
//               </div>
//               <div className="mt-5">
//                 <h2 className="font-bold">Skills Assessment </h2>
//                 <div className="mt-3 grid grid-cols-2 gap-10">
//                   <div className="">
//                     <h2 className="flex justify-between items-center ">
//                       Technical Skills <samp>{technicalSkills}/10</samp>
//                     </h2>
//                     <Progress
//                       value={{ technicalSkills } * 10}
//                       className="mt-2"
//                     />
//                   </div>
//                   <div className="">
//                     <h2 className="flex justify-between items-center ">
//                       Communication<samp>9/10</samp>
//                     </h2>
//                     <Progress value={9 * 10} className="mt-2" />
//                   </div>
//                   <div className="">
//                     <h2 className="flex justify-between items-center ">
//                       Problen Solving<samp>9/10</samp>
//                     </h2>
//                     <Progress value={9 * 10} className="mt-2" />
//                   </div>
//                   <div className="">
//                     <h2 className="flex justify-between items-center ">
//                       Experince<samp>9/10</samp>
//                     </h2>
//                     <Progress value={9 * 10} className="mt-2" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </DialogDescription>
//         </DialogHeader>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default CandidateFeedbackDialog;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Progress } from "@/components/ui/progress";

const CandidateFeedbackDialog = ({ children, candidate }: any) => {
  const feedback = candidate?.feedback;
  const { technicalSkills, communication, problemSolving, experience } =
    feedback.rating;

  console.log("candidate", feedback);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Feedback</DialogTitle>
          <DialogDescription asChild>
            <div className="mt-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
                    {candidate.userName?.[0]?.toUpperCase() || "?"}
                  </div>

                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 text-lg">
                      {candidate.userName}
                    </span>
                    <span className="text-sm text-gray-600">
                      {candidate.userEmail}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <h2 className="text-green-600 text-2xl font-bold">6/10</h2>
                </div>
              </div>
              <div className="mt-5">
                <h2 className="font-bold">Skills Assessment </h2>
                <div className="mt-3 grid grid-cols-2 gap-10">
                  <div className="">
                    <h2 className="flex justify-between items-center ">
                      Technical Skills <samp>{technicalSkills}/10</samp>
                    </h2>
                    <Progress value={technicalSkills * 10} className="mt-2" />
                  </div>
                  <div className="">
                    <h2 className="flex justify-between items-center ">
                      Communication <samp>{communication}/10</samp>
                    </h2>
                    <Progress value={communication * 10} className="mt-2" />
                  </div>
                  <div className="">
                    <h2 className="flex justify-between items-center ">
                      Problem Solving <samp>{problemSolving}/10</samp>
                    </h2>
                    <Progress value={problemSolving * 10} className="mt-2" />
                  </div>
                  <div className="">
                    <h2 className="flex justify-between items-center ">
                      Experience <samp>{experience}/10</samp>
                    </h2>
                    <Progress value={experience * 10} className="mt-2" />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h2 className="font-bold">Performance Summery</h2>
                <div className="p-5 rounded-lg bg-gray-100 mt-3">
                  <p className="">{feedback.summary}</p>
                </div>
              </div>
              <div
                className={`p-5 ${
                  feedback.recommendation === "Yes"
                    ? "bg-green-100"
                    : "bg-red-100"
                } rounded-lg mt-3`}
              >
                <h2
                  className={` ${
                    feedback.recommendation === "Yes"
                      ? "text-green-600"
                      : "text-red-600"
                  } font-medium`}
                >
                  Recommended Message:-
                </h2>
                <p
                  className={` ${
                    feedback.recommendation === "Yes"
                      ? "text-green-600"
                      : "text-red-600"
                  } mt-1`}
                >
                  {feedback.recommendationMessage}
                </p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CandidateFeedbackDialog;
