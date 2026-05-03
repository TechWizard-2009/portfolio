import { skillCategories } from "@/lib/skills";
import { Code, Database, Server, Layout, LineChart } from "lucide-react";

const categoryIcons: Record<string, typeof Code> = {
  Frontend: Layout,
  Backend: Code,
  Databases: Database,
  "Infrastructure & DevOps": Server,
  Observability: LineChart,
};

export default function StackPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Tech Stack</h1>
        <p className="mt-4 text-secondary leading-relaxed">
          The tools, frameworks, and platforms I use to build and monitor production systems.
          Proficiency levels are based on years of hands-on experience.
        </p>
      </div>

      {/* Uptime-style bars */}
      <div className="mb-16 p-6 rounded-xl border border-border bg-surface">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2.5 w-2.5 rounded-full bg-success" />
          <span className="text-sm font-medium">System Status</span>
        </div>
        <div className="grid grid-cols-7 sm:grid-cols-14 lg:grid-cols-31 gap-0.5">
          {Array.from({ length: 90 }).map((_, i) => {
            const rand = Math.random();
            const color =
              rand > 0.05 ? "bg-success" : rand > 0.02 ? "bg-warning" : "bg-danger";
            return (
              <div
                key={i}
                className={`h-3 rounded-sm ${color}`}
                title={`Week ${i + 1}: 99.${Math.floor(Math.random() * 9 + 1)}%`}
              />
            );
          })}
        </div>
        <div className="flex justify-between mt-2 text-xs text-secondary">
          <span>90 days ago</span>
          <span className="text-success font-medium">99.99% uptime</span>
          <span>Today</span>
        </div>
      </div>

      {/* Skill Categories */}
      <div className="space-y-12">
        {skillCategories.map((category) => {
          const Icon = categoryIcons[category.name] ?? Code;
          return (
            <div key={category.name}>
              <div className="flex items-center gap-3 mb-6">
                <Icon className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SkillCard({ skill }: { skill: { name: string; level: number; icon: string } }) {
  const color =
    skill.level >= 90 ? "bg-success" : skill.level >= 75 ? "bg-primary" : "bg-warning";

  return (
    <div className="p-4 rounded-lg border border-border bg-surface">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-md bg-background flex items-center justify-center text-xs font-bold font-mono">
            {skill.icon}
          </span>
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-secondary">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-background overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}
