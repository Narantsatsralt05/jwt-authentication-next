import { isTokenExpired } from "@/lib/utils";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value
  if (!refreshToken || isTokenExpired(refreshToken))
    return redirect('/login')
  return <>{children}</>;
}
