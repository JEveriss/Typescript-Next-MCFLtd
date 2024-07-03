"use client";

import styles from "./burgerMenu.module.css";
import { useState } from "react";
import Link from "next/link";

export interface BurgerProps {
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

const BurgerMenu = (props: BurgerProps) => {
  const handleClick = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`${styles.burger__Wrapper} ${
          isOpen ? styles.open : styles.closed
        }`}
        onClick={handleClick}
      >
        <div className={`${styles.burger__Bar} ${styles.burger__Bar1}`}></div>
        <div className={`${styles.burger__Bar} ${styles.burger__Bar2}`}></div>
        <div className={`${styles.burger__Bar} ${styles.burger__Bar3}`}></div>
      </div>

      <div className={isOpen ? styles.menuOpen : styles.menuClosed}>
        <ul>
          {links.map((link, i) => {
            return (
              <li className={styles.burger__Li} key={i}>
                <Link href={"/"}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default BurgerMenu;
