"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {AuthProvider, useAuth} from "@/context/AuthContext";
import React, {ReactNode, useEffect} from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const AuthGuard = ({children}: { children: ReactNode }) => {
    const {user, loading} = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        if (!loading && !user && pathname !== "/login") {
            router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
        }
    }, [user, loading, router, pathname])
    if (loading) {
        return (<div></div>)
    }
    if (user || pathname === "/login") {
        return <>{children}</>
    }
    return null
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <AuthGuard>
            <div>
              <Header />
              {children}
            </div>
          </AuthGuard>
        </AuthProvider>
      </body>
    </html>
  );
}
