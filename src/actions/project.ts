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

export const getAllProjects = async (query?: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects${query || ""}`, {
        next: {
            tags: ["PROJECTS"]
        }
    });

    return await res.json();
};

export const getSingleProject = async (projectTitle: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectTitle}`, {
        next: {
            tags: [`PROJECT-${projectTitle.trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "") }`]
        }
    });

    return await res.json();
};

export const updateProject = async (projectId: string, projectTitle: string, payload: FormData) => {
    const token = await getCookie("token");
    if (!token) {
        return {
            success: false,
            message: "Authorization Token Missing! Please Login."
        };
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/update-project/${projectId}`, {
        method: "PATCH",
        headers: { Cookie: `token=${token.value}` },
        body: payload,
        credentials: "include",
    });

    if (res.ok) {
        revalidateTag("PROJECTS");
        revalidateTag(`PROJECT-${projectTitle.trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "") }`);
    };

    return await res.json();
};

export const deleteProject = async (projectId: string, projectTitle: string) => {
    const token = await getCookie("token");
    if (!token) {
        return {
            success: false,
            message: "Authorization Token Missing! Please Login."
        };
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/delete-project/${projectId}`, {
        method: "DELETE",
        headers: { Cookie: `token=${token.value}` },
        credentials: "include",
    });

    if (res.ok) {
        revalidateTag("PROJECTS");
        revalidateTag(`PROJECT-${projectTitle.trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "")}`);
    };

    return await res.json();
};