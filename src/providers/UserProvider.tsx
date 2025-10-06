"use client"

import { useState, useEffect, type ReactNode } from "react";
import { UserContext } from "@/contexts/UserContext";
import { IUser } from "@/types";
import { getCookie } from "@/actions/cookies";
import jwt from "jsonwebtoken";



export const UserProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<Partial<IUser> | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = await getCookie("token");

                if (!token) {
                    setUser(null);
                    setLoading(false);
                } else {
                    const decodedUser = jwt.decode(token.value) as Partial<IUser>;
                    setUser(decodedUser);
                    setLoading(false);
                };
            } catch {
                setUser(null);
                setLoading(false);
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