import styles from "./Testimonial.module.css";

interface TestimonialProps {
  children: React.ReactNode;
  backgroundColor?: string;
  author: string;
}

export default function Testimonial(props: TestimonialProps) {
  const backgroundColor =
    props.backgroundColor ?? "var(--color-alternate-light)";

  return (
    <div
      style={{ "--background-color": backgroundColor } as React.CSSProperties}
    >
      <blockquote className={styles.quote}>{props.children}</blockquote>
      <div className={styles.author}>{props.author}</div>
    </div>
  );
}
