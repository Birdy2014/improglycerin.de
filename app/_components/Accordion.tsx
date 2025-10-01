"use client";

import { useState } from "react";
import styles from "./Accordion.module.css";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion(props: AccordionProps) {
  const [focusedIdx, setFocusedIdx] = useState(-1);

  function toggleOpen(idx: number) {
    setFocusedIdx((old) => (idx === old ? -1 : idx));
  }

  function isOpen(idx: number) {
    return focusedIdx === idx;
  }

  return (
    <div>
      {props.items.map((item, idx) => (
        <div className={styles.accordionItem}>
          <div
            className={[
              styles.titleContainer,
              ...(isOpen(idx) ? [styles.active] : []),
            ].join(" ")}
            onClick={() => toggleOpen(idx)}
          >
            <div className={styles.icon} />
            <div className={styles.title}>{item.title}</div>
          </div>
          <div
            className={styles.content}
            style={{ height: isOpen(idx) ? "fit-content" : "0" }}
          >
            <div className={styles.contentInner}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
