import { OpenAI } from "openai";

const client = new OpenAI({
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseURL: process.env.DASHSCOPE_BASE_URL,
});

export function chat(messages) {
  return client.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      ...messages,
    ],
    model: "qwen-turbo-latest",
  });
}
