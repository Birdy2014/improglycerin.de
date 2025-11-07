import type { Metadata } from "next";
import Script from "next/script";
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Improglycerin",
    url: "https://improglycerin.de",
  };

  return (
    <html lang="de">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://analytics.improglycerin.de/script.js"
          data-website-id="392ef956-e031-4bf6-a6fe-024a2297022b"
          data-domains="improglycerin.de"
        ></Script>
      </head>
      <body className={roboto.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Nav />
        <div className="centerContainer">
          <div className="contentWrapper">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
