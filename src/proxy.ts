import { NextRequest, NextResponse } from "next/server";
import { deleteCookie, getCookie, getNewAccessToken } from "./lib/cookies-tokens";
import { verifyToken } from "./lib/jwtHandlers";


export const proxy = async (request: NextRequest) => {
    const hasTokenRefreshedParam = request.nextUrl.searchParams.has('tokenRefreshed');

    // If coming back after token refresh, remove the param and continue
    if (hasTokenRefreshedParam) {
        const url = request.nextUrl.clone();
        url.searchParams.delete('tokenRefreshed');
        return NextResponse.redirect(url);
    };

    const tokenRefreshResult = await getNewAccessToken();

    // If token was refreshed, redirect to same page to fetch with new token
    if (tokenRefreshResult?.tokenRefreshed) {
        const url = request.nextUrl.clone();
        url.searchParams.set('tokenRefreshed', 'true');
        return NextResponse.redirect(url);
    };

    const token = await getCookie("token") || null;

    if (token) {
        const verifiedToken = await verifyToken(token.value as string);

        if (!verifiedToken.success) {
            await deleteCookie("token");
            await deleteCookie("refreshToken");
            return NextResponse.redirect(new URL('/login', request.url));
        };
    } else {
        return NextResponse.redirect(new URL('/login', request.url));
    };
};

export const config = {
    matcher: ["/dashboard", "/dashboard/:path*"]
};