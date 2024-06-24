import styles from "../pages.module.css";

import PageTemplate from "../components/pageTemplate/pageTemplate";

import { data } from "./data";

const contactProps = data[0];

const Contact = () => {
  return (
    <section className={styles.page__Wrapper}>
      <PageTemplate
        pageTitle={contactProps.pageTitle}
        pageParagraph={contactProps.pageParagraph}
        mainImage={contactProps.mainImage}
        imageName={contactProps.imageName}
      />
    </section>
  );
};
export default Contact;
