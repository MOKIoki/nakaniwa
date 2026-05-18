import Link from "next/link";
import { notFound } from "next/navigation";
import { notes, getNoteBySlug } from "@/lib/notes";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return {};
  return {
    title: `${note.title} | 中庭の記録`,
    description: note.excerpt,
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();

    const currentIndex = notes.findIndex((item) => item.slug === slug);
  const previousNote = currentIndex > 0 ? notes[currentIndex - 1] : null;
  const nextNote =
    currentIndex >= 0 && currentIndex < notes.length - 1
      ? notes[currentIndex + 1]
      : null;

  const paragraphs = note.body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <Link href="/notes" style={styles.navLink}>
            ← 記録の一覧へ
          </Link>
        </nav>

        <article>
          <header style={styles.header}>
            <h1 style={styles.heading}>{note.title}</h1>
            <p style={styles.excerpt}>{note.excerpt}</p>
          </header>

          <div style={styles.body}>
            {paragraphs.map((para, i) =>
              para === "---" ? (
                <hr key={i} style={styles.hr} />
              ) : (
                <p key={i} style={styles.paragraph}>
                  {para}
                </p>
              )
            )}
          </div>
        </article>
        {(previousNote || nextNote) && (
          <nav style={styles.noteNav}>
            <div>
              {previousNote && (
                <Link href={`/notes/${previousNote.slug}`} style={styles.noteNavCard}>
                  <span style={styles.noteNavLabel}>前の記録</span>
                  <span style={styles.noteNavTitle}>{previousNote.title}</span>
                </Link>
              )}
            </div>

            <div>
              {nextNote && (
                <Link
                  href={`/notes/${nextNote.slug}`}
                  style={{ ...styles.noteNavCard, ...styles.noteNavCardNext }}
                >
                  <span style={styles.noteNavLabel}>次の記録</span>
                  <span style={styles.noteNavTitle}>{nextNote.title}</span>
                </Link>
              )}
            </div>
          </nav>
        )}
        <footer style={styles.footer}>
          <Link href="/notes" style={styles.navLink}>
            ← 記録の一覧へ
          </Link>
        </footer>
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
    marginBottom: "2.5rem",
    paddingBottom: "2rem",
    borderBottom: "1px solid #ddd9d4",
  },
  heading: {
    fontSize: "1.1rem",
    fontWeight: "normal",
    color: "#2c2c2c",
    margin: "0 0 0.7rem",
    lineHeight: "1.6",
    letterSpacing: "0.02em",
  },
  excerpt: {
    fontSize: "0.83rem",
    color: "#9b948e",
    margin: 0,
    lineHeight: "1.85",
  },
  body: {},
  paragraph: {
    fontSize: "0.9rem",
    color: "#4a4540",
    marginBottom: "1.5rem",
    lineHeight: "2.1",
    textIndent: "1em",
  },
  hr: {
    border: "none",
    borderTop: "1px solid #ddd9d4",
    margin: "2.5rem 0",
  },
  noteNav: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    marginTop: "3.5rem",
    paddingTop: "1.5rem",
    borderTop: "1px solid #ddd9d4",
  },
  noteNavCard: {
    display: "block",
    textDecoration: "none",
  },
  noteNavCardNext: {
    textAlign: "right",
  },
  noteNavLabel: {
    display: "block",
    marginBottom: "0.35rem",
    fontSize: "0.72rem",
    color: "#aaa39c",
    letterSpacing: "0.08em",
  },
  noteNavTitle: {
    display: "block",
    fontSize: "0.82rem",
    color: "#4a6741",
    lineHeight: "1.7",
  },
  footer: {
    marginTop: "4rem",
    paddingTop: "2rem",
    borderTop: "1px solid #ddd9d4",
  },
};