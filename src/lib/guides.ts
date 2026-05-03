export interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const guides: Guide[] = [
  {
    id: "otel-best-practices",
    title: "OpenTelemetry Best Practices for Production",
    description: "A comprehensive guide to implementing OpenTelemetry in production environments, covering sampling strategies, context propagation, and metric collection.",
    category: "Observability",
    date: "2025-04-15",
    readTime: "12 min read",
    tags: ["OpenTelemetry", "Tracing", "Production"],
  },
  {
    id: "clickhouse-logs",
    title: "Building a Log Management System with ClickHouse",
    description: "Learn how to build a high-performance log storage and query system using ClickHouse, including schema design, partitioning, and query optimization.",
    category: "Engineering",
    date: "2025-03-28",
    readTime: "18 min read",
    tags: ["ClickHouse", "Logs", "Performance"],
  },
  {
    id: "incident-response",
    title: "Modern Incident Response: From Detection to Resolution",
    description: "A deep dive into building effective incident response workflows, including escalation policies, on-call best practices, and post-mortem culture.",
    category: "DevOps",
    date: "2025-03-10",
    readTime: "10 min read",
    tags: ["Incidents", "On-Call", "SRE"],
  },
  {
    id: "ebpf-tracing",
    title: "eBPF for Distributed Tracing: Zero Instrumentation",
    description: "How eBPF enables zero-code distributed tracing by instrumenting network calls at the kernel level, reducing overhead and improving visibility.",
    category: "Engineering",
    date: "2025-02-20",
    readTime: "15 min read",
    tags: ["eBPF", "Tracing", "Kernel"],
  },
  {
    id: "status-page-design",
    title: "Designing Effective Status Pages for Downtime Communication",
    description: "Best practices for building status pages that keep users informed during outages, including automated updates, incident timelines, and trust-building patterns.",
    category: "Design",
    date: "2025-02-05",
    readTime: "8 min read",
    tags: ["Status Pages", "UX", "Communication"],
  },
  {
    id: "rum-performance",
    title: "Real User Monitoring: Measuring What Matters",
    description: "How to implement RUM to capture real-world performance data, track Core Web Vitals, and connect frontend metrics to business outcomes.",
    category: "Observability",
    date: "2025-01-18",
    readTime: "11 min read",
    tags: ["RUM", "Web Vitals", "Performance"],
  },
];
