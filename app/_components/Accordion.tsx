"use client";

import { useState } from "react";
import styles from "./Accordion.module.css";
import AnimatedCollapsibleContainer from "./AnimatedCollapsibleContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
            <div className={styles.iconContainer}>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`${styles.icon} ${styles.iconInactive}`}
              />
              <FontAwesomeIcon
                icon={faAngleUp}
                className={`${styles.icon} ${styles.iconActive}`}
              />
            </div>
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
