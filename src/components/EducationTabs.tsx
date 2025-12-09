import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, BookOpen, Lightbulb, Shield, Zap } from "lucide-react";
import { WhyItMatters } from "./education/WhyItMatters";
import { GoodBadExamples } from "./education/GoodBadExamples";
import { HackingMethods } from "./education/HackingMethods";
import { SecurityTips } from "./education/SecurityTips";

export const EducationTabs = () => {
  return (
    <Tabs defaultValue="why" className="w-full">
      <TabsList className="w-full h-auto flex flex-wrap gap-2 bg-secondary/50 p-2 rounded-xl">
        <TabsTrigger
          value="why"
          className="flex-1 min-w-[140px] gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <Shield className="w-4 h-4" />
          <span className="hidden sm:inline">Why It Matters</span>
          <span className="sm:hidden">Why</span>
        </TabsTrigger>
        <TabsTrigger
          value="examples"
          className="flex-1 min-w-[140px] gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <BookOpen className="w-4 h-4" />
          <span className="hidden sm:inline">Good vs Bad</span>
          <span className="sm:hidden">Examples</span>
        </TabsTrigger>
        <TabsTrigger
          value="hacking"
          className="flex-1 min-w-[140px] gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <AlertTriangle className="w-4 h-4" />
          <span className="hidden sm:inline">Hacking Methods</span>
          <span className="sm:hidden">Attacks</span>
        </TabsTrigger>
        <TabsTrigger
          value="tips"
          className="flex-1 min-w-[140px] gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <Lightbulb className="w-4 h-4" />
          <span className="hidden sm:inline">Security Tips</span>
          <span className="sm:hidden">Tips</span>
        </TabsTrigger>
      </TabsList>

      <div className="mt-6">
        <TabsContent value="why" className="animate-fade-in">
          <WhyItMatters />
        </TabsContent>
        <TabsContent value="examples" className="animate-fade-in">
          <GoodBadExamples />
        </TabsContent>
        <TabsContent value="hacking" className="animate-fade-in">
          <HackingMethods />
        </TabsContent>
        <TabsContent value="tips" className="animate-fade-in">
          <SecurityTips />
        </TabsContent>
      </div>
    </Tabs>
  );
};
