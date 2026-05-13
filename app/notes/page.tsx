import Link from "next/link";

export const metadata = {
  title: "中庭の記録 | 小さなWebの中庭",
  description:
    "AIと小さなWebを作って、直して、続ける記録。",
};

export default function Notes() {
  return (
    <main style={styles.main}>
      <nav style={styles.nav}>
        <Link href="/" style={styles.navLink}>
          ← 中庭へ戻る
        </Link>
      </nav>

      <header style={styles.header}>
        <p style={styles.sectionLabel}>中庭の記録</p>
        <h1 style={styles.h1}>最初の中庭を作る</h1>
      </header>

      <article style={styles.article}>
        <p style={styles.p}>
          AIを使えば、小さなWebサービスを作ること自体は、以前よりずっと近くなりました。
        </p>
        <p style={styles.p}>
          けれど、作れることと、続けられることは同じではありません。
        </p>
        <p style={styles.p}>
          book-roomでは、本を読み終えたあとに残る言葉をどう置くかを考えました。
          <br />
          movie-roomでは、映画を観たあとに残る記憶や引っかかりを、評価やランキングにしない形で置こうとしました。
          <br />
          さんしんリズム稽古では、30秒だけ三線と工工四にふれる、小さな稽古を作りました。
        </p>
        <p style={styles.p}>
          どれも、大きなサービスにするためのものではありません。
          <br />
          少し触れて、少し残して、また離れられる場所です。
        </p>
        <p style={styles.p}>
          この中庭は、私の個人サイトや作品集として閉じたいわけではありません。
        </p>
        <p style={styles.p}>
          最初は、自分で作った場所から並べます。
          <br />
          けれど本当は、AIと一緒に小さなWebを作った人たちの場所が、巨大なSNSや検索順位とは別の仕方で、静かに見つかる余地があればいいと思っています。
        </p>
        <p style={styles.p}>
          ただし、最初から登録機能やランキングを作ると、すぐに別のものになります。
          <br />
          だから今は、まず小さく並べるだけにします。
        </p>
        <p style={styles.p}>
          この中庭は、それらを大きく見せるための場所ではなく、
          <br />
          静かに並べておくための入口です。
        </p>
        <p style={styles.p}>
          できあがったものだけでなく、直したこと、削ったこと、迷ったことも、
          <br />
          少しずつ記録していきます。
        </p>
      </article>

      <footer style={styles.footer}>
        <Link href="/" style={styles.footerLink}>
          ← 中庭へ戻る
        </Link>
      </footer>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    maxWidth: "640px",
    margin: "0 auto",
    padding: "3rem 1.5rem 6rem",
  },
  nav: {
    marginBottom: "3rem",
  },
  navLink: {
    fontSize: "0.85rem",
    color: "#4a6741",
    letterSpacing: "0.03em",
  },
  header: {
    marginBottom: "2.5rem",
    borderTop: "1px solid #ddd9d4",
    paddingTop: "2rem",
  },
  sectionLabel: {
    fontSize: "0.8rem",
    color: "#9b948e",
    letterSpacing: "0.08em",
    marginBottom: "0.6rem",
  },
  h1: {
    fontSize: "1.3rem",
    fontWeight: "normal",
    letterSpacing: "0.05em",
    color: "#2c2c2c",
  },
  article: {
    marginBottom: "4rem",
  },
  p: {
    fontSize: "0.95rem",
    lineHeight: "2",
    color: "#3a3530",
    marginBottom: "1.5rem",
  },
  footer: {
    borderTop: "1px solid #ddd9d4",
    paddingTop: "2rem",
  },
  footerLink: {
    fontSize: "0.85rem",
    color: "#4a6741",
    letterSpacing: "0.03em",
  },
};
