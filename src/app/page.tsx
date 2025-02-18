"use client";

import { useEffect } from "react";
export default function Home() {
  const getUsers = async () => {
    console.log(document.cookie);

    const res = await fetch(
      "https://jwt-authentication-express-prisma-postgre.onrender.com/users",
      {
        credentials: "include",
      }
    );
    const result = await res.json();
    console.log(result)
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <h1>Zovhon nevtersen hun l orno</h1>;
}
