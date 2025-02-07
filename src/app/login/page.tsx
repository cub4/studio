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
        <LoginForm />
    )
}