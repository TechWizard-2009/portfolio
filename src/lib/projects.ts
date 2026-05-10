export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  repo: string;
  category: "E-commerce" | "AI generated" | "Academic" | "ForFun";
}

export const projects: Project[] = [
  {
    id: "clear-sky",
    title: "ClearSky",
    description: "A beautiful weather app that provides real-time weather updates, forecasts, and location-based weather information with a clean and intuitive interface.",
    url: "https://clear-sky-eta.vercel.app/",
    repo: "https://github.com/TechWizard-2009/ClearSky",
    category: "AI generated",
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description: "A simple and effective task management app for organizing daily tasks with add, complete, and filter functionality to keep track of what matters.",
    url: "https://task-maneging-website.vercel.app/",
    repo: "https://github.com/TechWizard-2009/TaskManegingWebsite",
    category: "ForFun",
  },
  {
    id: "university-of-sahiwal",
    title: "University of Sahiwal",
    description: "A demo website for the University of Sahiwal featuring departments, academics, events, news, and administrative information with a modern and clean design.",
    url: "https://university-of-sahiwal-34p4.vercel.app/",
    repo: "https://github.com/TechWizard-2009/University-of-Sahiwal",
    category: "Academic",
  },
];

export const projectCategories = ["All", "E-commerce", "AI generated", "Academic", "ForFun"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
