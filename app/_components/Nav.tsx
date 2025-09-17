"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const routes = [
    { name: "START", href: "/" },
    { name: "SHOWS", href: "/shows" },
    { name: "TICKETS", href: "https://yesticket.org/events/de/improglycerin/" },
    { name: "NEWS", href: "/news" },
    { name: "ENSEMBLE", href: "/ensemble" },
    { name: "BUSINESS", href: "/business" },
    { name: "IMPROSCHULE", href: "https://improtheater-frankfurt.de" },
    { name: "KONTAKT", href: "/kontakt" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles["header-container"]}>
      <div className="center-container">
        <header className={styles.header}>
          <Link href="/">
            <img src="/logo.svg" alt="Improglycerin Logo" />
          </Link>
          <nav>
            <button
              className={styles.button}
              onClick={() => setMenuOpen((old) => !old)}
            ></button>
            <ul
              className={styles.list}
              style={{ height: menuOpen ? "350px" : "0" }}
            >
              {routes.map(({ name, href }) => (
                <li key={name}>
                  <Link className={styles.link} href={href}>
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
