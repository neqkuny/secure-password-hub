import { Binary, BookText, Fish, Key, Repeat, Shuffle, Users } from "lucide-react";

const methods = [
  {
    icon: Repeat,
    name: "Brute Force Attack",
    description: "Systematically tries every possible combination until the correct password is found.",
    prevention: "Use long passwords (16+ characters) to make this computationally infeasible.",
    severity: "high",
  },
  {
    icon: BookText,
    name: "Dictionary Attack",
    description: "Uses a list of common words, phrases, and known passwords to guess credentials.",
    prevention: "Avoid common words and phrases. Use random characters or passphrases.",
    severity: "high",
  },
  {
    icon: Fish,
    name: "Phishing",
    description: "Tricks users into entering passwords on fake websites that look legitimate.",
    prevention: "Always verify URLs. Enable 2FA. Never click suspicious links.",
    severity: "critical",
  },
  {
    icon: Users,
    name: "Credential Stuffing",
    description: "Uses leaked username/password pairs from other breaches to try on different sites.",
    prevention: "Never reuse passwords across different accounts.",
    severity: "high",
  },
  {
    icon: Key,
    name: "Rainbow Table Attack",
    description: "Uses precomputed tables of password hashes to reverse-engineer passwords.",
    prevention: "Services should use salted hashes. Users should use unique, complex passwords.",
    severity: "medium",
  },
  {
    icon: Shuffle,
    name: "Social Engineering",
    description: "Manipulates people into revealing passwords through deception or impersonation.",
    prevention: "Never share passwords. Verify identity before giving access.",
    severity: "critical",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "critical":
      return "border-destructive/50 bg-destructive/5";
    case "high":
      return "border-warning/50 bg-warning/5";
    default:
      return "border-primary/50 bg-primary/5";
  }
};

const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case "critical":
      return "bg-destructive/20 text-destructive";
    case "high":
      return "bg-warning/20 text-warning";
    default:
      return "bg-primary/20 text-primary";
  }
};

export const HackingMethods = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Know Your Enemy: Common Attack Methods
        </h3>
        <p className="text-muted-foreground">
          Understanding how hackers operate helps you build better defenses. Here are the most
          common techniques used to compromise passwords.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {methods.map((method, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border ${getSeverityColor(method.severity)} transition-all hover:scale-[1.02]`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-secondary">
                <method.icon className="w-6 h-6 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-foreground">{method.name}</h4>
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded-full ${getSeverityBadge(method.severity)}`}
                  >
                    {method.severity}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="text-xs text-foreground">
                    <span className="font-medium text-success">Prevention:</span> {method.prevention}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
