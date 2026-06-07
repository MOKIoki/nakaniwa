import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "小さなWebの中庭",
  description:
    "小さく作られた場所を、少しずつ並べています。本の部屋、映画の部屋、音の稽古場。",
  verification: {
    google: "j-fxDiGkzwGAIFo7VGHU808kGF5E0KvLMufSr8owPpY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}<Analytics /></body>
      
    </html>
  );
}
