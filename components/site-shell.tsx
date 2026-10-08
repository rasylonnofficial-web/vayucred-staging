import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/asset-owners", label: "Carbon projects" },
  { href: "/buyers", label: "For buyers" },
  { href: "/evidence-infrastructure", label: "Technology" },
  { href: "/about", label: "About" },
];

export function Wordmark() {
  return (
    <Link className="wordmark" href="/" aria-label="Vayucred home">
      <span>Vayucred</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Wordmark />
        <nav aria-label="Primary navigation" className="desktop-nav">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Button asChild className="nav-cta">
          <Link href="/contact">Talk to Vayucred</Link>
        </Button>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
            <Link href="/contact">Talk to Vayucred</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Wordmark />
        <p>
          From real projects to carbon markets.<br />
          <span>Vayucred is a brand of RASYLONN TECHNOLOGIES PRIVATE LIMITED · Hyderabad, India</span>
        </p>
        <nav aria-label="Legal navigation">
          <Link href="/about#investors-partners">Investors &amp; partners</Link>
          <a href="mailto:info@vayucred.com">info@vayucred.com</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}

export function InnerPage({
  eyebrow,
  title,
  intro,
  variant = "default",
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  variant?: "default" | "projects" | "buyers" | "technology" | "methodology" | "about" | "contact" | "legal";
  children: React.ReactNode;
}) {
  return (
    <main id="main-content">
      <SiteHeader />
      <section className={`inner-hero inner-hero-${variant}`}>
        <div className="inner-hero-art" aria-hidden="true"><span /><span /><span /></div>
        <div className="shell inner-hero-content">
          <p className="eyebrow"><span className="signal" aria-hidden="true" />{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}

export function BoundaryNote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <aside className={cn("boundary-note", className)}>
      <span>Boundary</span>
      <p>{children}</p>
    </aside>
  );
}
