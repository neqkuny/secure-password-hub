import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const badPasswords = [
  { password: "123456", reason: "Most common password, cracked instantly" },
  { password: "password", reason: "Dictionary word, trivial to guess" },
  { password: "qwerty123", reason: "Keyboard pattern, easily predictable" },
  { password: "john1990", reason: "Name + birth year, easily guessable" },
  { password: "iloveyou", reason: "Common phrase, in every dictionary attack" },
  { password: "P@ssw0rd", reason: "Common substitutions are well-known" },
];

const goodPasswords = [
  { password: "Tr0ub4dor&3Horse", reason: "Mixed case, numbers, symbols" },
  { password: "correct-horse-battery-staple", reason: "Passphrase: easy to remember, hard to crack" },
  { password: "MyDog$Ate3Pizzas!!", reason: "Memorable sentence with complexity" },
  { password: "xK9!mN2$pL7@vQ3#", reason: "Generated random, maximum entropy" },
  { password: "Purple-Elephant-Dances-42!", reason: "Random words + number + symbol" },
];

interface PasswordExampleProps {
  password: string;
  reason: string;
  isGood: boolean;
}

const PasswordExample = ({ password, reason, isGood }: PasswordExampleProps) => (
  <div
    className={cn(
      "p-4 rounded-lg border transition-all hover:scale-[1.02]",
      isGood
        ? "bg-success/5 border-success/30 hover:border-success/50"
        : "bg-destructive/5 border-destructive/30 hover:border-destructive/50"
    )}
  >
    <div className="flex items-start gap-3">
      <div
        className={cn(
          "flex items-center justify-center w-6 h-6 rounded-full shrink-0 mt-0.5",
          isGood ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"
        )}
      >
        {isGood ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
      </div>
      <div className="min-w-0">
        <code className="font-mono text-sm text-foreground break-all">{password}</code>
        <p className="text-xs text-muted-foreground mt-1">{reason}</p>
      </div>
    </div>
  </div>
);

export const GoodBadExamples = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
            <h3 className="text-xl font-semibold text-foreground">Weak Passwords</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            These passwords can be cracked in seconds to minutes.
          </p>
          <div className="space-y-3">
            {badPasswords.map((item, index) => (
              <PasswordExample key={index} {...item} isGood={false} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
            <h3 className="text-xl font-semibold text-foreground">Strong Passwords</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            These would take years to centuries to crack.
          </p>
          <div className="space-y-3">
            {goodPasswords.map((item, index) => (
              <PasswordExample key={index} {...item} isGood={true} />
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 bg-primary/10 border border-primary/30 rounded-xl">
        <h4 className="font-semibold text-foreground mb-2">Pro Tip: Use a Password Manager</h4>
        <p className="text-muted-foreground text-sm">
          You don't need to remember complex passwords. Use a password manager to generate and store
          unique, strong passwords for every account. You only need to remember one master password.
        </p>
      </div>
    </div>
  );
};
