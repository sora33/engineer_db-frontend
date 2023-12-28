import { getJWEToken } from "@/lib/customAxios";
import { customAxios } from "@/lib/customAxios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const jweToken = await getJWEToken(req);
  const id = params.id;

  const res = await customAxios.get(`/api/v1/users/${id}`, {
    headers: { Authorization: `Bearer ${jweToken}` },
  });

  return new NextResponse(JSON.stringify(res.data), { status: res.status });
}
