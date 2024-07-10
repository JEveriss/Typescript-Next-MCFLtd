import styles from "./footer.module.css";
import FacebookIcon from "../../assets/Icons/FacebookIcon";
import InstagramIcon from "../../assets/Icons/InstagramIcon";
import MailIcon from "../../assets/Icons/MailIcon";
import PhoneIcon from "../../assets/Icons/PhoneIcon";
import TwitterIcon from "../../assets/Icons/TwitterIcon";
import Link from "next/link";
import { Icon } from "@/app/assets/Icon/icons";

const COLOURS = {
  "--primary-dark": "#16233d",
  "--primary-light": "#ffffe0",
  "--primary-accent": "#c7dff9",
  "--primary-shade": "#00000042",
};

const links = ["Twitter", "Facebook", "Instagram"];

const Footer = () => {
  return (
    <section className={styles.footer__Wrapper}>
      <div className={styles.footer__LeftBlock}>
        <MailIcon />
        <Link className={styles.footer__Link} href={"/"}>
          <p className={styles.footer__text}>matt@mcfltd.com</p>
        </Link>
        <PhoneIcon />
        <Link className={styles.footer__Link} href={"/"}>
          <p className={styles.footer__text}>01865 883443</p>
        </Link>
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
                width={50}
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
