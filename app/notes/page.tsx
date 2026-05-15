import Link from "next/link";
import { notes } from "@/lib/notes";

export const metadata = {
  title: "中庭の記録 | 小さなWebの中庭",
  description: "AIと小さなWebを作って、直して、続ける記録。",
};

export default function NotesPage() {
  const sorted = notes;

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

        <ul style={styles.list}>
          {sorted.map((note) => (
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

const styles: { [key: string]: React.CSSProperties } = {
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
    marginBottom: "3rem",
    paddingBottom: "2rem",
    borderBottom: "1px solid #ddd9d4",
  },
  heading: {
    fontSize: "1rem",
    fontWeight: "normal",
    color: "#2c2c2c",
    margin: "0 0 0.7rem",
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