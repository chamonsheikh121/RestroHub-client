import { DashboardLayout } from "@/components/DashboardLayout";
import { Link } from "react-router-dom";
import {
  ShoppingCart, DollarSign, Grid3X3, Users, TrendingUp,
  ArrowUpRight, Plus, UtensilsCrossed
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const stats = [
  { label: "Total Orders", value: "284", change: "+12%", icon: ShoppingCart, color: "bg-accent text-accent-foreground" },
  { label: "Revenue Today", value: "$4,832", change: "+8%", icon: DollarSign, color: "bg-success/10 text-success" },
  { label: "Active Tables", value: "12/18", change: "67%", icon: Grid3X3, color: "bg-info/10 text-info" },
  { label: "Staff Online", value: "8", change: "Active", icon: Users, color: "bg-warning/10 text-warning" },
];

const chartData = [
  { day: "Mon", revenue: 2400 }, { day: "Tue", revenue: 1398 },
  { day: "Wed", revenue: 3200 }, { day: "Thu", revenue: 2780 },
  { day: "Fri", revenue: 4890 }, { day: "Sat", revenue: 5390 },
  { day: "Sun", revenue: 4490 },
];

const recentOrders = [
  { id: "#1042", table: "Table 5", items: 3, total: "$42.50", status: "Completed" },
  { id: "#1041", table: "Table 2", items: 5, total: "$78.00", status: "Preparing" },
  { id: "#1040", table: "Takeaway", items: 2, total: "$24.90", status: "Pending" },
  { id: "#1039", table: "Table 8", items: 4, total: "$56.30", status: "Completed" },
  { id: "#1038", table: "Online", items: 1, total: "$15.00", status: "Delivered" },
];

const statusColor: Record<string, string> = {
  Completed: "bg-success/10 text-success",
  Preparing: "bg-warning/10 text-warning",
  Pending: "bg-info/10 text-info",
  Delivered: "bg-accent text-accent-foreground",
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, John! Here's your restaurant overview.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Plus className="h-4 w-4 mr-1" /> New Order</Button>
            <Button size="sm"><UtensilsCrossed className="h-4 w-4 mr-1" /> Add Item</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label} className="shadow-card hover:shadow-elevated transition-shadow duration-300">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{s.value}</p>
                  </div>
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${s.color}`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs">
                  <TrendingUp className="h-3 w-3 text-success" />
                  <span className="text-success font-medium">{s.change}</span>
                  <span className="text-muted-foreground">vs yesterday</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold">Sales Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(252, 56%, 57%)" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="hsl(252, 56%, 57%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(230, 18%, 90%)" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(230, 10%, 46%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(230, 10%, 46%)" />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(252, 56%, 57%)" fill="url(#colorRevenue)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold">Recent Orders</CardTitle>
                <Button variant="link" size="sm" className="text-xs">View All <ArrowUpRight className="h-3 w-3 ml-1" /></Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentOrders.map((o) => (
                <div key={o.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{o.id}</p>
                    <p className="text-xs text-muted-foreground">{o.table} · {o.items} items</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{o.total}</p>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusColor[o.status]}`}>{o.status}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: "Create Order", desc: "Start a new POS order", icon: ShoppingCart, href: "/pos" },
            { title: "Add Menu Item", desc: "Add food to your menu", icon: UtensilsCrossed, href: "/menu" },
            { title: "Manage Tables", desc: "View table layout", icon: Grid3X3, href: "/tables" },
          ].map((a) => (
            <Link key={a.title} to={a.href}>
              <Card className="shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group h-full">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                    <a.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{a.title}</p>
                    <p className="text-xs text-muted-foreground">{a.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
