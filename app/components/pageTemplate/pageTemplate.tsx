import { StaticImport } from "next/dist/shared/lib/get-img-props";
import styles from "./pageTemplate.module.css";
import Image from "next/image";

type PageProps = {
  pageTitle: string;
  pageParagraph: string[][];
  mainImage: string | StaticImport;
  imageName: string;
};

const PageTemplate = (props: PageProps) => {
    console.log(props)
  return (
    <section className={styles.page__Wrapper}>
      <div className={styles.page__LeftBlock}>
        <h2 className={styles.page__Title}>{props.pageTitle}</h2>
        {props.pageParagraph.map((text, i) => {
          return (
            <p key={i} className={styles.page__Paragraph}>
              {text}
            </p>
          );
        })}
      </div>
      <div className={styles.page__RightBlock}>
        <Image
          className={styles.page__Image}
          src={props?.mainImage}
          alt={props?.imageName}
            // fill
        />
      </div>
    </section>
  );
};
export default PageTemplate;
