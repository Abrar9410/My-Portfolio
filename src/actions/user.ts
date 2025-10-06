"use server"

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

    return await res.json();
};