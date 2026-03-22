"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generatePortfolioContent(userPrompt: string) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
    
    // Updated to the newest model tier that new Google API keys are assigned to
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      You are an expert tech recruiter and copywriter. Based on the user's input, create a professional portfolio profile. 
      Return ONLY a valid JSON object with exactly two keys: "tagline" and "bio". Do not include markdown formatting like \`\`\`json.
      
      - "tagline": A punchy, 1-2 sentence professional summary for the Hero section.
      - "bio": A highly professional, 2-paragraph "About Me" bio highlighting their skills.
      
      User Input: "${userPrompt}"
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    const cleanJson = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleanJson);

  } catch (error) {
    console.error("AI Generation failed:", error);
    // Fallback content just in case the AI fails
    return {
      tagline: "Building modern, responsive, and problem-solving web applications. Let's turn your ideas into reality.",
      bio: "I am a passionate web developer dedicated to crafting seamless digital experiences. With a strong foundation in modern web technologies, I focus on writing clean, maintainable code."
    };
  }
}