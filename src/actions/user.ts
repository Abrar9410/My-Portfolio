"use server"

import { FieldValues } from "react-hook-form";
import { getCookie } from "./cookies";

export const getMe = async () => {
    const token = await getCookie("token");
    if (!token) {
        return null;
    };
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/me`, {
        headers: {Cookie: `token=${token.value}`},
        credentials: "include",
    });

    if (!res.ok) {
        return null;
    };
    const data = await res.json(); 
    return data.data;
};

export const updateUser = async (userId: string, data: FieldValues) => {
    const token = await getCookie("token");
    if (!token) {
        return null;
    };
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/update-user/${userId}`, {
        headers: {Cookie: `token=${token.value}`},
        body: JSON.stringify(data),
        credentials: "include",
    });

    if (!res.ok) {
        return res;
    };
     
    return await res.json();
};