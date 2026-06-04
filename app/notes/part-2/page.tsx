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
            コーディングの民主化、SNSのあとに個人がWebに場所を持つこと、小さいままでいられるWebについて。
          </p>
        </header>

        <ul style={styles.list}>
          {secondSeriesNotes.map((note) => (
            <li key={note.slug} style={styles.listItem}>
              <Link href={`/notes/${note.slug}`} style={styles.cardLink}>
                <article style={styles.card}>
                  <h2 style={styles.title}>{note.title}</h2>
                  <p style={styles.excerpt}>{note.excerpt}</p>
                  <span style={styles.readMore}>読む →</span>
                </article>
              </Link>
            </li>
          ))}
        </ul>
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
    maxWidth: "640px",
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
    marginBottom: "1.6rem",
    paddingBottom: "1.4rem",
    borderBottom: "1px solid #ddd9d4",
  },
  kicker: {
    fontSize: "0.78rem",
    color: "#7a7470",
    margin: "0 0 0.8rem",
    letterSpacing: "0.08em",
  },
  heading: {
    fontSize: "1rem",
    fontWeight: "normal",
    color: "#2c2c2c",
    margin: "0 0 0.7rem",
    lineHeight: "1.8",
    letterSpacing: "0.1em",
  },
  subheading: {
    fontSize: "0.87rem",
    color: "#7a7470",
    margin: 0,
    lineHeight: "2",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    margin: 0,
  },
  cardLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },
  card: {
    padding: "1.5rem 0",
    borderBottom: "1px solid #ddd9d4",
  },
  title: {
    fontSize: "0.95rem",
    fontWeight: "normal",
    color: "#2c2c2c",
    margin: "0 0 0.5rem",
    lineHeight: "1.7",
    letterSpacing: "0.02em",
  },
  excerpt: {
    fontSize: "0.83rem",
    color: "#7a7470",
    margin: "0 0 0.8rem",
    lineHeight: "1.85",
  },
  readMore: {
    fontSize: "0.78rem",
    color: "#4a6741",
    letterSpacing: "0.03em",
  },
};
