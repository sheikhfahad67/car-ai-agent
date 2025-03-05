import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import { SYSTEM_PROMPT } from "../constants/system-prompt";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY as string;
const genAI = new GoogleGenerativeAI(apiKey);

export const modelClient = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    systemInstruction: SYSTEM_PROMPT,
});

export const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
};