import Link from "next/link";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
          <div className={styles["links-social"]}>
            <Link
              href="https://www.facebook.com/improglycerin"
              title="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              href="https://www.instagram.com/improglycerin"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
