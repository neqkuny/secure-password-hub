import { AlertCircle, Clock, DollarSign, UserX } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "< 1 second",
    label: "Time to crack '123456'",
    color: "text-destructive",
  },
  {
    icon: DollarSign,
    value: "$4.45M",
    label: "Average data breach cost",
    color: "text-warning",
  },
  {
    icon: UserX,
    value: "81%",
    label: "Breaches from weak passwords",
    color: "text-primary",
  },
  {
    icon: AlertCircle,
    value: "24B+",
    label: "Credentials exposed in leaks",
    color: "text-destructive",
  },
];

export const WhyItMatters = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Your Password Is Your First Line of Defense
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Weak passwords are responsible for the majority of security breaches. A strong password
          isn't just a recommendation—it's essential protection for your digital life, finances,
          and personal information.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
          >
            <stat.icon className={`w-8 h-8 ${stat.color} mb-4 group-hover:scale-110 transition-transform`} />
            <div className="font-mono text-2xl font-bold text-foreground mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-gradient-to-r from-destructive/10 to-warning/10 border border-destructive/20 rounded-xl">
        <h4 className="font-semibold text-foreground mb-2">The Real Cost of Weak Passwords</h4>
        <ul className="space-y-2 text-muted-foreground text-sm">
          <li>• Identity theft can take months or years to fully resolve</li>
          <li>• Financial losses from compromised accounts are often unrecoverable</li>
          <li>• Personal photos, messages, and data can be exposed or held for ransom</li>
          <li>• Reputation damage from hijacked social media accounts</li>
        </ul>
      </div>
    </div>
  );
};
