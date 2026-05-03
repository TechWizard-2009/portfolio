import { guides } from "@/lib/guides";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

const categories = Array.from(new Set(guides.map((g) => g.category)));

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Guides & Articles</h1>
        <p className="mt-4 text-secondary leading-relaxed">
          In-depth technical articles on observability, DevOps, and modern engineering practices.
          Written from real-world production experience.
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-10">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-medium text-secondary"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Guides List */}
      <div className="space-y-4">
        {guides.map((guide) => (
          <Link
            key={guide.id}
            href={`/guides/${guide.id}`}
            className="group block p-6 rounded-xl border border-border bg-surface hover:bg-surface-hover transition-all hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-secondary">
                    <Clock size={12} />
                    {guide.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">{guide.description}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-2" />
            </div>
            <div className="flex gap-2 mt-4">
              {guide.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-background text-xs text-secondary"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
