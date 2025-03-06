"use client";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logout } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/contants";

export default function Navbar() {
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  const navlink = (
    <>
      <li
        className={
          pathname === "/"
            ? "font-bold py-2 md:px-0 px-4 text-blue-500"
            : "py-2 md:px-0 px-4 hover:font-bold cursor-pointer"
        }
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={
          pathname === "/about-us"
            ? "font-bold py-2 md:px-0 px-4 text-blue-500"
            : "py-2 md:px-0 px-4 hover:font-bold cursor-pointer"
        }
      >
        <Link href="/about-us">AboutUs</Link>
      </li>
      <li
        className={
          pathname === "/rental-house"
            ? "font-bold py-2 md:px-0 px-4 text-blue-500"
            : "py-2 md:px-0 px-4 hover:font-bold cursor-pointer"
        }
      >
        <Link href="/rental-house">RentalHouse</Link>
      </li>
    </>
  );

  return (
    <header className="border-b bg-background w-full sticky top-0 z-10">
      <div className="container flex justify-between items-center mx-auto h-16 px-5">
        <div className="flex items-center">
          <div className="relative lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="absolute mt-3 z-10 p-2 shadow-md bg-white rounded-md w-52"
            >
              {navlink}
            </ul>
          </div>
          <Link href="/">
            <h1 className="text-2xl font-black flex items-center">
              House Finder
            </h1>
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex space-x-6 text-gray-800">{navlink}</ul>
        </div>

        <nav className="flex gap-2">
          {user?.email ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>User</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={`/${user?.role}/dashboard`}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="bg-red-500 cursor-pointer"
                    onClick={handleLogOut}
                  >
                    <LogOut />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href="/login">
              <Button className="rounded-full" variant="outline">
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
