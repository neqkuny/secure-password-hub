import { cn } from "@/lib/utils";
import { Shield, ShieldAlert, ShieldCheck, ShieldX } from "lucide-react";

interface StrengthMeterProps {
  strength: number; // 0-100
  label: string;
}

export const StrengthMeter = ({ strength, label }: StrengthMeterProps) => {
  const getStrengthColor = () => {
    if (strength < 40) return "bg-destructive";
    if (strength < 70) return "bg-warning";
    return "bg-success";
  };

  const getGlowClass = () => {
    if (strength < 40) return "glow-destructive";
    if (strength < 70) return "glow-warning";
    return "glow-success";
  };

  const getIcon = () => {
    if (strength < 40) return <ShieldX className="w-6 h-6 text-destructive" />;
    if (strength < 70) return <ShieldAlert className="w-6 h-6 text-warning" />;
    return <ShieldCheck className="w-6 h-6 text-success" />;
  };

  const getTextColor = () => {
    if (strength < 40) return "text-destructive";
    if (strength < 70) return "text-warning";
    return "text-success";
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getIcon()}
          <span className={cn("font-semibold text-lg", getTextColor())}>{label}</span>
        </div>
        <span className="font-mono text-muted-foreground">{strength}%</span>
      </div>
      <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
        <div
          className={cn(
            "absolute inset-y-0 left-0 rounded-full transition-all duration-500 ease-out",
            getStrengthColor(),
            strength > 0 && getGlowClass()
          )}
          style={{ width: `${strength}%` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />
      </div>
    </div>
  );
};
