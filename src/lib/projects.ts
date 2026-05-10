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

export const projects: Project[] = [];

export const projectCategories = ["All", "E-commerce", "AI generated", "Academic", "ForFun"] as const;
export type ProjectCategory = (typeof projectCategories)[number];


