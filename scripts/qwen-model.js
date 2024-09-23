import { OpenAI } from "openai";

const client = new OpenAI({
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseURL: process.env.DASHSCOPE_BASE_URL,
});

export async function chat(messages) {
  const completion = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      ...messages,
    ],
    model: "qwen-turbo-latest",
  });

  return completion.choices[0].message.content;
}
