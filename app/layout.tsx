import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Improglycerin - Improvisationstheater in Frankfurt am Main!",
    template: "%s | Improglycerin",
  },
  description:
    "Das ist Improtheater! Explosiv. Intensiv. Jetzt. Ob Show, Workshop, Training, Firmenshow. Wir sind Eure Bühne in Rhein-Main!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Nav />
        <div className="center-container">
          <div className="content-wrapper">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
