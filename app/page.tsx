import Link from "next/link";

const rooms = [
  {
    name: "本の部屋",
    sub: "book-room",
    desc: "本を読み終えたあと、少しだけ話す場所。",
    label: "本の部屋へ",
    href: "https://book-room-sigma.vercel.app/",
  },
  {
    name: "映画の部屋",
    sub: "movie-room",
    desc: "映画を観たあと、残ったものを置く場所。",
    label: "映画の部屋へ",
    href: "https://movie-room-bice.vercel.app/",
  },
  {
    name: "音の稽古場",
    sub: "さんしんリズム稽古",
    desc: "30秒で、三線にふれる小さな音ゲー。",
    label: "音の稽古場へ",
    href: "https://sanshin-rhythm.vercel.app/",
  },
];

export default function Home() {
  return (
    <main style={styles.main}>
      {/* ヘッダー */}
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

      {/* 入口カード */}
      <section style={styles.cards}>
        {rooms.map((room) => (
          <article key={room.name} style={styles.card}>
            <p style={styles.cardSub}>{room.sub}</p>
            <h2 style={styles.cardName}>{room.name}</h2>
            <p style={styles.cardDesc}>{room.desc}</p>
            <a
              href={room.href}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.cardLink}
            >
              {room.label} →
            </a>
          </article>
        ))}
      </section>

      {/* この中庭について */}
      <section style={styles.about}>
        <h2 style={styles.aboutTitle}>この中庭について</h2>
        <p style={styles.aboutText}>
          ここは、小さく作られたWebの入口です。
          <br />
          最初は、自分で作った場所から並べています。
          <br />
          いつか、ほかの小さな場所も、
          <br />
          少しずつ隣に置けるようにしたいと考えています。
        </p>
      </section>

      {/* 中庭の記録 */}
      <section style={styles.notes}>
        <h2 style={styles.notesTitle}>中庭の記録</h2>
        <p style={styles.notesDesc}>
          AIと小さなWebを作って、直して、続ける記録。
          <br />
          できあがったものだけでなく、迷ったことや削ったことも少しずつ残していきます。
        </p>
        <Link href="/notes" style={styles.notesLink}>
          記録を読む →
        </Link>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>小さなWebの中庭</p>
      </footer>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    maxWidth: "640px",
    margin: "0 auto",
    padding: "4rem 1.5rem 6rem",
  },
  header: {
    marginBottom: "4rem",
  },
  h1: {
    fontSize: "1.6rem",
    fontWeight: "normal",
    letterSpacing: "0.08em",
    marginBottom: "2rem",
    color: "#2c2c2c",
  },
  lead: {
    fontSize: "1.05rem",
    lineHeight: "2",
    marginBottom: "1.2rem",
    color: "#2c2c2c",
  },
  leadSub: {
    fontSize: "0.95rem",
    lineHeight: "2",
    marginBottom: "1rem",
    color: "#6b6560",
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    marginBottom: "5rem",
  },
  card: {
    borderTop: "1px solid #ddd9d4",
    paddingTop: "1.5rem",
  },
  cardSub: {
    fontSize: "0.8rem",
    color: "#9b948e",
    letterSpacing: "0.05em",
    marginBottom: "0.3rem",
  },
  cardName: {
    fontSize: "1.15rem",
    fontWeight: "normal",
    letterSpacing: "0.05em",
    marginBottom: "0.6rem",
    color: "#2c2c2c",
  },
  cardDesc: {
    fontSize: "0.9rem",
    color: "#6b6560",
    lineHeight: "1.8",
    marginBottom: "1rem",
  },
  cardLink: {
    fontSize: "0.85rem",
    color: "#4a6741",
    letterSpacing: "0.03em",
  },
  about: {
    borderTop: "1px solid #ddd9d4",
    paddingTop: "2.5rem",
    marginBottom: "3rem",
  },
  aboutTitle: {
    fontSize: "0.85rem",
    fontWeight: "normal",
    color: "#9b948e",
    letterSpacing: "0.08em",
    marginBottom: "1rem",
  },
  aboutText: {
    fontSize: "0.9rem",
    color: "#6b6560",
    lineHeight: "2",
  },
  notes: {
    borderTop: "1px solid #ddd9d4",
    paddingTop: "2.5rem",
    marginBottom: "3rem",
  },
  notesTitle: {
    fontSize: "0.85rem",
    fontWeight: "normal",
    color: "#9b948e",
    letterSpacing: "0.08em",
    marginBottom: "0.8rem",
  },
  notesDesc: {
    fontSize: "0.9rem",
    color: "#6b6560",
    lineHeight: "2",
    marginBottom: "1rem",
  },
  notesLink: {
    fontSize: "0.85rem",
    color: "#4a6741",
    letterSpacing: "0.03em",
  },
  footer: {
    borderTop: "1px solid #ddd9d4",
    paddingTop: "2rem",
    textAlign: "center",
  },
  footerText: {
    fontSize: "0.8rem",
    color: "#9b948e",
    letterSpacing: "0.08em",
  },
};
