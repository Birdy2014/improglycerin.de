import Link from "next/link";
import styles from "./Button.module.css";

type Props =
  | { children: React.ReactNode; href?: never; type?: never }
  | { children: React.ReactNode; href: string; type?: never }
  | { children: React.ReactNode; href?: never; type: "submit" };

export default function Button(props: Props) {
  const { children } = props;

  if (props.href !== undefined) {
    return (
      <Link className={styles.button} href={props.href}>
        {children}
      </Link>
    );
  }

  if (props.type === "submit") {
    return (
      <button className={styles.button} type="submit">
        {children}
      </button>
    );
  }

  return <div className={styles.button}>{children}</div>;
}
