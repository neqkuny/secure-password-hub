import { CheckCircle2, KeyRound, RefreshCw, Shield, Smartphone, TriangleAlert } from "lucide-react";

const tips = [
  {
    icon: KeyRound,
    title: "Use a Password Manager",
    description:
      "Let a password manager generate and store unique, complex passwords for every account. Popular options include 1Password, Bitwarden, and Dashlane.",
    priority: "essential",
  },
  {
    icon: Smartphone,
    title: "Enable Two-Factor Authentication (2FA)",
    description:
      "Add an extra layer of security. Even if someone gets your password, they can't access your account without the second factor.",
    priority: "essential",
  },
  {
    icon: RefreshCw,
    title: "Never Reuse Passwords",
    description:
      "Each account should have a unique password. If one account is compromised, your other accounts remain safe.",
    priority: "essential",
  },
  {
    icon: Shield,
    title: "Make Passwords Long",
    description:
      "Length matters more than complexity. A 16-character password is exponentially harder to crack than an 8-character one.",
    priority: "recommended",
  },
  {
    icon: TriangleAlert,
    title: "Be Cautious of Phishing",
    description:
      "Always verify URLs before entering credentials. Look for HTTPS and check for subtle misspellings in domain names.",
    priority: "essential",
  },
  {
    icon: CheckCircle2,
    title: "Check for Breaches",
    description:
      "Regularly check if your email or passwords have been exposed in data breaches using services like HaveIBeenPwned.",
    priority: "recommended",
  },
];

const getPriorityStyles = (priority: string) => {
  if (priority === "essential") {
    return {
      border: "border-success/50",
      bg: "bg-success/10",
      badge: "bg-success/20 text-success",
    };
  }
  return {
    border: "border-primary/50",
    bg: "bg-primary/10",
    badge: "bg-primary/20 text-primary",
  };
};

export const SecurityTips = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Best Practices for Password Security
        </h3>
        <p className="text-muted-foreground">
          Follow these expert recommendations to significantly improve your online security posture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tips.map((tip, index) => {
          const styles = getPriorityStyles(tip.priority);
          return (
            <div
              key={index}
              className={`p-6 rounded-xl border ${styles.border} ${styles.bg} transition-all hover:scale-[1.02] group`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary group-hover:bg-secondary/80 transition-colors">
                  <tip.icon className="w-6 h-6 text-foreground" />
                </div>
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${styles.badge}`}>
                  {tip.priority}
                </span>
              </div>
              <h4 className="font-semibold text-foreground mt-4 mb-2">{tip.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-card border border-border rounded-xl">
        <h4 className="font-semibold text-foreground mb-4">Quick Security Checklist</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Using a password manager",
            "2FA enabled on important accounts",
            "No password reuse",
            "Passwords are 16+ characters",
            "Checked for data breaches",
            "Avoiding phishing links",
          ].map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-border bg-secondary accent-primary"
              />
              <span className="text-sm text-foreground">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
