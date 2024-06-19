import Link from "next/link";
import styles from "./navigation.module.css";

const links = [
  "history",
  "workshop",
  "portfolio",
  "clients",
  "installation",
  "drafting",
  "contact",
];

const Navigation = () => {
  return (
    <section className={styles.navigation__wrapper}>
      <a href={"/"} className={styles.navigation__title}>
        <h2>MATTHEW</h2>
        <h2>COLLINS</h2>
      </a>
      <ul className={styles.navigation__ul}>
        {links.map((link, i) => {
          return (
            <li key={i} className={styles.navigation__li}>
              <Link href={`${link.toLocaleLowerCase()}`}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Navigation;
