import styles from "../pages.module.css";

import PageTemplate from "../components/pageTemplate/pageTemplate";

import {data} from "./data";

const clientsProps = data[0]

const Clients = () => {

  return (
    <section className={styles.page__Wrapper}>
      <PageTemplate
        pageTitle={clientsProps.pageTitle}
        pageSubTitle={clientsProps.pageSubTitle}
        pageParagraph={clientsProps.pageParagraph}
        mainImage={clientsProps.mainImage}
        imageName={clientsProps.imageName}
      />
    </section>
  );
};
export default Clients;
