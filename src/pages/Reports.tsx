import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, DollarSign, ShoppingCart } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

const monthlyData = [
  { month: "Jan", revenue: 18200 }, { month: "Feb", revenue: 22100 },
  { month: "Mar", revenue: 19800 }, { month: "Apr", revenue: 24500 },
  { month: "May", revenue: 28900 }, { month: "Jun", revenue: 32100 },
];

const topItems = [
  { name: "Classic Burger", sold: 342, revenue: "$4,443" },
  { name: "Pepperoni Pizza", sold: 289, revenue: "$4,622" },
  { name: "Grilled Chicken", sold: 256, revenue: "$3,968" },
  { name: "Cheese Burger", sold: 198, revenue: "$2,968" },
  { name: "Chicken Wings", sold: 167, revenue: "$2,002" },
];

const pieData = [
  { name: "Dine-in", value: 45 },
  { name: "Takeaway", value: 30 },
  { name: "Online", value: 25 },
];
const COLORS = ["hsl(252, 56%, 57%)", "hsl(210, 80%, 55%)", "hsl(152, 60%, 42%)"];

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Reports</h1>
            <p className="text-sm text-muted-foreground">Sales analytics and insights</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-1" /> Export CSV</Button>
            <Button size="sm"><Download className="h-4 w-4 mr-1" /> Export PDF</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Monthly Revenue", value: "$32,100", icon: DollarSign, change: "+11%" },
            { label: "Total Orders", value: "1,847", icon: ShoppingCart, change: "+8%" },
            { label: "Avg. Order Value", value: "$17.38", icon: TrendingUp, change: "+3%" },
          ].map(s => (
            <Card key={s.label} className="shadow-card">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{s.value}</p>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center text-accent-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-xs text-success mt-2 font-medium">{s.change} vs last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader><CardTitle className="text-base">Monthly Revenue</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(230, 18%, 90%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(230, 10%, 46%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(230, 10%, 46%)" />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="hsl(252, 56%, 57%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader><CardTitle className="text-base">Order Type</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                    {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-2">
                {pieData.map((d, i) => (
                  <div key={d.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                      <span className="text-muted-foreground">{d.name}</span>
                    </div>
                    <span className="font-medium text-foreground">{d.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader><CardTitle className="text-base">Top Selling Items</CardTitle></CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 text-xs font-semibold text-muted-foreground uppercase">Rank</th>
                    <th className="text-left p-3 text-xs font-semibold text-muted-foreground uppercase">Item</th>
                    <th className="text-left p-3 text-xs font-semibold text-muted-foreground uppercase">Sold</th>
                    <th className="text-left p-3 text-xs font-semibold text-muted-foreground uppercase">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {topItems.map((item, i) => (
                    <tr key={item.name} className="border-b border-border last:border-0">
                      <td className="p-3 text-sm font-bold text-primary">#{i + 1}</td>
                      <td className="p-3 text-sm font-medium text-foreground">{item.name}</td>
                      <td className="p-3 text-sm text-muted-foreground">{item.sold}</td>
                      <td className="p-3 text-sm font-semibold text-foreground">{item.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
