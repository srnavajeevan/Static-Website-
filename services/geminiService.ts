
import { GoogleGenAI, Type } from "@google/genai";
import { FarmingTip } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.error("API_KEY is not set in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const tipSchema = {
    type: Type.OBJECT,
    properties: {
        title: { type: Type.STRING, description: 'A catchy title for the farming tip.' },
        introduction: { type: Type.STRING, description: 'A brief introduction to the topic.' },
        steps: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: 'A list of actionable steps or key points.'
        },
    },
    required: ['title', 'introduction', 'steps'],
};


export const getFarmingTip = async (topic: string): Promise<FarmingTip | null> => {
    if (!API_KEY) {
        throw new Error("API key is not configured.");
    }
    
    try {
        const prompt = `You are an expert agricultural advisor. Provide a concise, actionable farming tip about "${topic}".`;
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: tipSchema,
                temperature: 0.7,
                topP: 1,
            },
        });
        
        const jsonText = response.text.trim();
        const parsedJson = JSON.parse(jsonText);
        return parsedJson as FarmingTip;

    } catch (error) {
        console.error("Error fetching farming tip from Gemini API:", error);
        return null;
    }
};
