"use client"

import { ThemeProvider } from "@/providers/theme-provider";
import { UserProvider } from "@/providers/UserProvider";

const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <UserProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </UserProvider>
    );
};

export default Providers;