"use client";

import { useEffect } from "react";
import Cookies from 'js-cookie'
export default function Home() {
  const getUsers = async () => {
    const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? process.env.NEXT_PUBLIC_LOCAL_BACKEND_URL
    const accessToken =  Cookies.get('accessToken')

    const res = await fetch(
      BASE_URL + "/users",
      {
        headers: {
          Authorization: 'Bearer ' + accessToken
        },
      }
    );
    const result = await res.json();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <h1>Zovhon nevtersen hun l orno</h1>;
}
