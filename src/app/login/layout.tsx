"use client"

import { AuthProvider } from "@/context/AuthContext";

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>
                <AuthProvider>
                    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                        <div className="flex flex-col gap-4 items-center">
                            <h1 className="font-bold text-3xl">Wynnscriber Studio</h1>
                            <div className="w-full max-w-sm">
                                {children}
                            </div>
                        </div>
                    </div>
                </AuthProvider>
            </body>
        </html>
    )
}