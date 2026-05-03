export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "operational" | "degraded" | "maintenance";
  repo: string;
  demo: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "observability-platform",
    title: "Observability Platform",
    description: "Full-stack monitoring dashboard with real-time metrics, log aggregation, and incident management. Built with ClickHouse for high-performance time-series storage.",
    tags: ["Next.js", "ClickHouse", "PostgreSQL", "Redis", "Tailwind"],
    status: "operational",
    repo: "https://github.com",
    demo: "https://demo.example.com",
    highlights: [
      "Real-time uptime monitoring with 30s check intervals",
      "SQL-based log querying with sub-second response times",
      "AI-powered anomaly detection on metrics streams",
    ],
  },
  {
    id: "incident-manager",
    title: "Incident Manager",
    description: "On-call scheduling and incident response platform with automated escalation policies, Slack integration, and post-incident review workflows.",
    tags: ["React", "TypeScript", "Prisma", "PostgreSQL", "WebSockets"],
    status: "operational",
    repo: "https://github.com",
    demo: "https://demo.example.com",
    highlights: [
      "Customizable on-call rotation with drag-and-drop scheduling",
      "Multi-channel alerting (SMS, Email, Slack, PagerDuty)",
      "Automated runbook execution and post-mortem templates",
    ],
  },
  {
    id: "api-tracer",
    title: "Distributed Tracer",
    description: "OpenTelemetry-compatible distributed tracing system with eBPF-based auto-instrumentation and real-time trace visualization.",
    tags: ["Go", "React", "gRPC", "OpenTelemetry", "ClickHouse"],
    status: "operational",
    repo: "https://github.com",
    demo: "https://demo.example.com",
    highlights: [
      "Zero-code instrumentation via eBPF kernel probes",
      "Trace visualization with flame graphs and Gantt charts",
      "Support for 100K+ spans per second ingestion",
    ],
  },
  {
    id: "status-pages",
    title: "Status Page Generator",
    description: "Branded status pages with automated incident communication, subscriber notifications, and uptime history widgets.",
    tags: ["Next.js", "Tailwind", "Server Actions", "Redis", "Vercel"],
    status: "degraded",
    repo: "https://github.com",
    demo: "https://demo.example.com",
    highlights: [
      "Custom domain support with SSL provisioning",
      "Real-time status updates via Server-Sent Events",
      "Embedded uptime widgets for external sites",
    ],
  },
  {
    id: "log-pipeline",
    title: "High-Volume Log Pipeline",
    description: "Scalable log collection and processing pipeline handling millions of events per second with structured parsing and alerting.",
    tags: ["Rust", "Kafka", "ClickHouse", "Docker", "Prometheus"],
    status: "operational",
    repo: "https://github.com",
    demo: "https://demo.example.com",
    highlights: [
      "Handles 1M+ log events/sec with <100ms latency",
      "Automatic log parsing with regex and Grok patterns",
      "Configurable alerting rules with threshold-based triggers",
    ],
  },
  {
    id: "rum-sdk",
    title: "Real User Monitoring SDK",
    description: "Lightweight JavaScript SDK for collecting frontend performance metrics, session replays, and error tracking with minimal overhead.",
    tags: ["TypeScript", "Web Vitals", "Session Replay", "Canvas API"],
    status: "maintenance",
    repo: "https://github.com",
    demo: "https://demo.example.com",
    highlights: [
      "<2KB gzipped SDK size with tree-shaking support",
      "Captures Core Web Vitals (LCP, FID, CLS, INP)",
      "Privacy-first session replay with PII redaction",
    ],
  },
];

export const getStatusColor = (status: Project["status"]) => {
  switch (status) {
    case "operational":
      return "bg-success";
    case "degraded":
      return "bg-warning";
    case "maintenance":
      return "bg-secondary";
  }
};

export const getStatusLabel = (status: Project["status"]) => {
  switch (status) {
    case "operational":
      return "Operational";
    case "degraded":
      return "Degraded";
    case "maintenance":
      return "Maintenance";
  }
};
