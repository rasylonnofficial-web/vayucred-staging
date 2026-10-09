import Link from "next/link";
import { Mail, MapPin, Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/methodology", label: "Carbon Credits" },
  { href: "/evidence-infrastructure", label: "Technology" },
  { href: "/asset-owners", label: "Project Developers" },
  { href: "/buyers", label: "Buyers" },
  { href: "/about", label: "About" },
];

export function Wordmark() {
  return (
    <Link className="wordmark" href="/" aria-label="Vayucred home">
      <span className="wordmark-mark" aria-hidden="true">V</span>
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
      <div className="shell footer-shell">
        <div className="footer-grid">
          <section className="footer-brand" aria-label="Vayucred contact details">
            <Wordmark />
            <p>Infrastructure for the carbon market.</p>
            <address>
              <a href="mailto:hello@vayucred.com"><Mail aria-hidden="true" />hello@vayucred.com</a>
              <a href="tel:+918886550400"><Phone aria-hidden="true" />8886550400</a>
              <span><MapPin aria-hidden="true" />India</span>
            </address>
          </section>

          <FooterColumn title="Products">
            <Link href="/evidence-infrastructure">SCADA</Link>
            <Link href="/evidence-infrastructure">dMRV</Link>
          </FooterColumn>

          <FooterColumn title="Carbon Credits">
            <Link href="/asset-owners">Solar</Link>
            <Link href="/asset-owners">Biogas / CBG</Link>
            <Link href="/asset-owners">Biochar</Link>
            <Link href="/asset-owners">Project Pipelines</Link>
          </FooterColumn>

          <FooterColumn title="Company">
            <Link href="/about">About Us</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </FooterColumn>

          <FooterColumn title="Work With Us">
            <Link href="/asset-owners">Project Creators</Link>
            <Link href="/buyers">Buyers</Link>
          </FooterColumn>
        </div>

        <section className="newsletter-card" aria-labelledby="newsletter-title">
          <div>
            <h2 id="newsletter-title">Stay Updated</h2>
            <p>Get the latest sustainability insights and product updates.</p>
          </div>
          <div className="newsletter-form" role="group" aria-describedby="newsletter-status">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="Enter your email" disabled />
            <button type="button" disabled>Subscribe</button>
            <span className="sr-only" id="newsletter-status">Newsletter subscriptions will open after the email service and consent process are connected.</span>
          </div>
        </section>

        <div className="footer-bottom">
          <p>© 2026 Vayucred. All rights reserved.</p>
          <div className="footer-socials" aria-label="Social media">
            <button type="button" aria-label="Vayucred on X — profile coming soon" title="X profile coming soon" disabled><span aria-hidden="true">X</span></button>
            <a href="https://www.linkedin.com/company/vayucred/" rel="noreferrer" target="_blank" aria-label="Vayucred on LinkedIn"><span aria-hidden="true">in</span></a>
            <button type="button" aria-label="Vayucred on GitHub — profile coming soon" title="GitHub profile coming soon" disabled><span aria-hidden="true">GH</span></button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <nav className="footer-column" aria-label={`${title} footer navigation`}>
      <h2>{title}</h2>
      {children}
    </nav>
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
