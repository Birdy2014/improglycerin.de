import styles from "./page.module.css";
import Carousel from "./_components/Carousel";

export default function Home() {
  return (
    <div className={styles.page}>
      <Carousel
        images={[
          "https://improglycerin.de/wp-content/uploads/2021/11/improglycerin-frankfurt-improtheater-Slider-2021-3-1200x500.jpg",
          "https://improglycerin.de/wp-content/uploads/2021/11/improglycerin-frankfurt-improtheater-Slider-2021-2-1200x500.jpg",
          "https://improglycerin.de/wp-content/uploads/2019/11/improglycerin-frankfurt-improtheater-Slider19-03-1200x500.jpg",
          "https://improglycerin.de/wp-content/uploads/2021/11/improglycerin-frankfurt-improtheater-Slider-2021-1-1200x500.jpg",
          "https://improglycerin.de/wp-content/uploads/2019/11/improglycerin-frankfurt-improtheater-Slider19-02-1200x500.jpg",
          "https://improglycerin.de/wp-content/uploads/2019/11/improglycerin-frankfurt-improtheater-Slider19-04-1200x500.jpg",
        ]}
      />
    </div>
  );
}
