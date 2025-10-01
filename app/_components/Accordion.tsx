"use client";

import { useState } from "react";
import styles from "./Accordion.module.css";
import AnimatedCollapsibleContainer from "./AnimatedCollapsibleContainer";

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
        <div className={styles.accordionItem} key={idx}>
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
          <AnimatedCollapsibleContainer duration="0.2s" open={isOpen(idx)}>
            <div className={styles.contentInner}>{item.content}</div>
          </AnimatedCollapsibleContainer>
        </div>
      ))}
    </div>
  );
}
