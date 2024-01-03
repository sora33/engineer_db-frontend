import { getJWEToken } from "@/lib/customAxios";
import { customAxios } from "@/lib/customAxios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const reqBody = await req.json();
  const jweToken = await getJWEToken(req);
  const userId = params.id;

  const res = await customAxios.post(
    `/api/v1/users/${userId}/messages`,
    reqBody,
    {
      headers: { Authorization: `Bearer ${jweToken}` },
    }
  );
  return new NextResponse(JSON.stringify(res.data), { status: res.status });
}
