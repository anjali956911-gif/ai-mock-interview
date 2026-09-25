import OpenAI from "openai";

console.log("✅ OpenRouter AI Service Initialized");


const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});


export const generateInterviewQuestions = async ({
  role,
  company,
  experience,
  difficulty,
  type,
  questions,
}) => {

  try {

    console.log("Generating AI Questions...");


    const prompt = `
You are an expert interviewer.

Generate ${questions} ${difficulty} level ${type} interview questions.

Role: ${role}
Company: ${company}
Experience: ${experience}

Return ONLY a JSON array.

Example:
[
 "Explain React hooks.",
 "What is JWT authentication?"
]
`;


    const completion =
      await client.chat.completions.create({

        model: "openai/gpt-4o-mini",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],

        temperature: 0.7,

      });


    const response =
      completion.choices[0].message.content;


    console.log("AI RESPONSE:", response);


    const cleaned =
      response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();


    return JSON.parse(cleaned);


  } catch(error) {

    console.log("==============================");
    console.log(
      "OPENROUTER ERROR:",
      error.response?.data || error.message
    );
    console.log("==============================");


    throw new Error(
      "Failed to generate interview questions."
    );

  }

};