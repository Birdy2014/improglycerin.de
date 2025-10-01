"use client";

import { useRef } from "react";

interface Props {
  open: boolean;
  duration: string;
  children: React.ReactNode;
}

export default function AnimatedCollapsibleContainer(props: Props) {
  const inner = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        height: props.open ? `${inner.current?.clientHeight}px` : "0",
        transition: `height linear ${props.duration}`,
        overflow: "hidden",
      }}
    >
      <div ref={inner}>{props.children}</div>
    </div>
  );
}
