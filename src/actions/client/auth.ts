import { FieldValues } from "react-hook-form";

export const login = async (data: FieldValues) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
        credentials: "include"
    });
    
    const loginInfo = await res.json();

    return loginInfo;
};

export const logout = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/logout`, {
        method: "POST",
        credentials: "include"
    });

    return await res.json();
};