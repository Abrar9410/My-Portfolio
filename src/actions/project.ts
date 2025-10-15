"use server"

import { revalidateTag } from "next/cache";
import { getCookie } from "./cookies";


export const addProject = async (payload: FormData) => {
    const token = await getCookie("token");
        if (!token) {
            return {
                success: false,
                message: "Authorization Token Missing! Please Login."
            };
        };
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/add-project`, {
            method: "POST",
            headers: {Cookie: `token=${token.value}`},
            body: payload,
            credentials: "include",
        });

        if (res.ok) {
            revalidateTag("PROJECTS");
        };
         
        return await res.json();
};

export const getAllProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
        next: {
            tags: ["PROJECTS"]
        }
    });

    return await res.json();
};

export const getSingleProject = async (projectTitle: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectTitle}`);

    return await res.json();
};