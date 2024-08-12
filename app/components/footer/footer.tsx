import styles from "./footer.module.css";
import { Icon } from "@/app/components/Icon/icons";

const COLOURS = {
  "--primary-dark": "#16233d",
  "--primary-light": "#ffffe0",
  "--primary-accent": "#c7dff9",
  "--primary-shade": "#00000042",
};

const links = ["Twitter", "Facebook", "Instagram"];

const contacts = [
  { name: "Phone", link: "01865 883443", height: 35, width: 40 },
  { name: "Mail", link: "Matt@MCFltd.com", height: 28, width: 40 },
];

const Footer = () => {
  return (
    <section className={styles.footer__Wrapper}>
      <div className={styles.footer__LeftBlock}>
        {contacts.map((contact, i) => {
          return (
            <a key={i} className={styles.footer__Link} href={contact.link}>
              <Icon
                name={contact.name}
                color={COLOURS["--primary-light"]}
                height={contact.height}
                width={contact.width}
              />
              <p className={styles.footer__text}>{contact.link}</p>
            </a>
          );
        })}
      </div>

      <div className={styles.footer__RightBlock}>
        {links.map((link, i) => {
          return (
            <a
              key={i}
              href={`https://www.${link}.com`}
              rel="noreferrer"
              target="blank"
            >
              <Icon
                height={40}
                width={40}
                name={link}
                color={COLOURS["--primary-light"]}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Footer;
