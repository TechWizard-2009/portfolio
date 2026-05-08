import Link from "next/link";

const footerLinks = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Stack", href: "/stack" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "GitHub", href: "https://github.com/TechWizard-2009" },
      { label: "Instagram", href: "https://www.instagram.com/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">AA</span>
              </div>
              <span className="font-semibold text-lg tracking-tight">ArhamAli</span>
            </div>
            <p className="text-sm text-secondary">
              Building reliable, high-performance systems with modern observability.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-sm mb-3">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary">
            &copy; {new Date().getFullYear()} DevStack Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-secondary">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
