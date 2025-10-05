"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import { useUser } from "@/contexts/UserContext";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import NavLoading from "./NavLoading";


const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/projects", label: "Projects", role: "PUBLIC" },
  { href: "/blogs", label: "Blogs", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/dashboard", label: "Manage", role: "OWNER" },
];

export default function Navbar() {

  const {user, loading} = useUser();
  const location = usePathname();

  if (loading) {
    return <NavLoading/>;
  };
  
  return (
    <header className="w-11/12 md:w-10/12 mx-auto my-2 bg-foreground dark:bg-black text-white border-b rounded-xl px-4 md:px-6 sticky top-0 z-10 backdrop-blur-md">
      <div className="flex h-16 justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <div className="flex items-center md:hidden">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button className="group size-8" variant="ghost" size="icon">
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-36 p-1 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => (
                      link.role === 'PUBLIC' &&
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className="py-1.5"
                          active={link.href === location}
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                    {user?.email &&
                      <NavigationMenuItem className="w-full">
                        <NavigationMenuLink
                          href="/dashboard"
                          className="py-1.5"
                          active={location === "/dashboard"}
                        >
                          Manage
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    }
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          </div>
          <Link href="/" className="text-primary hover:text-primary/90">
            <Image src="/my_logo.PNG" alt="Logo" width={50} height={50} />
          </Link>
        </div>
        {/* Main nav */}
        <div>
          {/* Navigation menu */}
          <NavigationMenu className="h-full *:h-full max-md:hidden">
            <NavigationMenuList className="h-full gap-2">
              {navigationLinks.map((link, index) => (
                link.role === "PUBLIC" &&
                <NavigationMenuItem key={index} className="h-full">
                  <NavigationMenuLink
                    active={link.href === location}
                    href={link.href}
                    className="text-bg hover:text-portfolio border-b-portfolio hover:border-b-portfolio data-[active]:border-b-portfolio h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent data-[active]:bg-transparent!"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              {user?.email &&
                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink
                    href="/dashboard"
                    className="py-1.5"
                    active={location === "/dashboard"}
                  >
                    Manage
                  </NavigationMenuLink>
                </NavigationMenuItem>
              }
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggler />
          {
            !user?.email ?
              <Link href="/login" className="hover:underline text-sm">Login</Link> :
              <LogOut/>
          }
        </div>
      </div>
    </header>
  )
}
