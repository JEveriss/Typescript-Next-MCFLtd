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
      <span className={styles.footer__Top}>
        <div className={styles.footer__Address}>
          <p>Matthew Collins Furniture Ltd</p>
          <p>Cotswold Dene</p>
          <p>Oxfordshire</p>
          <p>Standlake</p>
          <p>OX29 7PL</p>
        </div>
        <div className={styles.footer__Contact}>
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
            <a href="https://www.facebook.com" target="blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/matthewcollinsfurniture/" target="blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://www.twitter.com" target="blank" rel="noreferrer">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </span>
      <div className={styles.footer__Bottom}>
        2024 © Matthew Collins Furniture
        <br />
        Website by{" "}
        <a
          href="https://www.jacques-everiss.com/"
          target="blank"
          rel="noreferrer"
        >
          Jacques Everiss
        </a>{" "}
      </div>
    </section>
  );
};
export default Footer;
