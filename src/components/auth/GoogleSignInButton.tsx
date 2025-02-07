"use client"

import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "../ui/button";
import {FcGoogle} from "react-icons/fc";

const GoogleSignInButton = () => {
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <Button variant="default" onClick={handleGoogleSignIn}>
            <FcGoogle />
            Login with Google
        </Button>
    )
}

export default GoogleSignInButton;