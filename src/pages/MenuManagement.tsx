import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Pencil, Trash2, Search, X } from "lucide-react";

const initialMenuItems = [
  { id: 1, name: "Classic Burger", category: "Burgers", price: 12.99, available: true, image: "🍔" },
  { id: 2, name: "Cheese Burger", category: "Burgers", price: 14.99, available: true, image: "🍔" },
  { id: 3, name: "Grilled Chicken", category: "Chicken", price: 15.50, available: true, image: "🍗" },
  { id: 4, name: "Chicken Wings", category: "Chicken", price: 11.99, available: false, image: "🍗" },
  { id: 5, name: "Margherita Pizza", category: "Pizza", price: 13.99, available: true, image: "🍕" },
  { id: 6, name: "Pepperoni Pizza", category: "Pizza", price: 15.99, available: true, image: "🍕" },
  { id: 7, name: "Cola", category: "Drinks", price: 2.99, available: true, image: "🥤" },
  { id: 8, name: "Chocolate Cake", category: "Desserts", price: 7.99, available: true, image: "🍰" },
];

export default function MenuManagement() {
  const [items, setItems] = useState(initialMenuItems);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", category: "Burgers", price: "", image: "" });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = () => {
    if (formData.name && formData.price && formData.image) {
      if (editingId) {
        setItems(items.map(item => 
          item.id === editingId 
            ? { ...item, name: formData.name, category: formData.category, price: parseFloat(formData.price), image: formData.image }
            : item
        ));
        setEditingId(null);
      } else {
        const newItem = {
          id: Math.max(...items.map(i => i.id), 0) + 1,
          name: formData.name,
          category: formData.category,
          price: parseFloat(formData.price),
          available: true,
          image: formData.image
        };
        setItems([...items, newItem]);
      }
      setFormData({ name: "", category: "Burgers", price: "", image: "" });
      setShowModal(false);
    }
  };

  const handleEdit = (item: typeof initialMenuItems[0]) => {
    setFormData({ name: item.name, category: item.category, price: item.price.toString(), image: item.image });
    setEditingId(item.id);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleAddNew = () => {
    setFormData({ name: "", category: "Burgers", price: "", image: "" });
    setEditingId(null);
    setShowModal(true);
  };

  const handleAvailabilityToggle = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, available: !item.available } : item
    ));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Menu Management</h1>
            <p className="text-sm text-muted-foreground">Add, edit, or remove menu items</p>
          </div>
          <Button onClick={handleAddNew} className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700"><Plus className="h-4 w-4 mr-1" /> Add Item</Button>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-card border border-border px-3 py-1.5 shadow-card hover:shadow-elevated transition-shadow duration-200">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Search menu items..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-transparent text-sm outline-none flex-1 placeholder:text-muted-foreground" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <Card key={item.id} className={`shadow-card hover:shadow-elevated transition-all duration-200 border-2 ${item.available ? 'border-transparent' : 'border-destructive/20'}`}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">{item.image}</div>
                      <div>
                        <p className={`font-semibold ${item.available ? 'text-foreground' : 'text-muted-foreground line-through'}`}>{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                        <p className="text-lg font-bold text-indigo-600 mt-1">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-muted-foreground">Available</span>
                    <Switch checked={item.available} onCheckedChange={() => handleAvailabilityToggle(item.id)} />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-indigo-50 dark:hover:bg-indigo-950" onClick={() => handleEdit(item)}><Pencil className="h-3 w-3 mr-1" /> Edit</Button>
                    <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10" onClick={() => handleDelete(item.id)}><Trash2 className="h-3 w-3" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">No menu items found</p>
            </div>
          )}
        </div>

        {/* Add/Edit Item Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
            <Card className="w-full max-w-md shadow-2xl border border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">{editingId ? "Edit Menu Item" : "Add New Menu Item"}</h2>
                  <button onClick={() => { setShowModal(false); setEditingId(null); }} className="text-muted-foreground hover:text-foreground transition-colors">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-foreground font-medium">Item Name</Label>
                    <Input placeholder="e.g., Grilled Fish" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="mt-1 border-border focus:border-indigo-600 focus:ring-indigo-600/20" />
                  </div>

                  <div>
                    <Label className="text-foreground font-medium">Category</Label>
                    <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground hover:border-indigo-600 focus:border-indigo-600 transition-colors">
                      <option>Burgers</option>
                      <option>Chicken</option>
                      <option>Pizza</option>
                      <option>Drinks</option>
                      <option>Desserts</option>
                      <option>Sides</option>
                    </select>
                  </div>

                  <div>
                    <Label className="text-foreground font-medium">Price ($)</Label>
                    <Input type="number" step="0.01" placeholder="12.99" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="mt-1 border-border focus:border-indigo-600 focus:ring-indigo-600/20" />
                  </div>

                  <div>
                    <Label className="text-foreground font-medium">Emoji Icon</Label>
                    <Input placeholder="🍔" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} className="mt-1 text-2xl border-border focus:border-indigo-600 focus:ring-indigo-600/20" maxLength="2" />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" className="flex-1 border-border hover:bg-muted" onClick={() => { setShowModal(false); setEditingId(null); }}>Cancel</Button>
                    <Button className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700" onClick={handleSubmit}>{editingId ? "Update Item" : "Add Item"}</Button>
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
