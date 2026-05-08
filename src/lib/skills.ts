export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML / CSS", level: 98, icon: "📄" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
      { name: "Next.js", level: 95, icon: "N" },
      { name: "TypeScript", level: 92, icon: "TS" },
      { name: "JavaScript", level: 95, icon: "JS" },
    ],
  },
];
