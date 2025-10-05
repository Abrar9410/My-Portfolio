"use client"

import { useState, useEffect, type ReactNode } from "react";
import { UserContext } from "@/contexts/UserContext";
import { IUser } from "@/types";
import { getMe } from "@/actions/client/user";



export const UserProvider = ({ children }: { children: ReactNode }) => {
    
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getMe();
                
                if (res.success) {
                    setUser(res.data);
                    setLoading(false);
                } else {
                    setUser(null);
                    setLoading(false);
                };
            } catch {
                setUser(null);
            } 
        };

        fetchUser();
    }, []);


    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                loading,
                setLoading
            }}
        >
            {children}
        </UserContext.Provider>
    );
};