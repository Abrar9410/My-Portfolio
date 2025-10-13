"use server"

import { revalidateTag } from "next/cache";
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

        if (res.ok) {
            revalidateTag("BLOGS");
        };
         
        return await res.json();
};

export const getAllBlogs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
        next: {
            tags: ["BLOGS"]
        }
    });

    return await res.json();
};

export const getSingleBlog = async (blogId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${blogId}`);

    return await res.json();
};