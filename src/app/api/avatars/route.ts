import { getJWEToken } from "@/lib/customAxios";
import { NextRequest, NextResponse } from "next/server";

import axios from "axios";

export async function PUT(req: NextRequest) {
  const jweToken = await getJWEToken(req);
  const formData = await req.formData();
  const avatarFile = formData.get("avatar");

  if (!avatarFile || !(avatarFile instanceof Blob)) {
    return new NextResponse("No file uploaded", { status: 400 });
  }

  const data = new FormData();
  data.append("avatar", avatarFile);

  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/avatars`,
    data,
    {
      headers: { Authorization: `Bearer ${jweToken}` },
    }
  );

  return new NextResponse(JSON.stringify(res.data), { status: res.status });
}
