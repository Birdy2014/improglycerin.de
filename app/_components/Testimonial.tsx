import styles from "./Testimonial.module.css";

interface TestimonialProps {
  children: React.ReactNode;
  author: string;
}

export default function Testimonial(props: TestimonialProps) {
  return (
    <div className={styles.testimonial}>
      <blockquote className={styles.quote}>{props.children}</blockquote>
      <div className={styles.author}>{props.author}</div>
    </div>
  );
}
