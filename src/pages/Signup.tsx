import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChefHat, Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-12">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="text-8xl">🚀</div>
          <h2 className="text-3xl font-bold text-foreground">Start Your Journey</h2>
          <p className="text-muted-foreground max-w-md">
            Join thousands of restaurants using RestroHub to streamline operations.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
              <ChefHat className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">RestroHub</span>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-foreground">Create your account</h1>
            <p className="text-muted-foreground mt-1">Set up your restaurant in minutes</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label>Restaurant Name</Label>
              <Input placeholder="My Amazing Restaurant" className="mt-1.5" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div><Label>First Name</Label><Input placeholder="John" className="mt-1.5" /></div>
              <div><Label>Last Name</Label><Input placeholder="Doe" className="mt-1.5" /></div>
            </div>
            <div>
              <Label>Email</Label>
              <Input placeholder="john@restaurant.com" type="email" className="mt-1.5" />
            </div>
            <div>
              <Label>Password</Label>
              <div className="relative mt-1.5">
                <Input placeholder="••••••••" type={showPassword ? "text" : "password"} />
                <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button disabled className="w-full" size="lg">Create Account</Button>

            <Button variant="outline" className="w-full" size="lg" onClick={() => navigate("/dashboard")}>
               Demo Login
            </Button>
          </div>

          <p className="text-sm text-center text-muted-foreground">
            Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
