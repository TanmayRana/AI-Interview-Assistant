/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { Progress } from "@/components/ui/progress";
// import { ArrowLeft } from "lucide-react";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import FormContainer from "./_components/FormContainer";
// import QuestionList from "./_components/QuestionList";
// import { toast } from "sonner";
// import InterviewLink from "./_components/InterviewLink";
// import { useUser } from "@/app/Provider";

// const CreateInterview = () => {
//   const router = useRouter();
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState();
//   const onHandleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const [interviewId, setInterviewId] = useState();

//   const { user } = useUser();
//   console.log("user", user);

//   const onGoToNext = () => {
//     if (user?.credits <= 0) {
//       toast(
//         "You don't have enough credits to create an interview.Please upgrade your plan."
//       );
//       return;
//     }
//     if (
//       !formData?.jobPosition ||
//       !formData?.jobDescription ||
//       !formData?.duration ||
//       !formData?.type
//     ) {
//       toast("Please fill all the fields");
//       return;
//     }
//     setStep(step + 1);
//   };
//   // console.log("formData", formData);

//   const onCreateLink = async (interview_Id) => {
//     setInterviewId(interview_Id);
//     setStep(step + 1);
//   };

//   return (
//     <div className="mt-2 px-10 md:px-24 lg:px-44 xl:px-56">
//       <div className="flex gap-5 items-center">
//         <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />
//         <h2 className="font-bold text-2xl">Create New Interview</h2>
//       </div>
//       <Progress value={step * 33.33} className="my-5" />
//       {step === 1 ? (
//         <FormContainer
//           onHandleInputChange={onHandleInputChange}
//           GoToNext={() => onGoToNext()}
//         />
//       ) : step === 2 ? (
//         <QuestionList
//           formData={formData}
//           onCreateLink={(interview_Id) => onCreateLink(interview_Id)}
//         />
//       ) : step === 3 ? (
//         <InterviewLink interview_Id={interviewId} formData={formData} />
//       ) : null}
//     </div>
//   );
// };

// export default CreateInterview;

"use client";

import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import FormContainer from "./_components/FormContainer";
import QuestionList from "./_components/QuestionList";
import InterviewLink from "./_components/InterviewLink";
import { toast } from "sonner";
import { useUser } from "@/app/Provider";

// Define form data structure
export interface FormDataType {
  jobPosition: string;
  jobDescription: string;
  duration: string;
  type: string;
}

const CreateInterview = () => {
  const router = useRouter();
  const { user }: any = useUser();

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    jobPosition: "",
    jobDescription: "",
    duration: "",
    type: "",
  });
  const [interviewId, setInterviewId] = useState<string>("");

  const onHandleInputChange = (field: keyof FormDataType, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const onGoToNext = () => {
    if (!user || user.credits <= 0) {
      toast(
        "You don't have enough credits to create an interview. Please upgrade your plan."
      );
      return;
    }

    const { jobPosition, jobDescription, duration, type } = formData;
    if (!jobPosition || !jobDescription || !duration || !type) {
      toast("Please fill all the fields");
      return;
    }

    setStep((prev) => prev + 1);
  };

  const onCreateLink = (interview_Id: string) => {
    setInterviewId(interview_Id);
    setStep(3);
  };

  return (
    <div className="mt-2 px-10 md:px-24 lg:px-44 xl:px-56">
      <div className="flex gap-5 items-center">
        <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />
        <h2 className="font-bold text-2xl">Create New Interview</h2>
      </div>

      <Progress value={step * 33.33} className="my-5" />

      {step === 1 && (
        <FormContainer
          onHandleInputChange={onHandleInputChange}
          GoToNext={onGoToNext}
        />
      )}

      {step === 2 && (
        <QuestionList formData={formData} onCreateLink={onCreateLink} />
      )}

      {step === 3 && (
        <InterviewLink interview_Id={interviewId} formData={formData} />
      )}
    </div>
  );
};

export default CreateInterview;
