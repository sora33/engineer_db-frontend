import { getJWEToken } from "@/lib/customAxios";
import { customAxios } from "@/lib/customAxios";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const jweToken = await getJWEToken(req);
  const reqBody = await req.json();
  const { userId, ...user } = reqBody;

  const res = await customAxios.put(`/api/v1/users/${userId}`, user, {
    headers: { Authorization: `Bearer ${jweToken}` },
  });

  return new NextResponse(JSON.stringify(res.data), { status: res.status });
}
