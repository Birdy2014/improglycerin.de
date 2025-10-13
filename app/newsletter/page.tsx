import type { Metadata } from "next";
import styles from "./page.module.css";
import Newsletter from "./Newsletter";

export const metadata: Metadata = {
  title: "NEWSLETTER",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <img src="/teaser-newsletter.jpg" />

      <Newsletter />
    </div>
  );
}
