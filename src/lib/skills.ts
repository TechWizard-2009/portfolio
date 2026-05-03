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
      { name: "React / Next.js", level: 95, icon: "⚛" },
      { name: "TypeScript", level: 92, icon: "TS" },
      { name: "Vue.js", level: 80, icon: "V" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
      { name: "HTML / CSS", level: 98, icon: "📄" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js / Express", level: 90, icon: "N" },
      { name: "Ruby on Rails", level: 75, icon: "R" },
      { name: "Python / Django", level: 80, icon: "P" },
      { name: "Go", level: 70, icon: "Go" },
      { name: "Rust", level: 60, icon: "R" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", level: 92, icon: "PG" },
      { name: "ClickHouse", level: 85, icon: "CH" },
      { name: "Redis", level: 88, icon: "R" },
      { name: "MongoDB", level: 80, icon: "M" },
      { name: "Elasticsearch", level: 75, icon: "ES" },
    ],
  },
  {
    name: "Infrastructure & DevOps",
    skills: [
      { name: "Docker / K8s", level: 90, icon: "D" },
      { name: "AWS / GCP", level: 85, icon: "☁" },
      { name: "CI/CD Pipelines", level: 88, icon: "⚙" },
      { name: "Prometheus / Grafana", level: 82, icon: "📊" },
      { name: "Terraform", level: 75, icon: "TF" },
    ],
  },
  {
    name: "Observability",
    skills: [
      { name: "OpenTelemetry", level: 90, icon: "OT" },
      { name: "Log Management", level: 88, icon: "📋" },
      { name: "Distributed Tracing", level: 85, icon: "🔍" },
      { name: "Incident Response", level: 82, icon: "🚨" },
      { name: "Error Tracking", level: 90, icon: "⚠" },
    ],
  },
];
