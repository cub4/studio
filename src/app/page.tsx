"use client"

import {useAuth} from "@/context/AuthContext";

export default function Home() {
  const {user} = useAuth();
  return (
    <div>
      <h1>Hi! {user?.displayName}</h1>
    </div>
  );
}
