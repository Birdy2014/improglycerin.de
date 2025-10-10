import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./page.module.css";
import { Horizontal } from "../_components/Layouts";

export const metadata: Metadata = {
  title: "KONTAKT",
};

export default function Kontakt() {
  return (
    <div className={styles.page}>
      <img src="/header-kontakt.jpg" />

      <h2>Anfragen</h2>
      <Horizontal>
        <div className={styles.tile}>
          <FontAwesomeIcon icon={faEnvelope} />
          <div>hallo@improglycerin.de</div>
        </div>
        <div className={styles.tile}>
          <FontAwesomeIcon icon={faPhone} />
          <div>0179 4920046</div>
        </div>
      </Horizontal>

      <h2>Folgen</h2>
      <Horizontal>
        <div className={styles.tile}>
          <FontAwesomeIcon icon={faFacebookF} />
          <Link href="https://www.facebook.com/improglycerin">
            improglycerin
          </Link>
        </div>
        <div className={styles.tile}>
          <FontAwesomeIcon icon={faInstagram} />
          <Link href="https://www.instagram.com/improglycerin/">
            improglycerin
          </Link>
        </div>
      </Horizontal>

      <h2>Spielen</h2>
      <Horizontal>
        <div className={styles.tile}>
          <FontAwesomeIcon icon={faFacebookF} />
          <Link href="https://www.facebook.com/groups/904414142934712">
            Improtheater Frankfurt
          </Link>
        </div>
        <div className={styles.tile}>
          <FontAwesomeIcon icon={faNewspaper} />
          <Link href="https://improtheater-frankfurt.de/newsletter">
            Newsletter
          </Link>
        </div>
      </Horizontal>
    </div>
  );
}
