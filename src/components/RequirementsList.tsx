import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Requirement {
  label: string;
  met: boolean;
}

interface RequirementsListProps {
  requirements: Requirement[];
}

export const RequirementsList = ({ requirements }: RequirementsListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {requirements.map((req, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center gap-3 p-3 rounded-lg border transition-all duration-300",
            req.met
              ? "bg-success/10 border-success/30"
              : "bg-secondary border-border"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300",
              req.met ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"
            )}
          >
            {req.met ? (
              <Check className="w-4 h-4 animate-check-bounce" />
            ) : (
              <X className="w-4 h-4" />
            )}
          </div>
          <span
            className={cn(
              "text-sm font-medium transition-colors duration-300",
              req.met ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {req.label}
          </span>
        </div>
      ))}
    </div>
  );
};
