import styles from "../pages.module.css";

import PageTemplate from "../components/pageTemplate/pageTemplate";

import {data} from "./data";

const historyProps = data[0]

const History = () => {

  return (
    <section className={styles.page__Wrapper}>
      <PageTemplate
        pageTitle={historyProps.pageTitle}
        pageParagraph={historyProps.pageParagraph}
        mainImage={historyProps.mainImage}
        imageName={historyProps.imageName}
      />
    </section>
  );
};
export default History;
