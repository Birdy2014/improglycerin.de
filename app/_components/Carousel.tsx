"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps {
  images: string[];
}

export default function Carousel(props: CarouselProps) {
  const [idxVisible, setIdxVisible] = useState({ idx: 0, direction: 0 });
  const transitionRunning = useRef(false);

  useEffect(() => {
    const interval = setInterval(nextImage, 6000);
    return () => clearInterval(interval);
  }, [idxVisible]);

  function prevImage() {
    if (transitionRunning.current) {
      return;
    }

    setIdxVisible(({ idx }) => ({
      idx: (idx || props.images.length) - 1,
      direction: -1,
    }));
  }

  function nextImage() {
    if (transitionRunning.current) {
      return;
    }

    setIdxVisible(({ idx }) => ({
      idx: (idx + 1) % props.images.length,
      direction: 1,
    }));
  }

  function imgCssClasses(index: number): string[] {
    const idxPrev = (idxVisible.idx || props.images.length) - 1;
    const idxNext = (idxVisible.idx + 1) % props.images.length;

    if (index === idxVisible.idx) {
      return [styles.image];
    } else if (index === idxPrev) {
      return [
        styles.image,
        styles.previous,
        ...(idxVisible.direction === -1 ? [styles.inactive] : []),
      ];
    } else if (index === idxNext) {
      return [
        styles.image,
        styles.next,
        ...(idxVisible.direction === 1 ? [styles.inactive] : []),
      ];
    } else {
      return [styles.image, styles.inactive];
    }
  }

  return (
    <div className={styles.carousel}>
      <a
        className={[styles.button, styles["button-prev"]].join(" ")}
        onClick={prevImage}
      ></a>
      <a
        className={[styles.button, styles["button-next"]].join(" ")}
        onClick={nextImage}
      ></a>
      {props.images.map((src, index) => (
        <img
          key={src}
          src={src}
          className={imgCssClasses(index).join(" ")}
          onTransitionStart={() => (transitionRunning.current = true)}
          onTransitionEnd={() => (transitionRunning.current = false)}
        />
      ))}
    </div>
  );
}
