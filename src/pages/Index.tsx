import { useState } from "react";
import { PasswordInput } from "@/components/PasswordInput";
import { StrengthMeter } from "@/components/StrengthMeter";
import { RequirementsList } from "@/components/RequirementsList";
import { EducationTabs } from "@/components/EducationTabs";
import { usePasswordStrength } from "@/hooks/usePasswordStrength";
import { Lock, Shield } from "lucide-react";

const Index = () => {
  const [password, setPassword] = useState("");
  const { strength, label, requirements } = usePasswordStrength(password);

  return (
    <div className="min-h-screen bg-background bg-gradient-dark">
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Glow effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20 glow-primary">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold text-lg text-foreground">PassGuard</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                <Lock className="w-4 h-4" />
                Free Password Security Tool
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Is Your Password{" "}
                <span className="text-gradient-primary">Strong Enough?</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Test your password strength, learn about security threats, and discover how to
                protect your digital life with unbreakable passwords.
              </p>
            </div>

            {/* Password Checker Card */}
            <div className="max-w-2xl mx-auto">
              <div className="p-8 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-2xl animate-slide-up">
                <PasswordInput
                  value={password}
                  onChange={setPassword}
                  className="mb-6"
                />
                <StrengthMeter strength={strength} label={label} />
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">
                    Password Requirements
                  </h3>
                  <RequirementsList requirements={requirements} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Master Password Security
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Understanding the threats and best practices is the first step to protecting
                  yourself online.
                </p>
              </div>
              <EducationTabs />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border/50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              Your passwords are never stored or transmitted. All analysis happens locally in your browser.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
