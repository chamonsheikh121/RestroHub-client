import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X, Trash2 } from "lucide-react";

const tables = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  seats: [2, 4, 6, 4, 2, 8, 4, 6, 2, 4, 4, 6, 2, 4, 8, 4, 2, 6][i],
  status: i < 5 ? "Occupied" : i < 8 ? "Reserved" : "Available",
}));

const statusStyle: Record<string, string> = {
  Available: "border-success/30 bg-success/5",
  Occupied: "border-destructive/30 bg-destructive/5",
  Reserved: "border-warning/30 bg-warning/5",
};

const dotStyle: Record<string, string> = {
  Available: "bg-success",
  Occupied: "bg-destructive",
  Reserved: "bg-warning",
};

const tableIcon = "🪑";

export default function Tables() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ tableNumber: "", seats: "" });

  const handleSubmit = () => {
    if (formData.tableNumber && formData.seats) {
      setFormData({ tableNumber: "", seats: "" });
      setShowModal(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Table Management</h1>
            <p className="text-sm text-muted-foreground">Manage restaurant table layout</p>
          </div>
          <Button onClick={() => setShowModal(true)}><Plus className="h-4 w-4 mr-1" /> Add Table</Button>
        </div>

        <div className="flex gap-4 text-sm">
          {["Available", "Occupied", "Reserved"].map(s => (
            <div key={s} className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${dotStyle[s]}`} />
              <span className="text-muted-foreground">{s}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tables.map(t => (
            <Card key={t.id} className={`shadow-card hover:shadow-elevated transition-all duration-200 cursor-pointer border-2 group relative ${statusStyle[t.status]}`}>
              <CardContent className="p-5 text-center">
                <div className="text-3xl mb-1">{tableIcon}</div>
                <p className="text-2xl font-bold text-foreground">T{t.id}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.seats} Seats</p>
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <span className={`h-2 w-2 rounded-full ${dotStyle[t.status]}`} />
                  <span className="text-xs font-medium text-muted-foreground">{t.status}</span>
                </div>
                <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Trash2 className="h-3 w-3 text-destructive" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Table Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Add New Table</h2>
                  <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label>Table Number</Label>
                    <Input placeholder="e.g., 19" type="number" value={formData.tableNumber} onChange={(e) => setFormData({...formData, tableNumber: e.target.value})} className="mt-1" />
                  </div>

                  <div>
                    <Label>Number of Seats</Label>
                    <select value={formData.seats} onChange={(e) => setFormData({...formData, seats: e.target.value})} className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background">
                      <option value="">Select seats</option>
                      <option value="2">2 Seats</option>
                      <option value="4">4 Seats</option>
                      <option value="6">6 Seats</option>
                      <option value="8">8 Seats</option>
                    </select>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" className="flex-1" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button className="flex-1" onClick={handleSubmit}>Add Table</Button>
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
