"use client";

import { useEffect } from "react";
export default function Home() {
  const getUsers = async () => {
    const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? process.env.NEXT_PUBLIC_LOCAL_BACKEND_URL

    const res = await fetch(
      BASE_URL + "/users",
      {
        credentials: "include",
      }
    );
    const result = await res.json();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <h1>Zovhon nevtersen hun l orno</h1>;
}
