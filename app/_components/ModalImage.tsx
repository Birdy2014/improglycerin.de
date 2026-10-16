"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import styles from "./ModalImage.module.css";
import { useRouter } from "next/navigation";

interface ModalImageProps {
  children: React.ReactNode;
  title: string;
  src: StaticImageData;
}

export default function ModalImage(props: ModalImageProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const uriFragment = `#${encodeURIComponent(props.title.toLowerCase().replace(/\s+/g, "-"))}`;
  const router = useRouter();
  const openedByClick = useRef(false);

  useEffect(() => {
    const openModalIfNeeded = (hash: string) => {
      if (!dialogRef.current) {
        return;
      }

      if (hash === uriFragment) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    };

    const handleNavigate = (event: NavigateEvent) => {
      const url = new URL(event.destination.url);

      openModalIfNeeded(url.hash);
    };

    openModalIfNeeded(window.location.hash);

    window.navigation.addEventListener("navigate", handleNavigate);
    return () =>
      window.navigation.removeEventListener("navigate", handleNavigate);
  }, []);

  function openModal() {
    if (props.title.length > 0) {
      openedByClick.current = true;
      router.push(uriFragment);
    }
  }

  function closeModal(event: React.MouseEvent<HTMLDialogElement>) {
    dialogRef.current?.close();
    if (openedByClick.current) {
      openedByClick.current = false;
      router.back();
    } else {
      router.push(window.location.href.split("#")[0]);
    }
  }

  return (
    <div>
      <div onClick={openModal} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={props.src}
            className={styles.image}
            alt={`Foto ${props.title}`}
          />
        </div>
        <div className={styles.title}>{props.title}</div>
      </div>
      <dialog ref={dialogRef} className={styles.dialog} onClick={closeModal}>
        <div className={styles.dialogInner}>
          <Image
            src={props.src}
            className={styles.dialogImage}
            alt={props.title}
          />
          <div className={styles.dialogTitle}>{props.title}</div>
          {props.children}
        </div>
      </dialog>
    </div>
  );
}
