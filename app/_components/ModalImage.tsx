"use client";

import { useRef } from "react";
import styles from "./ModalImage.module.css";

interface ModalImageProps {
  children: React.ReactNode;
  title: string;
  src: string;
}

export default function ModalImage(props: ModalImageProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  function openModal() {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }

  function closeModal() {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  }

  return (
    <div>
      <div onClick={openModal} className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={props.src} className={styles.image} />
        </div>
        <div className={styles.title}>{props.title}</div>
      </div>
      <dialog ref={dialogRef} className={styles.dialog} onClick={closeModal}>
        <div className={styles.dialogInner}>
          <img src={props.src} className={styles.dialogImage} />
          <div className={styles.dialogTitle}>{props.title}</div>
          {props.children}
        </div>
      </dialog>
    </div>
  );
}
