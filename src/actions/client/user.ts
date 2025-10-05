

export const getMe = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/me`, {
        credentials: "include",
    });

    return await res.json();
};