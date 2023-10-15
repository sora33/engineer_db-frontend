import { getJWEToken } from "@/lib/customAxios";
import { customAxios } from "@/lib/customAxios";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const jweToken = await getJWEToken(req);
  const res = await customAxios.get(`/api/v1/users`, {
    headers: { Authorization: `Bearer ${jweToken}` },
  });
  const data = await res.data;

  return Response.json({ ...data });
}

export async function POST(req: NextRequest) {
  const jweToken = await getJWEToken(req);
  const reqBody = await req.json();

  const res = await customAxios.post(`/api/v1/users`, reqBody, {
    headers: { Authorization: `Bearer ${jweToken}` },
  });
  const data = await res?.data;

  return Response.json({ ...data });
}
