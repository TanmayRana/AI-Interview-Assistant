// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "sonner";
// import { Loader2Icon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import QuestionListContainer from "./QuestionListContainer";

// interface Question {
//   question: string;
//   type: string;
// }

// interface QuestionListProps {
//   formData: any; // Adjust this to a more specific type if possible
// }

// const QuestionList: React.FC<QuestionListProps> = ({ formData }) => {
//   const [loading, setLoading] = useState(false);
//   const [questionList, setQuestionList] = useState<Question[]>([]);

//   useEffect(() => {
//     if (formData) {
//       generateQuestions();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData]);

//   const generateQuestions = async () => {
//     setLoading(true);
//     try {
//       const result = await axios.post("/api/ai-model", {
//         ...formData,
//       });

//       const content = result.data.content;

//       const parsed = JSON.parse(
//         content.replace("```json", "").replace("```", "")
//       );

//       const questions = parsed.interviewQuestions as Question[];

//       if (Array.isArray(questions)) {
//         setQuestionList(questions);
//       } else {
//         setQuestionList([]);
//         toast("Invalid format received from AI", {
//           description: "Make sure your model returns a list of questions.",
//         });
//       }
//     } catch (error) {
//       toast("Something went wrong", {
//         description: "Please try again later.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onFinish = () => {};

//   return (
//     <div>
//       {loading ? (
//         <div className="p-5 bg-blue-50 rounded-xl border border-blue-500 flex gap-5 justify-center items-center">
//           <Loader2Icon className="animate-spin" />
//           <div>
//             <h2 className="font-medium">Generating Interview Questions</h2>
//             <p className="text-blue-500">
//               Our AI is crafting personalized interview questions based on your
//               inputs. Please wait a few seconds.
//             </p>
//           </div>
//           <div className="flex justify-end mt-4 ">
//             <Button
//               className="px-8 py-2 bg-blue-500 text-white"
//               onClick={onFinish}
//             >
//               Finish
//             </Button>
//           </div>
//         </div>
//       ) : (
//         <div>
//           {questionList.length > 0 ? (
//             <QuestionListContainer questionList={questionList} />
//           ) : (
//             <p className="text-red-500 text-center mt-4">
//               No questions generated.
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuestionList;

/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "sonner";
// import { Loader2Icon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import QuestionListContainer from "./QuestionListContainer";
// import { supabase } from "@/services/supabaseClient";
// import { useUser } from "@/app/Provider";
// import { v4 as uuidv4 } from "uuid";

// interface Question {
//   question: string;
//   type: string;
// }

// interface QuestionListProps {
//   formData: any; // You can replace this with a more specific type later
// }

// const QuestionList: React.FC<QuestionListProps> = ({
//   formData,
//   onCreateLink,
// }) => {
//   const [loading, setLoading] = useState(false);
//   const [questionList, setQuestionList] = useState<Question[]>([]);
//   const [saveLoading, setSaveLoading] = useState(false);

//   const { user } = useUser();

//   useEffect(() => {
//     if (formData) {
//       generateQuestions();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData]);

//   const generateQuestions = async () => {
//     setLoading(true);
//     try {
//       const result = await axios.post("/api/ai-model", {
//         ...formData,
//       });

//       const content = result.data.content;
//       // console.log("content=", content);

//       // const parsed = JSON.parse(
//       //   content.replace("```json", "").replace("```", "")
//       // );
//       const questions = content.interviewQuestions as Question[];
//       const parsed = JSON.parse(content);
//       setQuestionList(parsed);

//       // if (Array.isArray(questions)) {
//       //   setQuestionList(questions);
//       // } else {
//       //   throw new Error("Invalid format");
//       // }
//     } catch (error) {
//       setQuestionList([]);
//       toast("Something went wrong", {
//         description: "Failed to generate questions. Please try again later.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   console.log("questionList=", questionList);

//   const onFinish = async () => {
//     setSaveLoading(true);
//     const interviewId = uuidv4();
//     console.log("interviewId=", interviewId);

//     const { data, error } = await supabase
//       .from("Interviews")
//       .insert([
//         {
//           ...formData,
//           questionList: questionList,
//           userEmail: user?.email,
//           interview_id: interviewId,
//         },
//       ])
//       .select();

//     setSaveLoading(false);

//     onCreateLink(interviewId);
//   };

//   return (
//     <div>
//       {loading ? (
//         <div className="p-6 bg-blue-50 rounded-xl border border-blue-500 flex items-center gap-4">
//           <Loader2Icon className="animate-spin text-blue-600 w-6 h-6" />
//           <div>
//             <h2 className="font-semibold text-blue-700">
//               Generating Interview Questions
//             </h2>
//             <p className="text-sm text-blue-500">
//               Our AI is crafting personalized questions. Please wait a moment.
//             </p>
//           </div>
//         </div>
//       ) : questionList.length > 0 ? (
//         <div>
//           <QuestionListContainer questionList={questionList} />
//           <div className="flex justify-end mt-6">
//             <Button
//               className="bg-blue-600 text-white px-6 py-2"
//               onClick={onFinish}
//               disabled={saveLoading}
//             >
//               {saveLoading && (
//                 <Loader2Icon className="animate-spin mr-2 w-4 h-4" />
//               )}
//               {saveLoading ? "Saving..." : "Create Interview Link & Save"}
//             </Button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-red-500 text-center mt-6">No questions generated.</p>
//       )}
//     </div>
//   );
// };

// export default QuestionList;

"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuestionListContainer from "./QuestionListContainer";
import { supabase } from "@/services/supabaseClient";
// import { useUser } from "@/app/Provider";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@/app/Provider";

interface Question {
  question: string;
  type: string;
}

interface QuestionListProps {
  formData: any; // Ideally define a proper type
  onCreateLink: (id: string) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({
  formData,
  onCreateLink,
}) => {
  const [loading, setLoading] = useState(false);
  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [saveLoading, setSaveLoading] = useState(false);
  const { user }: any = useUser();

  useEffect(() => {
    if (formData) {
      generateQuestions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const generateQuestions = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/ai-model", formData);
      const content = result.data.result; // assuming the API returns `{ result: string }`

      console.log("content api=", content);

      setQuestionList(content);

      // const parsed: Question[] = JSON.parse(content.interviewQuestions);
      // console.log("parsed=", parsed);
      // setQuestionList(parsed);

      // if (Array.isArray(parsed)) {
      //   setQuestionList(parsed);
      // } else {
      //   throw new Error("Invalid question format");
      // }
    } catch (error) {
      console.error("Error generating questions:", error);
      setQuestionList([]);
      toast("Something went wrong", {
        description: "Failed to generate questions. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };
  console.log("questionList=", questionList);

  const onFinish = async () => {
    setSaveLoading(true);
    const interviewId = uuidv4();

    const { error } = await supabase.from("Interviews").insert([
      {
        ...formData,
        questionList,
        userEmail: user?.email,
        interview_id: interviewId,
      },
    ]);

    const updatedUser = await supabase
      .from("User")
      .update({ credits: Number(user?.credits) - 1 })
      .eq("email", user?.email)
      .select();

    setSaveLoading(false);

    if (error) {
      toast("Error saving interview", {
        description: error.message,
      });
      return;
    }

    onCreateLink(interviewId);
  };

  return (
    <div>
      {loading ? (
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-500 flex items-center gap-4">
          <Loader2Icon className="animate-spin text-blue-600 w-6 h-6" />
          <div>
            <h2 className="font-semibold text-blue-700">
              Generating Interview Questions
            </h2>
            <p className="text-sm text-blue-500">
              Our AI is crafting personalized questions. Please wait a moment.
            </p>
          </div>
        </div>
      ) : questionList.length > 0 ? (
        <div>
          <QuestionListContainer questionList={questionList} />
          <div className="flex justify-end mt-6">
            <Button
              className="bg-blue-600 text-white px-6 py-2"
              onClick={onFinish}
              disabled={saveLoading}
            >
              {saveLoading && (
                <Loader2Icon className="animate-spin mr-2 w-4 h-4" />
              )}
              {saveLoading ? "Saving..." : "Create Interview Link & Save"}
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-center mt-6">No questions generated.</p>
      )}
    </div>
  );
};

export default QuestionList;
