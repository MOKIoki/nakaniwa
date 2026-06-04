import Link from "next/link";
import type { CSSProperties } from "react";
import { notes } from "@/lib/notes";

export const metadata = {
  title: "第二部 | 中庭の記録",
  description: "AIで作ること、Webに場所を持つことについての記録。",
};

const secondSeriesSlugs = [
  "coding-democratization-for-whom",
  "web-place-after-sns",
  "small-web-and-non-scale-area",
  "before-technological-commune",
  "we-must-cultivate-our-garden",
];

export default function NotesPartTwoPage() {
  const secondSeriesNotes = secondSeriesSlugs
    .map((slug) => notes.find((note) => note.slug === slug))
    .filter((note): note is NonNullable<typeof note> => Boolean(note));

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <Link href="/notes" style={styles.navLink}>
            ← 中庭の記録へ
          </Link>
        </nav>

        <header style={styles.header}>
          <p style={styles.kicker}>中庭の記録　第二部</p>
          <h1 style={styles.heading}>AIで作ること、Webに場所を持つこと</h1>
          <p style={styles.subheading}>
            コーディングの民主化、SNSのあとに個人がWebに場所を持つこと、
            小さいままでいられるWebについて。
          </p>
        </header>

        <section style={styles.indexSection} aria-label="第二部の目次">
          {secondSeriesNotes.map((note, index) => (
            <Link key={note.slug} href={`/notes/${note.slug}`} style={styles.tileLink}>
              <article style={styles.tile}>
                <p style={styles.count}>第{index + 1}回</p>
                <h2 style={styles.title}>{note.title.replace(/^第\d回　/, "")}</h2>
                <p style={styles.excerpt}>{note.excerpt}</p>
                <span style={styles.readMore}>読む →</span>
              </article>
            </Link>
          ))}
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
  kicker: {
    fontSize: "0.78rem",
    color: "#7a7470",
    margin: "0 0 0.8rem",
    letterSpacing: "0.08em",
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
  count: {
    fontSize: "0.75rem",
    color: "#4a6741",
    margin: "0 0 0.45rem",
    letterSpacing: "0.08em",
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
};
