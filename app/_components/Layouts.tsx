import styles from "./Layouts.module.css";

export function Vertical({ children }: { children: React.ReactNode }) {
  return <div className={styles.vertical}>{children}</div>;
}

export function Horizontal({
  children,
  fixedWidth,
}: {
  children: React.ReactNode;
  fixedWidth?: boolean;
}) {
  return (
    <div
      className={[
        styles.horizontal,
        ...((fixedWidth ?? true) ? [styles.fixedWidth] : []),
      ].join(" ")}
    >
      {children}
    </div>
  );
}
