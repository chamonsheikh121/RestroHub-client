import {
  LayoutDashboard, ShoppingCart, ClipboardList, UtensilsCrossed,
  Grid3X3, Users, BarChart3, Settings, ChefHat, LogOut, ChevronsUpDown
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarFooter, SidebarHeader, useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "POS / Orders", url: "/pos", icon: ShoppingCart },
  { title: "Order Management", url: "/orders", icon: ClipboardList },
  { title: "Menu Management", url: "/menu", icon: UtensilsCrossed },
  { title: "Tables", url: "/tables", icon: Grid3X3 },
  { title: "Staff", url: "/staff", icon: Users },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
            <ChefHat className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="animate-fade-in">
              <h2 className="text-sm font-bold text-foreground">RestroHub</h2>
              <p className="text-xs text-muted-foreground">Restaurant SaaS</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground">
            {!collapsed && "Main Menu"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/dashboard"}
                      className="rounded-lg transition-all duration-200 hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        {!collapsed && (
          <div className="rounded-lg border border-border bg-secondary/50 p-3 animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">JD</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">John's Bistro</p>
                  <p className="text-[10px] text-muted-foreground">Pro Plan</p>
                </div>
              </div>
              <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
