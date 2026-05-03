import { Briefcase, GraduationCap, MapPin, Mail, Globe, Link2, Send, AtSign } from "lucide-react";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-7 11-12 11c-3 0-5-3-5-5 3 0 5-2 5-2s-3 0-3-3c0 0 2 0 3 1s3 2 5 2 5-2 5-2z" />
      <path d="M18 18c-2 0-3-1-3-3 1 0 2 .5 3 1s2 2 3 2c1 0 2-1 2-1s-2 1-3 1z" />
    </svg>
  );
}

const experience = [
  {
    role: "Senior Full-Stack Engineer",
    company: "TechCorp",
    period: "2023 - Present",
    description: "Leading observability infrastructure and building internal monitoring tools. Reduced incident response time by 40%.",
  },
  {
    role: "Backend Engineer",
    company: "DataSystems Inc",
    period: "2021 - 2023",
    description: "Built high-throughput log processing pipelines and real-time analytics dashboards handling millions of events.",
  },
  {
    role: "DevOps Engineer",
    company: "CloudFirst",
    period: "2019 - 2021",
    description: "Managed Kubernetes clusters, CI/CD pipelines, and implemented comprehensive monitoring across multi-cloud environments.",
  },
];

const education = [
  {
    degree: "M.S. Computer Science",
    school: "University of Technology",
    period: "2017 - 2019",
    focus: "Distributed Systems & Cloud Computing",
  },
  {
    degree: "B.S. Computer Science",
    school: "State University",
    period: "2013 - 2017",
    focus: "Software Engineering & Data Structures",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <div className="grid lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight mb-6">About Me</h1>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              I'm a full-stack engineer passionate about building reliable, observable systems.
              My focus is on the intersection of infrastructure, developer experience, and
              production reliability.
            </p>
            <p>
              With 5+ years of experience in observability tooling, I've built monitoring platforms,
              log management systems, and incident response workflows used by engineering teams worldwide.
              I believe that good tooling makes the difference between firefighting and proactive engineering.
            </p>
            <p>
              When I'm not debugging production systems, you'll find me writing technical guides,
              contributing to open-source observability projects, or experimenting with eBPF and
              new tracing technologies.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-surface">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-primary">DS</span>
            </div>
            <h3 className="font-semibold text-lg">DevStack</h3>
            <p className="text-sm text-secondary mt-1">Senior Full-Stack Engineer</p>
            <div className="flex items-center gap-2 mt-3 text-sm text-secondary">
              <MapPin size={14} />
              <span>Remote / Worldwide</span>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-surface">
            <h4 className="font-semibold text-sm mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-3 text-sm text-secondary hover:text-foreground transition-colors"
              >
                <AtSign size={16} />
                hello@example.com
              </a>
              <a
                href="https://github.com"
                className="flex items-center gap-3 text-sm text-secondary hover:text-foreground transition-colors"
              >
                <GithubIcon />
                github.com/devstack
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-3 text-sm text-secondary hover:text-foreground transition-colors"
              >
                <LinkedinIcon />
                linkedin.com/in/devstack
              </a>
              <a
                href="https://twitter.com"
                className="flex items-center gap-3 text-sm text-secondary hover:text-foreground transition-colors"
              >
                <TwitterIcon />
                @devstack
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        </div>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div
              key={exp.role}
              className="p-6 rounded-xl border border-border bg-surface hover:bg-surface-hover transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <p className="text-sm text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-xs font-mono text-secondary whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-sm text-secondary leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
        </div>
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="p-6 rounded-xl border border-border bg-surface hover:bg-surface-hover transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-sm text-primary font-medium">{edu.school}</p>
                </div>
                <span className="text-xs font-mono text-secondary whitespace-nowrap">{edu.period}</span>
              </div>
              <p className="text-sm text-secondary">{edu.focus}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
