import { createMatch } from "../../server/controllers/createMatch";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();
  const response = await createMatch(data);
  return response;
}
