// import React from "react";

// const CandidatList = ({ candidatList }: any) => {
//   console.log("detail", candidatList);

//   return (
//     <div className="mt-5 ">
//       <h2 className="font-bold text-xl">Candidates:- {candidatList?.length}</h2>
//       <div className="flex flex-col gap-4 shadow-md border rounded-xl p-6 mt-2">
//         {candidatList.map((item: any, index: number) => (
//           <div key={index} className="flex  gap-2 items-center">
//             <div className=""></div>
//             <h2 className="bg-blue-500 p-3 rounded-full text-white">
//               {item.userName[0]}
//             </h2>
//             <h2 className="">{item.userName}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CandidatList;

// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import moment from "moment";
// import React from "react";

// type Candidate = {
//   userName: string;
//   userEmail: string;
//   feedback: string;
//   created_at: string;
// };

// type CandidatListProps = {
//   candidatList: Candidate[];
// };

// const CandidatList: React.FC<CandidatListProps> = ({ candidatList }) => {
//   return (
//     <div className="mt-5">
//       <h2 className="font-bold text-xl">Candidates: {candidatList?.length}</h2>

//       <div className="flex flex-col gap-4 shadow-md border rounded-xl p-6 mt-2 bg-white">
//         {candidatList.map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-4 border-b pb-3 last:border-none justify-between"
//           >
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold">
//                 {item.userName?.[0]?.toUpperCase() || "?"}
//               </div>

//               <div className="flex flex-col">
//                 <span className="font-semibold text-gray-800">
//                   {item.userName}
//                 </span>
//                 <span className="text-sm text-gray-500">{item.userEmail}</span>
//                 <span className="text-sm text-gray-500">
//                   Completed on: {moment(item.created_at).format("MMM DD YYYY")}
//                 </span>
//               </div>
//             </div>
//             <Button
//               variant="outline"
//               className="flex-1 flex items-center justify-center gap-x-2 cursor-pointer"
//             >
//               <span className="text-gray-800">View Feedback</span>
//               <ArrowRight className="h-4 w-4" />
//             </Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CandidatList;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import moment from "moment";
import React from "react";
import CandidateFeedbackDialog from "./CandidateFeedbackDialog";

type Candidate = {
  userName: string;
  userEmail: string;
  feedback: string;
  created_at: string;
};

type CandidatListProps = {
  candidatList: Candidate[];
};

const CandidatList: React.FC<CandidatListProps> = ({ candidatList }) => {
  console.log("candidatList", candidatList);

  return (
    <div className="mt-8">
      <h2 className="font-bold text-2xl mb-4">
        Candidates ({candidatList?.length})
      </h2>

      <div className="flex flex-col gap-4 bg-white shadow border rounded-xl p-6">
        {candidatList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b last:border-b-0 pb-4"
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
                {item.userName?.[0]?.toUpperCase() || "?"}
              </div>

              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 text-lg">
                  {item.userName}
                </span>
                <span className="text-sm text-gray-600">{item.userEmail}</span>
                <span className="text-sm text-gray-500">
                  Completed on: {moment(item.created_at).format("MMM DD, YYYY")}
                </span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <h2 className="text-green-600 text-2xl font-bold">6/10</h2>
              <CandidateFeedbackDialog candidate={item}>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="text-blue-500">View Report</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CandidateFeedbackDialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidatList;
