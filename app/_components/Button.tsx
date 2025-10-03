import Link from "next/link";
import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function Button(props: Props) {
  return (
    <Link className={styles.button} href={props.href}>
      {props.children}
    </Link>
  );
}
