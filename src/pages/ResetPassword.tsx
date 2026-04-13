import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart, Eye, EyeOff, CheckCircle2 } from "lucide-react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setSubmitted(true);
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
                <h1 className="text-3xl font-bold text-foreground">Create new password</h1>
                <p className="text-muted-foreground mt-1">Enter a new password to secure your account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-600 dark:text-red-400">
                    {error}
                  </div>
                )}

                <div>
                  <Label>New Password</Label>
                  <div className="relative mt-1.5">
                    <Input
                      placeholder="••••••••"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    At least 8 characters, with uppercase, lowercase, and numbers
                  </p>
                </div>

                <div>
                  <Label>Confirm Password</Label>
                  <div className="relative mt-1.5">
                    <Input
                      placeholder="••••••••"
                      type={showConfirm ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showConfirm ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={!password || !confirmPassword}
                >
                  Reset Password
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

              <Link to="/login" className="text-sm text-center text-primary hover:underline font-medium block">
                Back to login
              </Link>
            </>
          ) : (
            <div className="space-y-6 text-center">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">Password reset successful!</h2>
                <p className="text-muted-foreground mt-2">
                  Your password has been updated. You can now sign in with your new password.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-sm text-green-900 dark:text-green-400">
                <p>
                  For security, you may need to sign in again on other devices.
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => navigate("/login")}
                >
                  Sign In to Your Account
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => navigate("/dashboard")}
                >
                   Demo Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right - Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 to-blue-600 items-center justify-center p-12">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="text-8xl">🔑</div>
          <h2 className="text-3xl font-bold text-white">Secure Your Account</h2>
          <p className="text-indigo-100 max-w-md">
            Choose a strong password to keep your restaurant data safe. Change it regularly for maximum security.
          </p>
        </div>
      </div>
    </div>
  );
}
