// Define the InterviewFeedback type
export type InterviewFeedback = {
  userEmail: string;
  userName: string;
  feedback: string;
  created_at: string;
};

// Define the Interview type
export type Interview = {
  jobPosition: string;
  jobDescription: string;
  interview_id: string;
  duration: number;
  type: string;
  questionList: { question: string; type: string }[];
  created_at: string;
  interview_feedback: InterviewFeedback[]; // Array of interview feedback objects
};

export interface User {
  id: string;
  name: string;
  email: string;
  picture?: string;
  credits: number;
}
