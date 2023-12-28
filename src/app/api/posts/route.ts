import { getJWEToken } from "@/lib/customAxios";
import { customAxios } from "@/lib/customAxios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const jweToken = await getJWEToken(req);
  const page = req.nextUrl.searchParams.get("page");

  const res = await customAxios.get(`/api/v1/posts?page=${page}`, {
    headers: { Authorization: `Bearer ${jweToken}` },
  });

  return new NextResponse(JSON.stringify(res.data), { status: res.status });
}

export async function POST(req: NextRequest) {
  const jweToken = await getJWEToken(req);
  const reqBody = await req.json();

  const res = await customAxios.post(`/api/v1/posts`, reqBody, {
    headers: { Authorization: `Bearer ${jweToken}` },
  });

  return new NextResponse(JSON.stringify(res.data), { status: res.status });
}
