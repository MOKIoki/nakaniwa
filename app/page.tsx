import Link from "next/link";
import type { CSSProperties } from "react";

const rooms = [
  {
    label: "読む",
    name: "本の部屋",
    sub: "book-room",
    desc: "本を読み終えたあと、少しだけ話す場所。",
    linkLabel: "本の部屋へ",
    href: "https://book-room-tau.vercel.app/",
  },
  {
    label: "観る",
    name: "映画の部屋",
    sub: "movie-room",
    desc: "映画を観たあと、残ったものを置く場所。",
    linkLabel: "映画の部屋へ",
    href: "https://movie-room-bice.vercel.app/",
  },
  {
    label: "鳴らす",
    name: "音の稽古場",
    sub: "さんしんリズム稽古",
    desc: "30秒で、三線にふれる小さな音ゲー。",
    linkLabel: "音の稽古場へ",
    href: "https://sanshin-rhythm.vercel.app/",
  },
];

export default function Home() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.h1}>小さなWebの中庭</h1>
        <p style={styles.lead}>
          小さく作られた場所を、
          <br />
          少しずつ並べています。
        </p>
        <p style={styles.leadSub}>
          本を読み終えたあとに入る部屋。
          <br />
          映画を観たあとに残る場所。
          <br />
          30秒だけ、三線にふれる稽古。
        </p>
        <p style={styles.leadSub}>気になるところから、少しだけどうぞ。</p>
      </header>

      <section style={styles.cardsSection}>
        <p style={styles.cardsHeading}>中庭に面した場所</p>
        <div style={styles.cards}>
          {rooms.map((room) => (
            <article key={room.name} style={styles.card}>
              <p style={styles.cardLabel}>{room.label}</p>
              <p style={styles.cardSub}>{room.sub}</p>
              <h2 style={styles.cardName}>{room.name}</h2>
              <p style={styles.cardDesc}>{room.desc}</p>
              <a
                href={room.href}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.cardLink}
              >
                {room.linkLabel} →
              </a>
            </article>
          ))}
          <article style={styles.emptyCard}>
            <p style={styles.cardLabel}>余白</p>
            <p style={styles.cardSub}>これから置かれる場所</p>
            <h2 style={styles.cardName}>まだ空いている場所</h2>
            <p style={styles.cardDesc}>
              いまは、自分で作った小さなWebから並べています。
              いつか、ほかの人の小さな場所も、隣に置けるようにしたいと考えています。
            </p>
            <p style={styles.emptyNote}>まだ準備中</p>
          </article>
        </div>
      </section>

      <div style={styles.lower}>
        <section style={styles.lowerSection}>
          <h2 style={styles.lowerTitle}>中庭の記録</h2>
          <p style={styles.lowerText}>
            作ったものを置き、直し、続ける中で見えてきたことを、少しずつ残しています。
          </p>
          <Link href="/notes" style={styles.lowerLink}>
            記録をすべて見る →
          </Link>
        </section>
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>小さなWebの中庭</p>
      </footer>
    </main>
  );
}

const styles: { [key: string]: CSSProperties } = {
  main: {
    maxWidth: "640px",
    margin: "0 auto",
    padding: "5rem 1.5rem 6rem",
  },
  header: {
    marginBottom: "5rem",
  },
  h1: {
    fontSize: "1.5rem",
    fontWeight: "normal",
    letterSpacing: "0.1em",
    marginBottom: "2.2rem",
    color: "#2c2c2c",
  },
  lead: {
    fontSize: "1rem",
    lineHeight: "2.1",
    marginBottom: "1.2rem",
    color: "#2c2c2c",
  },
  leadSub: {
    fontSize: "0.9rem",
    lineHeight: "2.1",
    marginBottom: "0.8rem",
    color: "#6b6560",
  },
  cardsSection: {
    marginBottom: "5rem",
  },
  cardsHeading: {
    fontSize: "0.75rem",
    color: "#9b948e",
    letterSpacing: "0.12em",
    marginBottom: "1.2rem",
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  card: {
    border: "1px solid #ddd9d4",
    borderRadius: "4px",
    padding: "1.5rem 1.5rem 1.4rem",
    backgroundColor: "#faf9f7",
  },
  emptyCard: {
    border: "1px dashed #ddd9d4",
    borderRadius: "4px",
    padding: "1.5rem 1.5rem 1.4rem",
    backgroundColor: "#fbfaf8",
    opacity: 0.82,
  },
  cardLabel: {
    display: "inline-block",
    fontSize: "0.7rem",
    color: "#9b948e",
    letterSpacing: "0.1em",
    border: "1px solid #ddd9d4",
    borderRadius: "2px",
    padding: "0.15em 0.6em",
    marginBottom: "0.8rem",
  },
  cardSub: {
    fontSize: "0.78rem",
    color: "#b0a9a3",
    letterSpacing: "0.04em",
    marginBottom: "0.25rem",
  },
  cardName: {
    fontSize: "1.1rem",
    fontWeight: "normal",
    letterSpacing: "0.05em",
    marginBottom: "0.6rem",
    color: "#2c2c2c",
  },
  cardDesc: {
    fontSize: "0.88rem",
    color: "#6b6560",
    lineHeight: "1.85",
    marginBottom: "1.1rem",
  },
  cardLink: {
    fontSize: "0.83rem",
    color: "#4a6741",
    letterSpacing: "0.03em",
  },
  emptyNote: {
    fontSize: "0.8rem",
    color: "#b0a9a3",
    letterSpacing: "0.04em",
    margin: 0,
  },
  lower: {
    borderTop: "1px solid #ddd9d4",
    paddingTop: "2.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    marginBottom: "4rem",
  },
  lowerSection: {
    border: "1px solid #e4dfd8",
    borderRadius: "4px",
    padding: "1.4rem 1.5rem",
    backgroundColor: "#fbfaf8",
  },
  lowerTitle: {
    fontSize: "0.78rem",
    fontWeight: "normal",
    color: "#9b948e",
    letterSpacing: "0.1em",
    marginBottom: "0.7rem",
  },
  lowerText: {
    fontSize: "0.87rem",
    color: "#7a7470",
    lineHeight: "2",
    marginBottom: "0.8rem",
  },
  lowerLink: {
    fontSize: "0.83rem",
    color: "#4a6741",
    letterSpacing: "0.03em",
  },
  noteList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 1rem",
    display: "flex",
    flexDirection: "column",
  },
  noteCardLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },
  noteCard: {
    padding: "0.9rem 0",
    borderBottom: "1px solid #ede9e4",
  },
  noteDate: {
    display: "block",
    fontSize: "0.73rem",
    color: "#b0a9a3",
    letterSpacing: "0.04em",
    marginBottom: "0.3rem",
  },
  noteTitle: {
    fontSize: "0.87rem",
    color: "#4a4540",
    lineHeight: "1.7",
    marginBottom: "0.25rem",
  },
  noteExcerpt: {
    fontSize: "0.8rem",
    color: "#9b948e",
    lineHeight: "1.75",
  },
  footer: {
    borderTop: "1px solid #ddd9d4",
    paddingTop: "2rem",
    textAlign: "center",
  },
  footerText: {
    fontSize: "0.78rem",
    color: "#9b948e",
    letterSpacing: "0.1em",
  },
};