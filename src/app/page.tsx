import Link from "next/link";
import { ArrowRight, Activity, Clock, Shield, BarChart3, Zap, Globe } from "lucide-react";

const metrics = [
  { label: "Uptime", value: "99.99%", icon: Activity, color: "text-success" },
  { label: "Avg Response", value: "<50ms", icon: Clock, color: "text-primary" },
  { label: "Projects Shipped", value: "50+", icon: BarChart3, color: "text-success" },
  { label: "Systems Monitored", value: "200+", icon: Shield, color: "text-warning" },
];

const features = [
  {
    icon: Activity,
    title: "Uptime Monitoring",
    description: "Global monitoring for websites, APIs, and servers with instant alerts.",
  },
  {
    icon: Clock,
    title: "Incident Management",
    description: "On-call scheduling, automated escalation, and post-incident workflows.",
  },
  {
    icon: BarChart3,
    title: "Log Management",
    description: "High-performance log collection with SQL-based querying and alerting.",
  },
  {
    icon: Shield,
    title: "Error Tracking",
    description: "AI-native exception tracking with session context and stack traces.",
  },
  {
    icon: Zap,
    title: "Distributed Tracing",
    description: "OpenTelemetry-native tracing with eBPF auto-instrumentation.",
  },
  {
    icon: Globe,
    title: "Real User Monitoring",
    description: "Session replays, Core Web Vitals, and frontend performance metrics.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-medium text-secondary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse"></span>
              All systems operational
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Monitor, Debug & Fix
              <span className="text-primary"> Production</span>
              <br />
              at Scale
            </h1>
            <p className="mt-6 text-lg text-secondary leading-relaxed max-w-2xl">
              Full-stack developer specializing in observability, infrastructure monitoring,
              and building high-performance systems. Turning chaos into clarity with modern tooling.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border border-border text-foreground font-medium hover:bg-surface transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-l inear-to-br from-primary/5 via-transparent to-transparent" />
      </section>

      {/* Metrics */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <metric.icon className={`mx-auto h-6 w-6 ${metric.color} mb-3`} />
                <div className="text-3xl font-bold tracking-tight">{metric.value}</div>
                <div className="text-sm text-secondary mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight">What I Build</h2>
            <p className="mt-4 text-secondary leading-relaxed">
              From monitoring dashboards to incident management platforms, I specialize in
              tools that help engineering teams understand and fix production issues faster.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-border bg-surface hover:bg-surface-hover transition-colors"
              >
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Ready to collaborate?</h2>
            <p className="mt-4 text-secondary leading-relaxed">
              Whether you need a monitoring dashboard, an observability platform, or a full-stack
              application, let's build something reliable together.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
              >
                Contact Me
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
