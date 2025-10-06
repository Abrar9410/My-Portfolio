import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "./actions/cookies"


export const middleware = async (request: NextRequest) => {
    const token = await getCookie("token");
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    };
};

export const config = {
    matcher: ["/dashboard", "/dashboard/:path*"]
};