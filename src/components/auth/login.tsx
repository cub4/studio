"use client"

import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import GoogleSignInButton from "./GoogleSignInButton";
import {FaGithub} from "react-icons/fa";

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Login with your Google account or GitHub account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <GoogleSignInButton />
                        <Button variant="outline">
                            <FaGithub />
                            Login with GitHub
                        </Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}