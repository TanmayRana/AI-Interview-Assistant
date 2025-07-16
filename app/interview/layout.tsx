// "use client";

// import React, { useState } from "react";
// import InterviewHeader from "./_components/InterviewHeader";
// import { InterviewDataContext } from "@/context/InterviewDataContext";

// const InterviewLayout = ({ children }) => {
//   const [interviewInfo, setInterviewInfo] = useState();
//   return (
//     <InterviewDataContext.Provider value={{ interviewInfo, setInterviewInfo }}>
//       <div className="">
//         <div className="fixed top-0 left-0 right-0 z-50 bg-white ">
//           <InterviewHeader />
//         </div>
//         {children}
//       </div>
//     </InterviewDataContext.Provider>
//   );
// };

// export default InterviewLayout;

"use client";

import React, { useState } from "react";
import InterviewHeader from "./_components/InterviewHeader";
import { InterviewDataContext } from "@/context/InterviewDataContext";

const InterviewLayout = ({ children }: { children: React.ReactNode }) => {
  const [interviewInfo, setInterviewInfo] = useState();
  return (
    <InterviewDataContext.Provider value={{ interviewInfo, setInterviewInfo }}>
      <div>
        <InterviewHeader />
        <div className="pt-[YOUR_HEADER_HEIGHT]">{children}</div>{" "}
        {/* Optional padding to offset the fixed header */}
      </div>
    </InterviewDataContext.Provider>
  );
};

export default InterviewLayout;
