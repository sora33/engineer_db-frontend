import { NextRequest } from "next/server";
import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";
import { getToken } from "next-auth/jwt";

const options = {
  ignoreHeaders: true,
};

export const customAxios = applyCaseMiddleware(
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  options
);

export async function getJWEToken(req: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET;
  return await getToken({ req, secret, raw: true });
}

customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    switch (error.response.status) {
      case 400:
        throw error;
      case 401:
        alert("ログインしてください");
        break;
      case 403:
        alert("権限がありません。");
        break;
      case 404:
        break;
      case 500:
        console.log("サーバー内部エラーが発生しました");
        break;
      default:
        console.log("予期しないエラーが発生しました");
        break;
    }
  }
);
