import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center">
              <ShoppingCart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">RestroHub</span>
          </div>

          {!submitted ? (
            <>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Forgot your password?</h1>
                <p className="text-muted-foreground mt-1">No worries! We'll send you instructions to reset it.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Email Address</Label>
                  <Input
                    placeholder="john@restaurant.com"
                    type="email"
                    className="mt-1.5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={!email}>
                  Send Reset Link
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => navigate("/dashboard")}
                >
                   Demo Login
                </Button>
              </form>

              <div className="flex items-center gap-2 text-sm">
                <ArrowLeft className="h-4 w-4" />
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Back to login
                </Link>
              </div>
            </>
          ) : (
            <div className="space-y-6 text-center">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">Check your email</h2>
                <p className="text-muted-foreground mt-2">
                  We've sent a password reset link to <span className="font-medium text-foreground">{email}</span>
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-blue-900 dark:text-blue-400">
                <p>
                  The link will expire in 24 hours. If you don't see the email, check your spam folder or try again.
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => navigate("/dashboard")}
                >
                   Demo Login
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => setSubmitted(false)}
                >
                  Try another email
                </Button>
              </div>

              <Link to="/login" className="text-sm text-primary hover:underline font-medium block">
                Back to login
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Right - Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 to-blue-600 items-center justify-center p-12">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="text-8xl">🔐</div>
          <h2 className="text-3xl font-bold text-white">Reset Your Password</h2>
          <p className="text-indigo-100 max-w-md">
            Your account security is our priority. We'll help you regain access to your restaurant dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
