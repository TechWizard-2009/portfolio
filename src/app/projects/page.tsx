"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, Filter, Code2 } from "lucide-react";
import { projects, getStatusColor, getStatusLabel, type Project } from "@/lib/projects";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<Project["status"] | "all">("all");

  const filtered = projects.filter((project) => {
    const tagMatch = selectedTags.length === 0 || selectedTags.some((t) => project.tags.includes(t));
    const statusMatch = statusFilter === "all" || project.status === statusFilter;
    return tagMatch && statusMatch;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-4 text-secondary leading-relaxed">
          A showcase of production-grade applications and infrastructure tools.
          Each project is built for reliability, scalability, and developer experience.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-10 space-y-4">
        <div className="flex items-center gap-2 text-sm font-medium text-secondary">
          <Filter size={16} />
          <span>Filter by status:</span>
          <div className="flex gap-2 ml-2">
            {(["all", "operational", "degraded", "maintenance"] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  statusFilter === status
                    ? "bg-primary text-white"
                    : "bg-surface border border-border text-secondary hover:text-foreground"
                }`}
              >
                {status === "all" ? "All" : getStatusLabel(status)}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-medium text-secondary">Tags:</span>
          {allTags.slice(0, 12).map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                selectedTags.includes(tag)
                  ? "bg-primary text-white"
                  : "bg-surface border border-border text-secondary hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-secondary">No projects match your filters.</p>
          <button
            onClick={() => {
              setSelectedTags([]);
              setStatusFilter("all");
            }}
            className="mt-4 text-primary hover:underline text-sm font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-xl border border-border bg-surface hover:bg-surface-hover transition-all hover:shadow-lg hover:shadow-primary/5">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`h-2.5 w-2.5 rounded-full ${getStatusColor(project.status)}`} />
            <span className="text-xs font-medium text-secondary">{getStatusLabel(project.status)}</span>
          </div>
          <div className="flex gap-2">
            <a
              href={project.repo}
              className="p-1.5 rounded-lg text-secondary hover:text-foreground hover:bg-background transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={project.demo}
              className="p-1.5 rounded-lg text-secondary hover:text-foreground hover:bg-background transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-background text-xs font-mono text-secondary"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-md bg-background text-xs text-secondary">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <div className="space-y-2">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="flex items-start gap-2 text-xs text-secondary">
              <span className="text-success mt-0.5">▸</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
