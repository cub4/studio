"use client"

import { LoginForm } from "@/components/auth/login";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {

    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(!loading && user) {
            router.push("/");
        }
    }, [user, loading, router])
    
    if(loading) {
        return <div></div>
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-8">
            <h1 className="text-3xl font-bold">Wynnscribe Studio</h1>
            <LoginForm />
        </div>
    )
}