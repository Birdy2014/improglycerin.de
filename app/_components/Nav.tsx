"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import AnimatedCollapsibleContainer from "./AnimatedCollapsibleContainer";

export default function Nav() {
  const routes = [
    { name: "START", href: "/" },
    { name: "SHOWS", href: "https://yesticket.org/events/de/improglycerin/" },
    { name: "NEWS", href: "/news" },
    { name: "ENSEMBLE", href: "/ensemble" },
    { name: "BUSINESS", href: "/business" },
    { name: "IMPROSCHULE", href: "https://improtheater-frankfurt.de" },
    { name: "KONTAKT", href: "/kontakt" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setScrollTop(window.scrollY === 0);
    window.addEventListener("scroll", () => {
      setScrollTop(window.scrollY === 0);
    });
  }, []);

  return (
    <>
      <div
        className={`${styles["header-container"]} ${scrollTop ? "" : styles["header-container-scrolled"]}`}
      >
        <div className="center-container">
          <header className={styles.header}>
            <Link href="/">
              <img
                src="https://improglycerin.de/wp-content/uploads/2017/04/improglycerin_logo_website_white_medium_2.jpg"
                alt="Improglycerin Logo"
              />
            </Link>
            <nav>
              <button
                className={styles.button}
                onClick={() => setMenuOpen((old) => !old)}
              ></button>
              <div className={styles.listOuter}>
                <AnimatedCollapsibleContainer duration="0.1s" open={menuOpen}>
                  <ul className={styles.list}>
                    {routes.map(({ name, href }) => (
                      <li key={name}>
                        <Link
                          className={[
                            styles.link,
                            ...(pathname == href ? [styles.active] : []),
                          ].join(" ")}
                          href={href}
                          onNavigate={() => setMenuOpen(false)}
                        >
                          <span>{name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AnimatedCollapsibleContainer>
              </div>
            </nav>
          </header>
        </div>
      </div>
      <div style={{ height: "80px" }}></div>
    </>
  );
}
