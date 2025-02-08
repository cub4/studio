"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {AuthProvider, useAuth} from "@/context/AuthContext";
import React, {ReactNode} from "react";
import Header from "@/components/header";
import {ThemeProvider} from "next-themes";
import Login from "@/app/login/page";

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
    if (loading) {
        return (<div></div>)
    }
    if(!user) {
        return (<Login />)
    }
    if (user) {
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
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
        >
            <AuthProvider>
                <AuthGuard>
                    <div>
                        <Header />
                        {children}
                    </div>
                </AuthGuard>
            </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
