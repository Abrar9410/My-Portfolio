import type { IUser } from "@/types";
import { createContext, useContext } from "react";

export type UserContextType = {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within UserProvider");
    return context;
};