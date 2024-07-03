"use client";

import styles from "./hamburgerMenu.module.css";
import styles2 from "../navigation/navigation.module.css";
import { useState } from "react";
import Link from "next/link";

export interface HamburgerProps {
  /** Callback on click*/
  onClick: () => void;

  /** Initial state */
  isInitiallyOpen?: boolean;
}

const links = [
  "history",
  "workshop",
  "portfolio",
  "clients",
  "installation",
  "drafting",
  "contact",
];

const HamburgerMenu = (props: HamburgerProps) => {
  const handleClick = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${styles.hamburger__Wrapper} ${
        isOpen ? styles.open : styles.closed
      }`}
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <div
        className={`${styles.hamburger__Bar} ${styles.hamburger__Bar1}`}
      ></div>
      <div
        className={`${styles.hamburger__Bar} ${styles.hamburger__Bar2}`}
      ></div>
      <div
        className={`${styles.hamburger__Bar} ${styles.hamburger__Bar3}`}
      ></div>
      <div
        style={{ color: "white" }}
        className={isOpen ? styles.menuOpen : styles.menuClosed}
      >
        <ul>
          {links.map((link, i) => {
            return (
              <li className={styles2.navigation__li} key={i}>
                <Link href={"/"}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default HamburgerMenu;
