// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Question_PROMPT } from "@/services/Constants";
// import OpenAI from "openai";
// export async function POST(request: Request) {
//   const { jobPosition, jobDescription, duration, type } = await request.json();
//   console.log("jobPosition", jobPosition);
//   console.log("jobDescription", jobDescription);
//   console.log("duration", duration);
//   console.log("type", type);

//   const FINAL_PROMPT = Question_PROMPT.replaceAll("{{job Title}}", jobPosition)
//     .replaceAll("{{jobDescription}}", jobDescription)
//     .replaceAll("{{duration}}", duration)
//     .replaceAll("{{type}}", type);

//   //   console.log("FINAL_PROMPT", FINAL_PROMPT);

//   try {
//     const openai = new OpenAI({
//       baseURL: "https://openrouter.ai/api/v1",
//       apiKey: process.env.OPENROUTER_API_KEY,
//     });

//     const completion = await openai.chat.completions.create({
//       model: "google/gemini-flash-1.5-8b-exp",
//       messages: [{ role: "user", content: FINAL_PROMPT }],
//     });
//     console.log("gemini=" + completion.choices[0].message);
//     return Response.json(completion.choices[0].message);
//   } catch (error: any) {
//     console.log("error=", error.message);

//     return Response.json({ error: error.message }, { status: 500 });
//   }
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
// import { GetgenerateContent } from "@/lib/ai_model";
// import { Question_PROMPT } from "@/services/Constants";
// // import OpenAI from "openai";

// export async function POST(request: Request) {
//   const { jobPosition, jobDescription, duration, type } = await request.json();

//   const FINAL_PROMPT = Question_PROMPT.replaceAll("{{job Title}}", jobPosition)
//     .replaceAll("{{jobDescription}}", jobDescription)
//     .replaceAll("{{duration}}", duration)
//     .replaceAll("{{type}}", type);

//   try {
//     // const openai = new OpenAI({
//     //   baseURL: "https://openrouter.ai/api/v1",
//     //   apiKey: process.env.OPENROUTER_API_KEY,
//     // });

//     // const completion = await openai.chat.completions.create({
//     //   model: "tngtech/deepseek-r1t-chimera:free",
//     //   messages: [{ role: "user", content: FINAL_PROMPT }],
//     // });

//     const completion = await GetgenerateContent(FINAL_PROMPT);

//     const result = completion
//       .replaceAll("```json", "")
//       .replaceAll("```", "")
//       .trim();

//     console.log("completion", result);
//     return Response.json(result);
//   } catch (error: any) {
//     console.error("API Error:", error.message);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// import { GetgenerateContent } from "@/lib/ai_model";
// import { Question_PROMPT } from "@/services/Constants";

// export async function POST(request: Request) {
//   try {
//     const { jobPosition, jobDescription, duration, type } =
//       await request.json();

//     const FINAL_PROMPT = Question_PROMPT.replaceAll(
//       "{{job Title}}",
//       jobPosition
//     )
//       .replaceAll("{{jobDescription}}", jobDescription)
//       .replaceAll("{{duration}}", duration)
//       .replaceAll("{{type}}", type);

//     const completion = await GetgenerateContent(FINAL_PROMPT);

//     const cleanedResult = completion
//       .replace(/```json/g, "")
//       .replace(/```/g, "")
//       .trim();

//     // console.log("completion", cleanedResult);
//     const parsed = JSON.parse(cleanedResult?.interviewQuestions);

//     return new Response(JSON.stringify({ result: cleanedResult }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error: any) {
//     console.error("API Error:", error.message);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

import { GetgenerateContent } from "@/lib/ai_model";
import { Question_PROMPT } from "@/services/Constants";

export async function POST(request: Request) {
  try {
    const { jobPosition, jobDescription, duration, type } =
      await request.json();

    const FINAL_PROMPT = Question_PROMPT.replaceAll(
      "{{job Title}}",
      jobPosition
    )
      .replaceAll("{{jobDescription}}", jobDescription)
      .replaceAll("{{duration}}", duration)
      .replaceAll("{{type}}", type);

    const completion = await GetgenerateContent(FINAL_PROMPT);

    const cleanedResult = completion
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleanedResult); // now this is an object

    // return new Response(JSON.stringify({ result: parsed }), {
    //   status: 200,
    //   headers: { "Content-Type": "application/json" },
    // });

    return Response.json({ result: parsed?.interviewQuestions, status: 200 });
  } catch (error: any) {
    console.error("API Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
