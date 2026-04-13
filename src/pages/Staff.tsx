import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X, MoreVertical, Trash2, Clock, Calendar } from "lucide-react";

const staffMembers = [
  { id: 1, name: "John Doe", role: "Admin", phone: "01712345678", online: true, tasks: 12 },
  { id: 2, name: "Sarah Smith", role: "Waiter", phone: "01823456789", online: true, tasks: 8 },
  { id: 3, name: "Mike Johnson", role: "Waiter", phone: "01934567890", online: true, tasks: 6 },
  { id: 4, name: "Emily Davis", role: "Chef", phone: "01645678901", online: false, tasks: 15 },
  { id: 5, name: "David Wilson", role: "Waiter", phone: "01756789012", online: true, tasks: 4 },
  { id: 6, name: "Lisa Brown", role: "Cashier", phone: "01867890123", online: true, tasks: 9 },
];

export default function Staff() {
  const [showModal, setShowModal] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", role: "", phone: "", hireDate: "" });

  const handleSubmit = () => {
    if (formData.name && formData.role && formData.phone) {
      setFormData({ name: "", role: "", phone: "", hireDate: "" });
      setShowModal(false);
    }
  };

  const handleMenuAction = (id: number, action: string) => {
    console.log(`Action "${action}" on staff member ${id}`);
    setOpenMenu(null);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Staff Management</h1>
            <p className="text-sm text-muted-foreground">Manage your restaurant team</p>
          </div>
          <Button onClick={() => setShowModal(true)}><Plus className="h-4 w-4 mr-1" /> Add Staff</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {staffMembers.map(s => (
            <Card key={s.id} className="shadow-card hover:shadow-elevated transition-all duration-200 group">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                      {s.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.role}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setOpenMenu(openMenu === s.id ? null : s.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-muted rounded"
                    >
                      <MoreVertical className="h-4 w-4 text-muted-foreground" />
                    </button>

                    {/* Dropdown Menu */}
                    {openMenu === s.id && (
                      <div className="absolute right-0 top-8 bg-background border border-border rounded-lg shadow-lg z-50 w-48">
                        <button
                          onClick={() => handleMenuAction(s.id, "pending")}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 text-foreground first:rounded-t-lg"
                        >
                          <Clock className="h-4 w-4" /> Mark as Pending
                        </button>
                        <button
                          onClick={() => handleMenuAction(s.id, "leave")}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 text-foreground"
                        >
                          <Calendar className="h-4 w-4" /> On Leave
                        </button>
                        <button
                          onClick={() => handleMenuAction(s.id, "delete")}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 text-destructive last:rounded-b-lg border-t border-border"
                        >
                          <Trash2 className="h-4 w-4" /> Delete Staff
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2 text-sm mt-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="text-foreground font-medium">{s.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className={`font-medium ${s.online ? "text-success" : "text-muted-foreground"}`}>
                      {s.online ? "🟢 Online" : "⚫ Offline"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tasks:</span>
                    <span className="text-foreground font-medium">{s.tasks} active</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Staff Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Add New Staff Member</h2>
                  <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label>Staff Name</Label>
                    <Input placeholder="Full name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="mt-1" />
                  </div>

                  <div>
                    <Label>Role</Label>
                    <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background">
                      <option value="">Select role</option>
                      <option value="Admin">Admin</option>
                      <option value="Chef">Chef</option>
                      <option value="Waiter">Waiter</option>
                      <option value="Cashier">Cashier</option>
                    </select>
                  </div>

                  <div>
                    <Label>Phone Number</Label>
                    <Input placeholder="e.g., 01712345678" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="mt-1" />
                  </div>

                  <div>
                    <Label>Hire Date</Label>
                    <Input type="date" value={formData.hireDate} onChange={(e) => setFormData({...formData, hireDate: e.target.value})} className="mt-1" />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" className="flex-1" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button className="flex-1" onClick={handleSubmit}>Add Staff</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
