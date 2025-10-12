"use server"

import { getCookie } from "./cookies";


export const createBlog = async (payload: FormData) => {
    const token = await getCookie("token");
        if (!token) {
            return {
                success: false,
                message: "Authorization Token Missing! Please Login."
            };
        };
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/create-blog`, {
            method: "POST",
            headers: {Cookie: `token=${token.value}`},
            body: payload,
            credentials: "include",
        });
         
        return await res.json();
};