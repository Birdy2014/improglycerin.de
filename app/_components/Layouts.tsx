import styles from "./Layouts.module.css";

export function Vertical({ children }: { children: React.ReactNode }) {
  return <div className={styles.vertical}>{children}</div>;
}

export function Horizontal({ children }: { children: React.ReactNode }) {
  return <div className={styles.horizontal}>{children}</div>;
}
