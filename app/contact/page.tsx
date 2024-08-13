import styles from "../pages.module.css";
import PageTemplate from "../components/pageTemplate/pageTemplate";
import { data } from "./data";

const contactProps = data[0];

const Contact = () => {
  return (
    <section className={styles.page__Wrapper}>
      <PageTemplate
        pageTitle={contactProps.pageTitle}
        pageContact={contactProps.pageContact}
        pageParagraph={contactProps.pageParagraph}
        mainImage={contactProps.mainImage}
        imageName={contactProps.imageName}
      >
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24518.96426365854!2d-1.4583254966882795!3d51.735281292383256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c93a55ac6f03%3A0x868f9b703edcb686!2sMatthew%20Collins%20Furniture!5e0!3m2!1sen!2suk!4v1723544071905!5m2!1sen!2suk"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
      </PageTemplate>
    </section>
  );
};
export default Contact;
