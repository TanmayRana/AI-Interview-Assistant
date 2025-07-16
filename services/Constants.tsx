import {
  BriefcaseBusinessIcon,
  Calendar,
  Code2Icon,
  LayoutDashboard,
  List,
  Puzzle,
  Settings,
  User2Icon,
  WalletCards,
} from "lucide-react";

export const SidebarOptions = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Schedule Interview",
    href: "/schedule-interview",
    icon: Calendar,
  },
  {
    name: "All Interview",
    href: "/all-interview",
    icon: List,
  },
  {
    name: "Billing",
    href: "/billing",
    icon: WalletCards,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const InterviewTypes = [
  {
    title: "Technical",
    icon: Code2Icon,
  },
  {
    title: "Behavioral",
    icon: User2Icon,
  },
  {
    title: "Experience",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Problem Solving",
    icon: Puzzle,
  },
  {
    title: "Leadership",
    icon: BriefcaseBusinessIcon,
  },
];

export const Question_PROMPT = `You are an expert technical interviewer. 
Based on the following inputs, generate a well-structured list of high-quality interview questions: 
Job Title: {{job Title}} 
Job Description:{{jobDescription}} 
Interview Duration: {{duration}} 
Interview Type: {{type}} 
Your task: 
Analyze the job description to identify key responsibilities, required skills, and expected experience. 
Generate a list of interview questions depends on interview duration 
Adjust the number and depth of questions to match the interview duration. 
Ensure the questions match the tone and structure of a real-life {{type}} interview. 
Format your response in JSON format with array list of questions. 
format: interviewQuestions=[ 
{ 
question:", 
type: 'Technical/Behavioral/Experince/Problem Solving/Leaseship' 
},{ 
...
}] 
The goal is to create a structured, relevant, and time-optimized interview plan for a {{job Title}} role.`;

// export const FEEDBACK_PROMPT = `{{conversation}}
// Depends on this Interview Conversation between assitant and user,
// Give me feedback for user interview. Give me rating out of 10 for technical Skills, Communication, Problem Solving, Experince. Also give me summery in 3 lines about the interview and one line to let me know whether is recommanded for hire or not with msg. Give me response in JSON format
// {
// feedback:{
// rating:{
// techicalSkills:5,
// communication:6,
// problem Solving:4,
// experince:7
// },
// summery:<in 3 Line>,
// Recommendation:",
// Recommendation Msg:"
// }
// }`;

export const FEEDBACK_PROMPT = `Please provide feedback on the following interview conversation:

{{conversation}}

Based on this conversation, evaluate the candidate's performance in the following areas and provide a rating out of 10 for each:

Technical Skills:
Communication:
Problem Solving:
Experience:

Also, provide a concise summary of the interview in approximately three lines, highlighting key strengths and weaknesses.

Finally, provide a one-line recommendation indicating whether the candidate is recommended for hire or not, followed by a brief justification for your recommendation in one line.

Please format your response as a JSON object with the following structure:

{
  "feedback": {
    "rating": {
      "technicalSkills": <number>,
      "communication": <number>,
      "problemSolving": <number>,
      "experience": <number>
    },
    "summary": "<Three-line summary of the interview>",
    "recommendation": "Yes/No",
    "recommendationMessage": "<One-line justification for the recommendation>"
  }
}
`;
