import FormulaLayer from "@/components/FormulaLayer";
import Scene from "@/components/Scene";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.backdrop} />
      <Scene />
      <FormulaLayer />

      <div className={styles.content}>
        <header className={styles.nav}>
          <div className={`${styles.container} ${styles.navInner}`}>
            <div className={styles.logo}>Bayes</div>
            <nav className={styles.navLinks} aria-label="Primary">
              <a href="#services">Services</a>
              <a href="#approach">Approach</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main className={styles.main}>
          <section className={`${styles.container} ${styles.hero}`}>
            <div>
              <div className={styles.eyebrow}>Bayes AS</div>
              <h1 className={styles.heroTitle}>
                Professional IT services with a Bayesian edge.
              </h1>
              <p className={styles.heroSubtitle}>
                High-performance web pages, system integrations, and APIs built
                for clarity, speed, and a quietly mystic experience.
              </p>
              <div className={styles.heroMeta}>
                <Badge variant="outline" className={styles.tag}>
                  Prior + Evidence
                </Badge>
                <Badge variant="outline" className={styles.tag}>
                  Signal-Driven
                </Badge>
                <Badge variant="outline" className={styles.tag}>
                  Modern Web
                </Badge>
              </div>
              <div className={styles.heroActions}>
                <Button
                  asChild
                  className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90"
                >
                  <a href="#contact">Start a project</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 hover:text-[hsl(var(--primary))]"
                >
                  <a href="#services">See services</a>
                </Button>
              </div>
            </div>
            <Card className={styles.heroPanel}>
              <CardHeader className={styles.heroPanelHeader}>
                <h3>Bayes professional IT services</h3>
              </CardHeader>
              <CardContent className={styles.heroPanelContent}>
                <p>
                  We translate uncertainty into decisive systems. From crisp public
                  pages to integrated platforms, Bayes focuses on outcomes that
                  feel inevitable.
                </p>
                <ul>
                  <li>Web pages that load fast and convert.</li>
                  <li>System integration with clean, reliable data flow.</li>
                  <li>APIs designed for scale and clarity.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="services" className={`${styles.container} ${styles.section}`}>
            <div className={styles.sectionHeader}>
              <h2>Services</h2>
              <p>
                Focused, senior execution across the core layers of your digital
                presence.
              </p>
            </div>
            <div className={styles.cards}>
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <h3>Web pages</h3>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <p>
                    Marketing sites and product pages built for performance,
                    accessibility, and atmosphere.
                  </p>
                </CardContent>
              </Card>
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <h3>System integration</h3>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <p>
                    Connect the tools that matter. Reliable pipelines, clear data
                    contracts, and calm operations.
                  </p>
                </CardContent>
              </Card>
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <h3>API design</h3>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <p>
                    Thoughtful interfaces that scale with your product and keep
                    teams moving fast.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="approach" className={`${styles.container} ${styles.section}`}>
            <div className={styles.sectionHeader}>
              <h2>Approach</h2>
              <p>
                A calm, evidence-driven path from hypothesis to production. We
                keep the mystery in the visuals, not the delivery.
              </p>
            </div>
            <div className={`${styles.approach} ${styles.approachGrid}`}>
              <div className={styles.signal}>
                <h4>Signal mapping</h4>
                <p>
                  We model the problem space, align on priorities, and define
                  the clearest measurable outcome.
                </p>
              </div>
              <div className={styles.signal}>
                <h4>Precision build</h4>
                <p>
                  Elegant engineering with disciplined scope, rapid feedback,
                  and modern tooling.
                </p>
              </div>
              <div className={styles.signal}>
                <h4>Launch + evolve</h4>
                <p>
                  Ship with confidence, then iterate on real-world signals and
                  data.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer id="contact" className={styles.footer}>
          <div className={`${styles.container} ${styles.footerInner}`}>
            <div>
              <strong>Bayes</strong>
              <p>Professional IT services with a modern, mystic edge.</p>
              <p>Available for new projects.</p>
            </div>
            <div className={styles.footerLinks}>
              <a href="#services">Services</a>
              <a href="#approach">Approach</a>
              <a href="/jakub">Jakub</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
