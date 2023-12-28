import { getJWEToken } from "@/lib/customAxios";
import { customAxios } from "@/lib/customAxios";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const jweToken = await getJWEToken(req);
  const id = params.id;

  const res = await customAxios.delete(`/api/v1/posts/${id}`, {
    headers: { Authorization: `Bearer ${jweToken}` },
  });

  if (res.status === 204) {
    return new NextResponse(null, { status: res.status });
  } else {
    return new NextResponse(JSON.stringify(res.data), { status: res.status });
  }
}
