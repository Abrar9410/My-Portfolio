"use client"

import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import ConfirmationAlert from "./ConfirmationAlert";
import { LogOut } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/actions/client/auth";


const navMain = [
  {
    title: "Manage Portfolio",
    url: "/dashboard",
    items: [
      {
        title: "Profile",
        url: "/dashboard/profile",
      },
      {
        title: "Add Project",
        url: "/dashboard/add-project",
      },
      {
        title: "Create Blog",
        url: "/dashboard/create-blog",
      },
      {
        title: "Manage Projects",
        url: "/dashboard/manage-projects",
      },
      {
        title: "Manage Blogs",
        url: "/dashboard/manage-blogs",
      },
    ],
  }
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const { setUser } = useUser();
  const router = useRouter();
  const location = usePathname();

  const handleLogout = async () => {
    // const toastId = toast.loading("Logging Out...");
    const res = await logout();
    if (res.success) {
      setUser(null);
      // toast.success("Logged Out Successfully", { id: toastId });
      router.push("/");
    } else {
      // toast.error("Failed to Logout! Please try again.", { id: toastId });
      console.log(res);
    };
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href="/" className="mt-2 ml-5">
          <Image src="/my_logo.PNG" alt="Logo" width={50} height={50} />
        </Link>
      </SidebarHeader>
      <SidebarContent className="pl-3">
        {/* We create a SidebarGroup for each parent. */}
        {navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.url === location}>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter className="pl-3">
        <ConfirmationAlert onConfirm={handleLogout} dialogDescription="You are going to log out from your account.">
          <SidebarMenuButton className="cursor-pointer hover:text-red-500 mb-2">
            <p className="flex items-center gap-1"><LogOut className="h-5" />Logout</p>
          </SidebarMenuButton>
        </ConfirmationAlert>
      </SidebarFooter>
    </Sidebar>
  )
}
