/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetgenerateContent } from "@/lib/ai_model";
import { FEEDBACK_PROMPT } from "@/services/Constants";
import { NextRequest } from "next/server";
// import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const { conversation } = await request.json();
  console.log("conversation", conversation);

  const FINAL_PROMPT = FEEDBACK_PROMPT.replace(
    "{{conversation}}",
    JSON.stringify(conversation)
  );

  // console.log("FINAL_PROMPT", FINAL_PROMPT);

  try {
    // const openai = new OpenAI({
    //   baseURL: "https://openrouter.ai/api/v1",
    //   apiKey: process.env.OPENROUTER_API_KEY,
    // });
    // const completion = await openai.chat.completions.create({
    //   model: "google/gemini-2.0-flash-exp:free",
    //   messages: [{ role: "user", content: FINAL_PROMPT }],
    // });
    // console.log("completion", completion);
    // console.log("completion message", completion.choices[0].message);
    // return Response.json(completion.choices[0].message);
    // if (
    //   completion &&
    //   completion.choices &&
    //   completion.choices.length > 0 &&
    //   completion.choices[0].message
    // ) {
    //   return new Response(JSON.stringify(completion.choices[0].message), {
    //     headers: { "Content-Type": "application/json" },
    //   });
    // } else {
    //   console.error("Unexpected OpenAI response:", completion);
    //   return new Response(
    //     JSON.stringify({ error: "Invalid response from AI model" }),
    //     { status: 500, headers: { "Content-Type": "application/json" } }
    //   );
    // }

    const completion = await GetgenerateContent(FINAL_PROMPT);
    const cleanedResult = completion
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleanedResult);

    return Response.json({ result: parsed.feedback, status: 200 });
  } catch (error: any) {
    console.error("API Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FEEDBACK_PROMPT } from "@/services/Constants";
// import { NextRequest } from "next/server";
// import OpenAI from "openai";

// export async function POST(request: NextRequest) {
//   try {
//     const requestBody = await request.json();
//     const { conversation } = requestBody || {};

//     if (!conversation) {
//       throw new Error("Conversation data is missing");
//     }

//     console.log("conversation", conversation);

//     const FINAL_PROMPT = FEEDBACK_PROMPT.replace(
//       "{{conversation}}",
//       JSON.stringify(conversation)
//     );

//     console.log("FINAL_PROMPT", FINAL_PROMPT);

//     const openai = new OpenAI({
//       baseURL: "https://openrouter.ai/api/v1",
//       apiKey: process.env.OPENROUTER_API_KEY,
//     });

//     const completion = await openai.chat.completions.create({
//       model: "deepseek/deepseek-prover-v2:free",
//       messages: [{ role: "user", content: FINAL_PROMPT }],
//     });

//     console.log("completion", completion);
//     console.log("completion message", completion.choices[0].message);

//     return new Response(JSON.stringify(completion.choices[0].message), {
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

/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FEEDBACK_PROMPT } from "@/services/Constants";
// import { NextRequest } from "next/server";
// import OpenAI from "openai";

// export async function POST(request: NextRequest) {
//   try {
//     const requestBody = await request.json();
//     const { conversation } = requestBody || {};

//     if (!conversation) {
//       throw new Error("Conversation data is missing");
//     }

//     console.log("conversation", conversation);

//     const FINAL_PROMPT = FEEDBACK_PROMPT.replace(
//       "{{conversation}}",
//       JSON.stringify(conversation)
//     );

//     console.log("FINAL_PROMPT", FINAL_PROMPT);

//     const openai = new OpenAI({
//       baseURL: "https://openrouter.ai/api/v1",
//       apiKey: process.env.OPENROUTER_API_KEY,
//     });

//     const completion = await openai.chat.completions.create({
//       model: "qwen/qwen3-30b-a3b:free",
//       messages: [{ role: "user", content: FINAL_PROMPT }],
//     });

//     console.log("completion", completion);

//     // Check if choices array exists and has elements
//     if (completion.choices && completion.choices.length > 0) {
//       console.log("completion message", completion.choices[0].message);
//       return new Response(JSON.stringify(completion.choices[0].message), {
//         headers: { "Content-Type": "application/json" },
//       });
//     } else {
//       throw new Error("No completion message found");
//     }
//   } catch (error: any) {
//     console.error("API Error:", error.message);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
