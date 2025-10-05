"use client";

import { useEffect, useState } from "react";
import Testimonial from "../_components/Testimonial";
import styles from "./Quotes.module.css";

export default function Quotes() {
  const [visibleQuote, setVisibleQuote] = useState(0);

  const quotes = [
    {
      author: "Hauke",
      text: "Impro heißt für mich: Kreativität ausleben!",
    },
    {
      author: "Susanne",
      text: "Impro heißt für mich: Verbindungen schaffen!",
    },
    {
      author: "Elisa",
      text: "Impro heißt für mich: Vertrauen für verrückte Ideen schaffen.",
    },
    {
      author: "Torben",
      text: "Impro heißt für mich: über mich hinaus wachsen.",
    },
    {
      author: "Kathrin",
      text: "Impro heißt für mich: authentisch sein.",
    },
    {
      author: "Christoph",
      text: "Impro heißt für mich: den Kopf freikriegen und konzentriert sein.",
    },
    {
      author: "Tram",
      text: "Impro heißt für mich: neue Perspektiven schaffen.",
    },
    {
      author: "Jonathan",
      text: "Impro bedeutet für mich: Persönlichkeitsentwicklung.",
    },
  ];

  useEffect(() => {
    setInterval(
      () => setVisibleQuote((old) => (old + 1) % quotes.length),
      10000,
    );
  }, []);

  return (
    <div className={styles.quotes}>
      {quotes.map(({ author, text }, index) => (
        <div
          key={index}
          className={[
            styles.quote,
            ...(visibleQuote === index ? [styles.visible] : []),
          ].join(" ")}
        >
          <Testimonial
            backgroundColor="var(--color-accent-light)"
            author={author}
          >
            {text}
          </Testimonial>
        </div>
      ))}
    </div>
  );
}
