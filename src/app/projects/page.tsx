"use client";

import { useState } from "react";
import { projects, projectCategories, type ProjectCategory } from "@/lib/projects";

export default function ProjectsPage() {
  const [category, setCategory] = useState<ProjectCategory>("All");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-4 text-secondary leading-relaxed">
          A showcase of projects I&apos;ve built across different domains.
        </p>
      </div>

      <div className="mb-10 flex items-center gap-2 flex-wrap">
        <span className="text-sm font-medium text-secondary">Filter:</span>
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              category === cat
                ? "bg-primary text-white"
                : "bg-surface border border-border text-secondary hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-secondary">No projects to show yet.</p>
        </div>
      )}
    </div>
  );
}
