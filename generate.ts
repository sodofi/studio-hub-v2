import { OpenAIStream, OpenAIStreamPayload } from "./OpenAIStream";

console.log('hello')
console.log(process.env.OPENAI_API_KEY)
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OPENAI_API_KEY");
}

export const config = {
  runtime: "edge" /* Define API route as an edge function. */,
};

const handler = async (req: Request): Promise<Response> => {
  const { prompt } = (await req.json()) as {
    prompt?: string;
  };

  if (!prompt) {
    return new Response("Missing prompt", { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: "text-davinci-003",
    prompt,
    temperature: 0.4,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 300,
    stream: true,
    n: 1,
  };

  console.log('test 2')
  const stream = await OpenAIStream(payload);
  console.log('test 3')
  console.log(stream)
  return new Response(stream);
};

export default handler;
