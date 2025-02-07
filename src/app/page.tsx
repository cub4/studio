"use client"

import {useAuth} from "@/context/AuthContext";
import {Button} from "@/components/ui/button";

export default function Home() {
  const {logout, user} = useAuth();
  return (
    <div>
      <h1>Hi! {user?.displayName}</h1>
      <Button onClick={logout} variant="secondary">Logout</Button>
    </div>
  );
}
