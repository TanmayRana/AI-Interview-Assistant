/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Loader2Icon, Mic, Phone, Timer } from "lucide-react";
import { InterviewDataContext } from "@/context/InterviewDataContext";
import Vapi from "@vapi-ai/web";
import AlertConfirmation from "./_components/AlertConfirmation";
import { toast } from "sonner";
import axios from "axios";
import { supabase } from "@/services/supabaseClient";
import { useParams, useRouter } from "next/navigation";

const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
};

const StartInterview = () => {
  const { interviewInfo }: any = useContext(InterviewDataContext);
  const [activeUser, setActiveUser] = useState<boolean>(false);
  const [interviewStarted, setInterviewStarted] = useState<boolean>(false);
  const [callError, setCallError] = useState<string | null>(null);
  const [conversation, setConversation] = useState<any>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const conversationBuffer = useRef<any>(null);
  const vapiRef = useRef<any>(null);
  const { interview_id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!);
    vapiRef.current = vapi;

    const handleCallStart = () => {
      console.log("Vapi: Call has started.");
      toast.success("Interview has started.");
      setElapsedTime(0); // reset timer
      timerRef.current = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    };

    const handleSpeechStart = () => setActiveUser(false);
    const handleSpeechEnd = () => setActiveUser(true);

    const handleCallEnd = () => {
      console.log("Vapi: Call has ended.");
      toast("Interview has ended.");
      setInterviewStarted(false);
      clearInterval(timerRef.current!);

      setTimeout(() => {
        if (conversationBuffer.current) {
          setConversation(conversationBuffer.current);
          GenerateFeedback(conversationBuffer.current);
        } else {
          console.warn("Conversation not yet populated, retrying...");
          setTimeout(() => {
            if (conversationBuffer.current) {
              setConversation(conversationBuffer.current);
              GenerateFeedback(conversationBuffer.current);
            } else {
              toast.error("Failed to retrieve conversation history.");
            }
          }, 1500);
        }
      }, 1000);
    };

    const handleMessage = (message: any) => {
      console.log("Vapi message conversation=", message?.conversation);
      if (message?.conversation) {
        conversationBuffer.current = message.conversation;
      }
    };

    const handleError = (error: any) => {
      console.error("Vapi error:", error);
      const msg = `Vapi Error: ${error.message || "An unknown error occurred"}`;
      setCallError(msg);
      toast.error(msg);
      setInterviewStarted(false);
      clearInterval(timerRef.current!);
    };

    vapi.on("call-start", handleCallStart);
    vapi.on("speech-start", handleSpeechStart);
    vapi.on("speech-end", handleSpeechEnd);
    vapi.on("call-end", handleCallEnd);
    vapi.on("message", handleMessage);
    vapi.on("error", handleError);

    return () => {
      vapi.off("call-start", handleCallStart);
      vapi.off("speech-start", handleSpeechStart);
      vapi.off("speech-end", handleSpeechEnd);
      vapi.off("call-end", handleCallEnd);
      vapi.off("message", handleMessage);
      vapi.off("error", handleError);
      clearInterval(timerRef.current!);
    };
  }, []);

  const GenerateFeedback = async (conversationData: any) => {
    try {
      const result = await axios.post("/api/ai-feedback", {
        conversation: conversationData,
      });

      const feedback = result?.data?.result;

      const { data, error } = await supabase
        .from("interview_feedback")
        .insert([
          {
            userName: interviewInfo.userName,
            userEmail: interviewInfo.userEmail,
            interview_id: interview_id,
            feedback,
            recommended: false,
          },
        ])
        .select();

      if (error) throw new Error("Error saving feedback: " + error.message);
      console.log("Feedback saved successfully:", data);
      router.replace(`/interview/${interview_id}/complete`);
    } catch (err: any) {
      console.error("Error generating feedback:", err.message || err);
      toast.error("Failed to generate feedback.");
    }
  };

  const handleStartInterview = () => {
    if (
      interviewInfo &&
      interviewInfo.userName &&
      interviewInfo.interviewData?.questionList?.length > 0 &&
      vapiRef.current
    ) {
      setInterviewStarted(true);
      setCallError(null);
      startCall();
    } else {
      const errorMessage = "Interview data is missing or not ready.";
      toast.error(errorMessage);
      setCallError(errorMessage);
    }
  };

  const startCall = async () => {
    const vapi = vapiRef.current;
    const questionList =
      interviewInfo.interviewData?.questionList
        ?.map((q: any) => q.question)
        .join(", ") || "";

    const assistantOptions = {
      name: "AI Recruiter",
      firstMessage: `Hi ${interviewInfo.userName}, how are you? Ready for your interview on ${interviewInfo.interviewData.jobPosition}?`,
      transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en-US",
      },
      voice: {
        provider: "playht",
        voiceId: "jennifer",
      },
      model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `
                          You are an AI voice assistant conducting interviews.
                          Your job is to ask candidates provided interview questions, assess their responses.
                          Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
                          "Hey there! Welcome to your ${interviewInfo.interviewData.jobPosition} interview. Let's get started with a few questions!"
                          Ask one question at a time and wait for the candidate's response before proceeding. Keep the questions clear and concise. Below Are
                          the questions ask one by one: Questions: ${questionList}
                          If the candidate struggles, offer hints or rephrase the question without giving away the answer. Example:
                          "Need a hint? Think about how React tracks component updates!"
                          Provide brief, encouraging feedback after each answer. Example:
                          "Nice! That's a solid answer."
                          "Hmm, not quite! Want to try again?"
                          Keep the conversation natural and engaging-use casual phrases like "Alright, next up..." or "Let's tackle a tricky one!"
                          After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example:
                          "That was great! You handled some tough questions well. Keep sharpening your skills!"
                          End on a positive note:
                          "Thanks for chatting! Hope to see you crushing projects soon!"
                          Key Guidelines:
                          Be friendly, engaging, and witty
                          Keep responses short and natural, like a real conversation
                          Adapt based on the candidate's confidence level
                          Ensure the interview remains focused on React
                        `.trim(),
          },
        ],
      },
    };

    try {
      await vapi.start(assistantOptions);
    } catch (error: any) {
      const msg = `Could not start the interview: ${
        error.message || "Unknown error"
      }`;
      toast.error(msg);
      setCallError(msg);
      setInterviewStarted(false);
    }
  };

  const handleStopInterview = () => {
    try {
      setLoading(true);
      vapiRef.current?.stop();
      clearInterval(timerRef.current!);
    } catch (error: any) {
      const msg = `Error stopping the interview: ${
        error.message || "Unknown error"
      }`;
      toast.error(msg);
      setCallError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 sm:p-10 lg:px-48 xl:px-56">
      <h2 className="font-bold text-xl flex justify-between items-center">
        AI Interview Session
        <span className="flex gap-2 items-center text-sm">
          <Timer className="w-5 h-5" /> {formatTime(elapsedTime)}
        </span>
      </h2>

      {callError && (
        <div className="mt-4 text-red-500 border border-red-500/50 p-3 rounded-md bg-red-50/50">
          {callError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-6">
        <div className="shadow-md h-[400px] rounded-xl border flex items-center justify-center flex-col gap-4 p-4 relative">
          <div className="relative">
            {!activeUser && (
              <span className="absolute inset-0 rounded-full bg-blue-500 opacity-60 animate-ping" />
            )}
            <Image
              src="/ai2.webp"
              alt="AI Recruiter"
              width={60}
              height={60}
              className="rounded-full w-16 h-16 object-cover z-10 relative"
            />
          </div>
          <h2 className="font-semibold">AI Recruiter</h2>
        </div>

        <div className="shadow-md h-[400px] rounded-xl border flex items-center justify-center flex-col gap-4 p-4 relative">
          <div className="relative">
            {activeUser && (
              <span className="absolute inset-0 rounded-full bg-blue-500 opacity-60 animate-ping" />
            )}
            <div className="relative inline-flex items-center justify-center w-15 h-15 overflow-hidden bg-blue-500 text-white rounded-full">
              <span className="font-medium text-white">
                {interviewInfo?.userName?.[0] ?? "U"}
              </span>
            </div>
          </div>
          <h2 className="font-semibold">
            {interviewInfo?.userName ?? "Candidate"}
          </h2>
        </div>
      </div>

      {interviewStarted ? (
        <div className="flex items-center justify-center gap-6 mt-8">
          <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
          <AlertConfirmation
            title="End Interview"
            description="Are you sure you want to end the interview?"
            onclick={handleStopInterview}
          >
            {loading ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
            )}
          </AlertConfirmation>
        </div>
      ) : (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleStartInterview}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Start Interview
          </button>
        </div>
      )}

      <p className="text-sm text-gray-400 text-center mt-5">
        {interviewStarted
          ? "Interview in Progress..."
          : "Click to begin interview."}
      </p>
    </div>
  );
};

export default StartInterview;
