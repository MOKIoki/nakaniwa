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
        </div>
      </section>

      <div style={styles.lower}>
        <section style={styles.lowerSection}>
          <h2 style={styles.lowerTitle}>この中庭について</h2>
          <p style={styles.lowerText}>
            ここは、小さく作られたWebの入口です。
            最初は、自分で作った場所から並べています。
            いつか、ほかの小さな場所も、少しずつ隣に置けるようにしたいと考えています。
          </p>
        </section>

        <section style={styles.lowerSection}>
          <h2 style={styles.lowerTitle}>中庭の記録</h2>
          <p style={styles.lowerText}>
            AIと小さなWebを作って、直して、続ける記録。
            できあがったものだけでなく、迷ったことや削ったことも少しずつ残していきます。
          </p>
          <Link href="/notes" style={styles.lowerLink}>
            記録を読む →
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
  lower: {
    borderTop: "1px solid #ddd9d4",
    paddingTop: "2.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
    marginBottom: "4rem",
  },
  lowerSection: {},
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
