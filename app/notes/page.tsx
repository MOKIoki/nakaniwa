import Link from "next/link";
import type { CSSProperties } from "react";
import { notes } from "@/lib/notes";

export const metadata = {
  title: "中庭の記録 | 小さなWebの中庭",
  description: "AIと小さなWebを作って、直して、続ける記録。",
};

const secondSeriesSlugs = new Set([
  "coding-democratization-for-whom",
  "web-place-after-sns",
  "small-web-and-non-scale-area",
  "before-technological-commune",
  "we-must-cultivate-our-garden",
]);

export default function NotesPage() {
  const firstSeriesNotes = notes.filter((note) => !secondSeriesSlugs.has(note.slug));

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink}>
            ← 中庭へ
          </Link>
        </nav>

        <header style={styles.header}>
          <h1 style={styles.heading}>中庭の記録</h1>
          <p style={styles.subheading}>
            AIと小さなWebを作って、直して、続ける記録。
          </p>
        </header>

        <section style={styles.indexSection} aria-label="第一部の目次">
          {firstSeriesNotes.map((note) => (
            <Link key={note.slug} href={`/notes/${note.slug}`} style={styles.tileLink}>
              <article style={styles.tile}>
                <h2 style={styles.title}>{note.title}</h2>
                <p style={styles.excerpt}>{note.excerpt}</p>
                <span style={styles.readMore}>読む →</span>
              </article>
            </Link>
          ))}
        </section>

        <section style={styles.moreSection}>
          <p style={styles.moreLabel}>もっと読む</p>
          <Link href="/notes/part-2" style={styles.moreLink}>
            <span style={styles.moreTitle}>
              第二部　AIで作ること、Webに場所を持つこと
            </span>
            <span style={styles.moreText}>
              コーディングの民主化、SNSのあとに個人がWebに場所を持つこと、
              小さいままでいられるWebについて。
            </span>
            <span style={styles.readMore}>第二部を読む →</span>
          </Link>
        </section>
      </div>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    minHeight: "100vh",
    backgroundColor: "#faf9f7",
    padding: "0 1.5rem",
  },
  container: {
    maxWidth: "680px",
    margin: "0 auto",
    paddingBottom: "6rem",
  },
  nav: {
    paddingTop: "2.5rem",
    paddingBottom: "2rem",
  },
  navLink: {
    fontSize: "0.83rem",
    color: "#4a6741",
    textDecoration: "none",
    letterSpacing: "0.03em",
  },
  header: {
    marginBottom: "1.8rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid #ddd9d4",
  },
  heading: {
    fontSize: "1.05rem",
    fontWeight: "normal",
    color: "#2c2c2c",
    margin: "0 0 0.75rem",
    lineHeight: "1.8",
    letterSpacing: "0.08em",
  },
  subheading: {
    fontSize: "0.86rem",
    color: "#7a7470",
    margin: 0,
    lineHeight: "2",
  },
  indexSection: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "0.9rem",
  },
  tileLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },
  tile: {
    border: "1px solid #ddd9d4",
    borderRadius: "18px",
    backgroundColor: "#fffdfa",
    padding: "1.15rem 1.2rem 1.05rem",
  },
  title: {
    fontSize: "0.95rem",
    fontWeight: "normal",
    color: "#2c2c2c",
    margin: "0 0 0.55rem",
    lineHeight: "1.7",
    letterSpacing: "0.02em",
  },
  excerpt: {
    fontSize: "0.82rem",
    color: "#7a7470",
    margin: "0 0 0.85rem",
    lineHeight: "1.85",
  },
  readMore: {
    fontSize: "0.78rem",
    color: "#4a6741",
    letterSpacing: "0.03em",
  },
  moreSection: {
    marginTop: "2.6rem",
    paddingTop: "1.8rem",
    borderTop: "1px solid #ddd9d4",
  },
  moreLabel: {
    fontSize: "0.78rem",
    color: "#7a7470",
    margin: "0 0 0.8rem",
    letterSpacing: "0.08em",
  },
  moreLink: {
    display: "block",
    textDecoration: "none",
    color: "inherit",
    border: "1px solid #ddd9d4",
    borderRadius: "18px",
    backgroundColor: "#fffdfa",
    padding: "1.15rem 1.2rem 1.05rem",
  },
  moreTitle: {
    display: "block",
    fontSize: "0.95rem",
    color: "#2c2c2c",
    lineHeight: "1.8",
    marginBottom: "0.5rem",
    letterSpacing: "0.03em",
  },
  moreText: {
    display: "block",
    fontSize: "0.82rem",
    color: "#7a7470",
    lineHeight: "1.85",
    marginBottom: "0.85rem",
  },
};
