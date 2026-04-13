import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, Search } from "lucide-react";

const orders = [
  { id: "#1050", table: "Table 5", waiter: "John", items: 3, total: "$42.50", status: "Completed", time: "2 min ago" },
  { id: "#1049", table: "Table 2", waiter: "Sarah", items: 5, total: "$78.00", status: "Preparing", time: "5 min ago" },
  { id: "#1048", table: "Takeaway", waiter: "Mike", items: 2, total: "$24.90", status: "Pending", time: "8 min ago" },
  { id: "#1047", table: "Table 8", waiter: "John", items: 4, total: "$56.30", status: "Completed", time: "15 min ago" },
  { id: "#1046", table: "Online", waiter: "Sarah", items: 1, total: "$15.00", status: "Delivered", time: "22 min ago" },
  { id: "#1045", table: "Table 1", waiter: "Mike", items: 6, total: "$92.40", status: "Cancelled", time: "30 min ago" },
  { id: "#1044", table: "Table 12", waiter: "John", items: 3, total: "$38.70", status: "Completed", time: "45 min ago" },
  { id: "#1043", table: "Table 3", waiter: "Sarah", items: 2, total: "$21.50", status: "Preparing", time: "1 hr ago" },
  { id: "#1042", table: "Table 7", waiter: "Mike", items: 4, total: "$65.40", status: "Completed", time: "1 hr 15 min ago" },
  { id: "#1041", table: "Table 9", waiter: "John", items: 3, total: "$48.20", status: "Completed", time: "1 hr 30 min ago" },
  { id: "#1040", table: "Counter", waiter: "Sarah", items: 1, total: "$12.99", status: "Delivered", time: "1 hr 45 min ago" },
  { id: "#1039", table: "Table 11", waiter: "Mike", items: 5, total: "$85.60", status: "Completed", time: "2 hrs ago" },
  { id: "#1038", table: "Table 4", waiter: "John", items: 2, total: "$31.50", status: "Completed", time: "2 hrs 15 min ago" },
  { id: "#1037", table: "Online", waiter: "Sarah", items: 3, total: "$55.70", status: "Delivered", time: "2 hrs 30 min ago" },
];

const statusVariant: Record<string, string> = {
  Completed: "bg-success/10 text-success",
  Preparing: "bg-warning/10 text-warning",
  Pending: "bg-info/10 text-info",
  Delivered: "bg-accent text-accent-foreground",
  Cancelled: "bg-destructive/10 text-destructive",
};

export default function Orders() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? orders : orders.filter(o => o.status.toLowerCase() === filter);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Order Management</h1>
            <p className="text-sm text-muted-foreground">Track and manage all orders</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-card border border-border px-3 py-1.5 shadow-card">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Search orders..." className="bg-transparent text-sm outline-none w-48 placeholder:text-muted-foreground" />
          </div>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-36"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="preparing">Preparing</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card className="shadow-card">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Order ID</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Table</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Waiter</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Items</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Time</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filtered.map(o => (
                    <tr key={o.id} className="hover:bg-primary/5 transition-colors duration-150 group">
                      <td className="px-4 py-3 text-sm font-semibold text-primary">{o.id}</td>
                      <td className="px-4 py-3 text-sm text-foreground font-medium">{o.table}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{o.waiter}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{o.items}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-foreground">{o.total}</td>
                      <td className="px-4 py-3"><span className={`text-xs px-3 py-1.5 rounded-full font-semibold ${statusVariant[o.status]}`}>{o.status}</span></td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">{o.time}</td>
                      <td className="px-4 py-3"><Button variant="ghost" size="sm" className="opacity-70 group-hover:opacity-100 transition-opacity"><Eye className="h-4 w-4" /></Button></td>
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
