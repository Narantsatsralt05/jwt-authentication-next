import { cookies } from "next/headers";
type User = {
  id: number,
  email: string,
}
export default async function Home() {
  const res = await fetch("http://localhost:3000" + "/users", {
    credentials: "include",
    headers: { Cookie: (await cookies()).toString() },
  });
  const data = await res.json();

  return (
    <h1>
      Zovhon nevtersen hun l orno
      <div>
        {data.map((user:User) => (
          <p>{user.email}</p>
        ))}
      </div>
    </h1>
  );
}
