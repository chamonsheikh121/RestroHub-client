import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Minus, Plus, Trash2, Printer } from "lucide-react";

const categories = ["All Food", "Burgers", "Chicken", "Pizza", "Drinks", "Desserts", "Sides"];

const foodItems = [
  { id: 1, name: "Classic Burger", price: 12.99, category: "Burgers", image: "🍔" },
  { id: 2, name: "Cheese Burger", price: 14.99, category: "Burgers", image: "🍔" },
  { id: 3, name: "Double Burger", price: 18.99, category: "Burgers", image: "🍔" },
  { id: 4, name: "BBQ Burger", price: 16.99, category: "Burgers", image: "🍔" },
  { id: 5, name: "Spicy Burger", price: 15.99, category: "Burgers", image: "🌶️" },
  { id: 6, name: "Grilled Chicken", price: 15.50, category: "Chicken", image: "🍗" },
  { id: 7, name: "Chicken Wings", price: 11.99, category: "Chicken", image: "🍗" },
  { id: 8, name: "Fried Chicken", price: 13.99, category: "Chicken", image: "🍗" },
  { id: 9, name: "Chicken Tikka", price: 14.99, category: "Chicken", image: "🍗" },
  { id: 10, name: "Margherita Pizza", price: 13.99, category: "Pizza", image: "🍕" },
  { id: 11, name: "Pepperoni Pizza", price: 15.99, category: "Pizza", image: "🍕" },
  { id: 12, name: "Veggie Pizza", price: 14.99, category: "Pizza", image: "🍕" },
  { id: 13, name: "Meat Lovers", price: 17.99, category: "Pizza", image: "🍕" },
  { id: 14, name: "Cola", price: 2.99, category: "Drinks", image: "🥤" },
  { id: 15, name: "Fresh Juice", price: 4.99, category: "Drinks", image: "🧃" },
  { id: 16, name: "Iced Tea", price: 3.99, category: "Drinks", image: "🥶" },
  { id: 17, name: "Coffee", price: 4.49, category: "Drinks", image: "☕" },
  { id: 18, name: "Smoothie", price: 5.99, category: "Drinks", image: "🥤" },
  { id: 19, name: "Chocolate Cake", price: 7.99, category: "Desserts", image: "🍰" },
  { id: 20, name: "Cheesecake", price: 8.99, category: "Desserts", image: "🍰" },
  { id: 21, name: "Ice Cream", price: 5.99, category: "Desserts", image: "🍨" },
  { id: 22, name: "Brownie", price: 6.99, category: "Desserts", image: "🍫" },
  { id: 23, name: "Fries", price: 4.99, category: "Sides", image: "🍟" },
  { id: 24, name: "Onion Rings", price: 5.49, category: "Sides", image: "🧅" },
  { id: 25, name: "Coleslaw", price: 3.99, category: "Sides", image: "🥗" },
  { id: 26, name: "Mac & Cheese", price: 6.99, category: "Sides", image: "🍝" },
];

const tables = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  status: i < 5 ? "occupied" : i < 8 ? "reserved" : "available",
}));

type CartItem = { id: number; name: string; price: number; qty: number; image: string };

export default function POS() {
  const [activeCategory, setActiveCategory] = useState("All Food");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  const filtered = activeCategory === "All Food" ? foodItems : foodItems.filter(f => f.category === activeCategory);

  const addToCart = (item: typeof foodItems[0]) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1, image: item.image }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev.map(c => c.id === id ? { ...c, qty: Math.max(1, c.qty + delta) } : c));
  };

  const removeItem = (id: number) => setCart(prev => prev.filter(c => c.id !== id));

  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handlePrint = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const restaurantName = "RestroHub";
    const receiptItems = cart.map(item => `${item.name.padEnd(20)} x${item.qty}   $${(item.price * item.qty).toFixed(2)}`).join("\n");
    const receipt = `
${restaurantName}
-------------------
${receiptItems}
-------------------
Total       $${subtotal.toFixed(2)}
VAT         $${tax.toFixed(2)}
-------------------
Net         $${total.toFixed(2)}
`;

    const printWindow = window.open("", "", "height=400,width=400");
    if (printWindow) {
      printWindow.document.write(`<pre style="font-family: monospace; font-size: 12px; padding: 20px;">${receipt}</pre>`);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const tableColor: Record<string, string> = {
    available: "bg-success/10 text-success border-success/20 hover:bg-success/20",
    occupied: "bg-destructive/10 text-destructive border-destructive/20",
    reserved: "bg-warning/10 text-warning border-warning/20",
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row gap-4 animate-fade-in h-[calc(100vh-7rem)]">
        {/* Left - Menu */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Controls */}
          <div className="flex flex-wrap gap-3 mb-4">
            <Select defaultValue="dine-in">
              <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="walk-in">Walk-in</SelectItem>
                <SelectItem value="dine-in">Dine-in</SelectItem>
                <SelectItem value="online">Online</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="table">
              <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="table">Table</SelectItem>
                <SelectItem value="takeaway">Takeaway</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="waiter1">
              <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="waiter1">John (Waiter)</SelectItem>
                <SelectItem value="waiter2">Sarah (Waiter)</SelectItem>
                <SelectItem value="waiter3">Mike (Waiter)</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="normal">
              <SelectTrigger className="w-28"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table Grid */}
          <div className="mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">SELECT TABLE</p>
            <div className="grid grid-cols-6 md:grid-cols-9 gap-2">
              {tables.map(t => (
                <button
                  key={t.id}
                  onClick={() => t.status === "available" && setSelectedTable(t.id)}
                  className={`h-10 rounded-lg border text-xs font-semibold transition-all ${tableColor[t.status]} ${selectedTable === t.id ? "ring-2 ring-primary scale-105" : ""} ${t.status !== "available" ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
                >
                  T{t.id}
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === c ? "gradient-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Food Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 overflow-y-auto flex-1">
            {filtered.map(item => {
              const categoryColors: Record<string, string> = {
                "Burgers": "from-gray-200 to-gray-300",
                "Chicken": "from-sky-100 to-blue-100",
                "Pizza": "from-amber-100 to-yellow-100",
                "Drinks": "from-sky-200 to-sky-300",
                "Desserts": "from-rose-100 to-pink-100",
                "Sides": "from-green-100 to-green-200",
              };
              const gradientClass = categoryColors[item.category] || "from-indigo-200 to-blue-300";
              
              return (
                <Card
                  key={item.id}
                  onClick={() => addToCart(item)}
                  className="shadow-sm hover:shadow-card transition-all duration-200 cursor-pointer group hover:scale-105 overflow-hidden border border-border/50 hover:border-primary/30"
                >
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className={`bg-gradient-to-br ${gradientClass}  p-3 text-center relative overflow-hidden flex items-center justify-center h-16`}>
                      <div className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity"></div>
                      <div className="text-3xl group-hover:scale-120 transition-transform duration-300 relative z-10">{item.image}</div>
                    </div>
                    <div className="p-2 text-center flex-1 flex flex-col justify-between">
                      <p className="text-xs font-semibold text-foreground truncate leading-tight">{item.name}</p>
                      <p className="text-xs font-bold text-primary mt-0.5">${item.price.toFixed(2)}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Right - Cart */}
        <div className="w-full lg:w-80 flex flex-col">
          <Card className="shadow-card flex-1 flex flex-col">
            <CardContent className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-foreground mb-3">Current Order</h3>

              <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                {cart.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">No items added yet</p>
                ) : cart.map(item => (
                  <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
                    <span className="text-xl">{item.image}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => updateQty(item.id, -1)} className="h-6 w-6 rounded-md bg-muted flex items-center justify-center hover:bg-accent transition-colors"><Minus className="h-3 w-3" /></button>
                      <span className="text-sm font-semibold w-6 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="h-6 w-6 rounded-md bg-muted flex items-center justify-center hover:bg-accent transition-colors"><Plus className="h-3 w-3" /></button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-destructive hover:text-destructive/80"><Trash2 className="h-4 w-4" /></button>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-3 space-y-2">
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span className="text-foreground">${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Tax (8%)</span><span className="text-foreground">${tax.toFixed(2)}</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Discount</span><span className="text-success">-$0.00</span></div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                  <span className="text-foreground">Total</span><span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 mb-3">
                <span className="text-sm text-muted-foreground">Auto Print</span>
                <Switch />
              </div>

              <Button className="w-full" size="lg" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" /> Create Order & Print
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
