import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const PasswordInput = ({ value, onChange, className }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("relative group", className)}>
      <div className="absolute inset-0 bg-gradient-primary rounded-lg opacity-0 group-focus-within:opacity-20 blur-xl transition-opacity duration-300" />
      <div className="relative flex items-center">
        <Lock className="absolute left-4 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your password to test..."
          className="w-full pl-12 pr-12 py-4 bg-secondary border border-border rounded-lg font-mono text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};
