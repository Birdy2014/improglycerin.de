import Link from "next/link";
import localFont from "next/font/local";
import styles from "./Footer.module.css";

const icomoon = localFont({ src: "../../public/icomoon.woff" });

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line}></div>
      <div className="center-container">
        <div className={styles.center}>
          <div>
            Copyright 2025 – IMPROGLYCERIN Improvisationstheater aus Frankfurt
            am Main e.V.
          </div>
          <div className={styles["links-legal"]}>
            <Link href="/datenschutz">DATENSCHUTZ</Link>
            <Link href="/impressum">IMPRESSUM</Link>
          </div>
          <div className={`${styles["links-social"]} ${icomoon.className}`}>
            <Link
              href="https://www.facebook.com/improglycerin"
              className={styles["icon-facebook"]}
            ></Link>
            <Link
              href="https://www.instagram.com/improglycerin"
              className={styles["icon-instagram"]}
            ></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
