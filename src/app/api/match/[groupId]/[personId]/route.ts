import { GetMatch } from "@/app/server/controllers/createMatch";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  cont: {
    params: {
      groupId: string;
      personId: string;
    };
  }
): Promise<NextResponse> {
  const response = await GetMatch(cont.params);
  return response;
}
