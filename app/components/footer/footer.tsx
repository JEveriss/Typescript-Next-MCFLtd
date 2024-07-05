import styles from "./footer.module.css";
import FacebookIcon from "../../assets/Icons/FacebookIcon";
import InstagramIcon from "../../assets/Icons/InstagramIcon";
import MailIcon from "../../assets/Icons/MailIcon";
import PhoneIcon from "../../assets/Icons/PhoneIcon";
import TwitterIcon from "../../assets/Icons/TwitterIcon";
import Link from "next/link";

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
        <Link href={"/facebook.com"}>
          <FacebookIcon />
        </Link>
        <Link href={"instagram.com"}>
          <InstagramIcon />
        </Link>
        <Link href={"twitter.com"}>
          <TwitterIcon />
        </Link>
      </div>
    </section>
  );
};
export default Footer;
