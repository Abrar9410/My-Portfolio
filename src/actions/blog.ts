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

export const getAllBlogs = async (query?: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs${query || ""}`, {
        next: {
            tags: ["BLOGS"]
        }
    });

    return await res.json();
};

export const getSingleBlog = async (blogId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${blogId}`, {
        next: {
            tags: [`BLOG-${blogId}`]
        }
    });

    return await res.json();
};

export const editBlog = async (blogId: string, payload: FormData) => {
    const token = await getCookie("token");
    if (!token) {
        return {
            success: false,
            message: "Authorization Token Missing! Please Login."
        };
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/update-blog/${blogId}`, {
        method: "PATCH",
        headers: { Cookie: `token=${token.value}` },
        body: payload,
        credentials: "include",
    });

    if (res.ok) {
        revalidateTag("BLOGS");
        revalidateTag(`BLOG-${blogId}`);
    };

    return await res.json();
};

export const deleteBlog = async (blogId: string) => {
    const token = await getCookie("token");
    if (!token) {
        return {
            success: false,
            message: "Authorization Token Missing! Please Login."
        };
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/delete-blog/${blogId}`, {
        method: "DELETE",
        headers: { Cookie: `token=${token.value}` },
        credentials: "include",
    });

    if (res.ok) {
        revalidateTag("BLOGS");
        revalidateTag(`BLOG-${blogId}`);
    };

    return await res.json();
};