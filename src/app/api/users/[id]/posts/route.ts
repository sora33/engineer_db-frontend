import { getJWEToken } from "@/lib/customAxios";
import { customAxios } from "@/lib/customAxios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const jweToken = await getJWEToken(req);
  const userId = params.id;
  const page = req.nextUrl.searchParams.get("page");

  const res = await customAxios.get(
    `/api/v1/users/${userId}/posts?page=${page}`,
    {
      headers: { Authorization: `Bearer ${jweToken}` },
    }
  );

  return new NextResponse(JSON.stringify(res.data), { status: res.status });
}
