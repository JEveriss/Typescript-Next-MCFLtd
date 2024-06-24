import styles from "../pages.module.css";

import PageTemplate from "../components/pageTemplate/pageTemplate";

import {data} from "./data";

const workshopProps = data[0]

const Workshop = () => {

  return (
    <section className={styles.page__Wrapper}>
      <PageTemplate
        pageTitle={workshopProps.pageTitle}
        pageParagraph={workshopProps.pageParagraph}
        mainImage={workshopProps.mainImage}
        imageName={workshopProps.imageName}
      />
    </section>
  );
};
export default Workshop;
