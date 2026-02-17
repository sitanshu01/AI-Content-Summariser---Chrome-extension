import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function summarizeContent(content: string[]): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Summarize this content in about 200-400 words considering no details is missed out:\n${content.join("\n")}`,
  });

  return response.text ?? "";
}

