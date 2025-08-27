import { NextResponse } from "next/server";

type Payload = {
  prompt?: string;
};

export async function POST(req: Request) {
  const body: Payload = await req.json().catch(() => ({}));
  const prompt = body?.prompt?.trim();

  if (!prompt) {
    return NextResponse.json(
      { error: "Missing 'prompt' in request body." },
      { status: 400 }
    );
  }

  // TODO: Replace with your real provider/model call.
  const mock = {
    ok: true,
    receivedPrompt: prompt,
    // In a real implementation, you might return an image URL, base64, or structured data.
    message: "This is a mock response from the API route. Wire this to your model/provider."
  };

  return NextResponse.json(mock);
}

export async function GET() {
  return NextResponse.json({ ok: true, message: "Health check OK" });
}
