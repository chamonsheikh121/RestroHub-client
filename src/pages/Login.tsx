import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ChefHat, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">
      {/* Left - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
              <ChefHat className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">RestroHub</span>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back</h1>
            <p className="text-muted-foreground mt-1">Sign in to manage your restaurant</p>
          </div>

          <div className="space-y-4">
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

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">Forgot password?</Link>
            </div>

            <Button className="w-full" size="lg" onClick={() => navigate("/dashboard")}>Sign In</Button>

            <Button variant="outline" className="w-full" size="lg" onClick={() => navigate("/dashboard")}>
               Demo Login
            </Button>
          </div>

          <p className="text-sm text-center text-muted-foreground">
            Don't have an account? <Link to="/signup" className="text-primary font-medium hover:underline">Sign up</Link>
          </p>
        </div>
      </div>

      {/* Right - Illustration */}
      <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-12">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="text-8xl">🍽️</div>
          <h2 className="text-3xl font-bold text-foreground">Manage Your Restaurant</h2>
          <p className="text-muted-foreground max-w-md">
            Powerful POS system, order management, staff tracking, and analytics — all in one platform.
          </p>
        </div>
      </div>
    </div>
  );
}
