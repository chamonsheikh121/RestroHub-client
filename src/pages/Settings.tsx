import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, Upload } from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in max-w-3xl">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Business Settings</h1>
          <p className="text-sm text-muted-foreground">Manage your restaurant configuration</p>
        </div>

        <Card className="shadow-card">
          <CardHeader><CardTitle className="text-base">Restaurant Profile</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-2xl gradient-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">JB</span>
              </div>
              <Button variant="outline" size="sm"><Upload className="h-4 w-4 mr-1" /> Upload Logo</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><Label>Restaurant Name</Label><Input defaultValue="John's Bistro" className="mt-1.5" /></div>
              <div><Label>Owner Name</Label><Input defaultValue="John Doe" className="mt-1.5" /></div>
              <div><Label>Email</Label><Input defaultValue="john@bistro.com" className="mt-1.5" /></div>
              <div><Label>Phone</Label><Input defaultValue="+1 234 567 890" className="mt-1.5" /></div>
              <div className="md:col-span-2"><Label>Address</Label><Input defaultValue="123 Restaurant St, Food City" className="mt-1.5" /></div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader><CardTitle className="text-base">Tax & Currency</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><Label>Tax Rate (%)</Label><Input defaultValue="8" type="number" className="mt-1.5" /></div>
              <div>
                <Label>Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button size="lg"><Save className="h-4 w-4 mr-2" /> Save Changes</Button>
      </div>
    </DashboardLayout>
  );
}
