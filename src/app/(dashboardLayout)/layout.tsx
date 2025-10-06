import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggler } from "@/components/ThemeToggler";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
                    <SidebarTrigger className="-ml-1 cursor-pointer" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <ThemeToggler/>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default DashboardLayout;