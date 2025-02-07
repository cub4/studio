"use client"

import { auth } from "@/lib/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
    user: User | null;
    loading: boolean;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, []);

    const logout = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return <AuthContext.Provider value={{user, loading, logout}}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}