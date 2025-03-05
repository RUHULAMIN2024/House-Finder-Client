"use client";

import * as React from "react";
import {
  HousePlus,
  LetterText,
  SquareTerminal,
  UserCheck2,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  const navAdmin = [
    {
      title: "Dashboard",
      url: `/${user?.role}/dashboard`,
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "User Management",
      url: "/admin/user-management",
      icon: Users,
    },
    {
      title: "House Management",
      url: "/admin/house-management",
      icon: HousePlus,
    },

    {
      title: "Profile",
      url: `/${user?.role}/profile`,
      icon: UserCheck2,
    },
  ];
  const navlandlord = [
    {
      title: "Dashboard",
      url: `/${user?.role}/dashboard`,
      icon: SquareTerminal,
      isActive: true,
    },

    {
      title: "House Management",
      url: "/landlord/house-management",
      icon: HousePlus,
    },
    {
      title: "Request Management",
      url: "/landlord/request-management",
      icon: LetterText,
    },

    {
      title: "Profile",
      url: `/${user?.role}/profile`,
      icon: UserCheck2,
    },
  ];
  const navTenant = [
    {
      title: "Dashboard",
      url: `/${user?.role}/dashboard`,
      icon: SquareTerminal,
      isActive: true,
    },

    {
      title: "Rental Request ",
      url: "/tenant/rental-request",
      icon: LetterText,
    },

    {
      title: "Profile",
      url: `/${user?.role}/profile`,
      icon: UserCheck2,
    },
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">House Finder</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {user?.role === "admin" && <NavMain items={navAdmin} />}
        {user?.role === "landlord" && <NavMain items={navlandlord} />}
        {user?.role === "tenant" && <NavMain items={navTenant} />}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
