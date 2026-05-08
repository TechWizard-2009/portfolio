import { GraduationCap, MapPin, AtSign, Code } from "lucide-react";

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

const journey = [
  {
    title: "Frontend Development",
    organization: "Bano Qabil",
    period: "Present",
    description: "Actively building my career in frontend development, gaining practical experience in modern web technologies and building responsive, interactive websites.",
  },
  {
    title: "Self-Taught Developer",
    organization: "Personal Projects",
    period: "Ongoing",
    description: "Constantly exploring new technologies, improving problem-solving abilities, and challenging myself with real-world projects to turn ideas into reality.",
  },
];

const education = [
  {
    degree: "Intermediate (1st Year)",
    school: "Government College Sahiwal",
    period: "Present",
    focus: "Computer Science",
  },
  {
    degree: "Matriculation",
    school: "Comprehensive Sahiwal",
    period: "Completed",
    focus: "Science",
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
              I'm a passionate frontend developer and tech enthusiast who enjoys building modern,
              responsive, and user-friendly websites. I work with HTML, CSS, JavaScript, React,
              and Tailwind CSS to create clean and interactive web experiences. I'm always learning
              new technologies, improving my skills, and exploring creative ways to turn ideas into
              real projects.
            </p>
            <p>
              I am a dedicated student currently pursuing my Intermediate (1st Year) at Government
              College Sahiwal. I completed my Matriculation from Comprehensive Sahiwal, where I
              developed a strong academic foundation and discovered my deep interest in technology
              and creativity.
            </p>
            <p>
              Alongside my academic journey, I am actively building my career in Frontend Development
              through Bano Qabil, continuously improving my technical skills and gaining practical
              experience. I enjoy problem-solving, designing smooth user interfaces, and building
              projects that combine functionality with great design.
            </p>
            <p>
              My goal is to become a skilled software developer who combines creativity, innovation,
              and technical expertise to build impactful digital experiences. I strongly believe in
              continuous learning, hard work, and self-improvement, and I am always eager to expand
              my knowledge and take on new challenges in the tech world.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-surface">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-primary">AA</span>
            </div>
            <h3 className="font-semibold text-lg">Arham Ali</h3>
            <p className="text-sm text-secondary mt-1">Frontend Developer</p>
            <div className="flex items-center gap-2 mt-3 text-sm text-secondary">
              <MapPin size={14} />
              <span>Sahiwal, Pakistan</span>
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
                github.com/arhamali
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-3 text-sm text-secondary hover:text-foreground transition-colors"
              >
                <LinkedinIcon />
                linkedin.com/in/arhamali
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Journey */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <Code className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight">Learning Journey</h2>
        </div>
        <div className="space-y-6">
          {journey.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-border bg-surface hover:bg-surface-hover transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-primary font-medium">{item.organization}</p>
                </div>
                <span className="text-xs font-mono text-secondary whitespace-nowrap">{item.period}</span>
              </div>
              <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
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
