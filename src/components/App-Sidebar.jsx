import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      items: [
        {
          title: "Breaking News",
          url: "/breakingnews",
        },
        {
          title: "Trending",
          url: "/trending",
        },
      ],
    },
    {
      title: "Catagories",
      items: [
        {
          title: "Politics",
          url: "/category/politics",
        },
        {
          title: "Technology",
          url: "/category/technology",
          isActive: true,
        },
        {
          title: "Business",
          url: "/category/business",
        },
        {
          title: "Sports",
          url: "/category/sports",
        },
        {
          title: "Entertainment",
          url: "/category/entertainment",
        },
        {
          title: "Health",
          url: "/category/health",
        },
      ],
    },
    {
      title: "My News",
      items: [
        { title: "Saved Articles", url: "/saved" },
        { title: "Reading History", url: "/history" },
      ],
    },
    {
      title: "Settings",
      items: [
        { title: "Profile", url: "/profile" },
        { title: "Preferences", url: "/preferences" },
      ],
    },

    {
      title: "Community",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "/community",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">News Laters</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
