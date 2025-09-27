import styles from "./page.module.css";
import Carousel from "./_components/Carousel";
import Testimonial from "./_components/Testimonial";

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
      <Testimonial author="Wiesbadener Tagblatt">
        Anspruchsvolle Kleinkunst… turbulent und lustig!
      </Testimonial>
      <Testimonial author="RadioX">
        Wirklich klasse, wirklich schön! Ein sehr schöner, sehr unterhaltsamer
        Abend! Ihr arbeitet dran, dass die Improszene in Frankfurt noch
        lebendiger wird.
      </Testimonial>
      <Testimonial author="Sachsenhäuser Wochenblatt">
        Eine Improtheater-Show der besonderen Art!
      </Testimonial>
    </div>
  );
}
