import { useMemo } from "react";

interface PasswordAnalysis {
  strength: number;
  label: string;
  requirements: {
    label: string;
    met: boolean;
  }[];
}

export const usePasswordStrength = (password: string): PasswordAnalysis => {
  return useMemo(() => {
    const requirements = [
      {
        label: "At least 8 characters",
        met: password.length >= 8,
      },
      {
        label: "At least 12 characters (recommended)",
        met: password.length >= 12,
      },
      {
        label: "Contains uppercase letter",
        met: /[A-Z]/.test(password),
      },
      {
        label: "Contains lowercase letter",
        met: /[a-z]/.test(password),
      },
      {
        label: "Contains number",
        met: /\d/.test(password),
      },
      {
        label: "Contains special character",
        met: /[!@#$%^&*(),.?":{}|<>\-_=+\[\]\\;'/`~]/.test(password),
      },
      {
        label: "16+ characters (highly secure)",
        met: password.length >= 16,
      },
      {
        label: "No common patterns",
        met: !/(123|abc|qwerty|password|111|000)/i.test(password),
      },
    ];

    // Calculate strength based on multiple factors
    let strength = 0;

    if (password.length === 0) {
      return { strength: 0, label: "Enter a password", requirements };
    }

    // Base points for length
    if (password.length >= 8) strength += 15;
    if (password.length >= 12) strength += 15;
    if (password.length >= 16) strength += 15;
    if (password.length >= 20) strength += 10;

    // Character variety
    if (/[a-z]/.test(password)) strength += 10;
    if (/[A-Z]/.test(password)) strength += 10;
    if (/\d/.test(password)) strength += 10;
    if (/[!@#$%^&*(),.?":{}|<>\-_=+\[\]\\;'/`~]/.test(password)) strength += 15;

    // Bonus for no common patterns
    if (!/(123|abc|qwerty|password|111|000)/i.test(password)) {
      strength += 5;
    }

    // Bonus for mixing character types throughout
    const hasGoodDistribution = password.length > 0 && 
      password.slice(0, Math.floor(password.length / 2)).match(/[A-Z]/) &&
      password.slice(Math.floor(password.length / 2)).match(/\d/);
    if (hasGoodDistribution) strength += 5;

    // Cap at 100
    strength = Math.min(strength, 100);

    // Determine label
    let label = "Very Weak";
    if (strength >= 80) label = "Excellent";
    else if (strength >= 60) label = "Strong";
    else if (strength >= 40) label = "Moderate";
    else if (strength >= 20) label = "Weak";

    return { strength, label, requirements };
  }, [password]);
};
