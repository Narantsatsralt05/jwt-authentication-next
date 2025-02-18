import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const BASE_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL ??
    process.env.NEXT_PUBLIC_LOCAL_BACKEND_URL;
  const { email, password } = await request.json();
  const cookieStore = await cookies();

  const res = await axios.post(BASE_URL + "/auth/sign-in", {
    email,
    password,
  });

  cookieStore.set('accessToken', res.data.result.accessToken)
  cookieStore.set('refreshToken', res.data.result.refreshToken)

  return NextResponse.json({ ...res.data })

}
