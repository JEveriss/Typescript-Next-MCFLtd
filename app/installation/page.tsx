import styles from "../pages.module.css";

import PageTemplate from "../components/pageTemplate/pageTemplate";

import {data} from "./data";

const installationProps = data[0]

const Installation = () => {

  return (
    <section className={styles.page__Wrapper}>
      <PageTemplate
        pageTitle={installationProps.pageTitle}
        pageParagraph={installationProps.pageParagraph}
        mainImage={installationProps.mainImage}
        imageName={installationProps.imageName}
      />
    </section>
  );
};
export default Installation;
