import { StaticImport } from "next/dist/shared/lib/get-img-props";
import styles from "./pageTemplate.module.css";
import Image from "next/image";
import { CSSProperties } from "react";

type PageProps = {
  pageTitle: string;
  pageSubTitle?: string | undefined;
  pageParagraph: string[][];
  pageContact?: string[][] | undefined;
  mainImage: string | StaticImport;
  imageName: string;
  children?: React.ReactNode;
};

const PageTemplate = (props: PageProps) => {
  return (
    <section className={styles.page__Wrapper}>
      <div className={styles.page__LeftBlock}>
        <h2 className={styles.page__Title}>{props?.pageTitle}</h2>
        {props.pageSubTitle ? (
          <h3 className={styles.page__SubTitle}>{props?.pageSubTitle}</h3>
        ) : (
          ""
        )}

        <p className={styles.page__Paragraph}>
          {props.pageParagraph.map((text, i) => {
            return (
              <span key={i}>
                {text}
                <br />
              </span>
            );
          })}
        </p>
        {props.pageContact ? (
          <p className={styles.page__Paragraph}>
            {props.pageContact.map((text, i) => {
              return (
                <span key={i}>
                  {text}
                  <br />
                </span>
              );
            })}
          </p>
        ) : (
          ""
        )}
        <span>{props?.children}</span>
      </div>

      <div className={styles.page__RightBlock}>
        <Image
          className={styles.page__Image}
          src={props?.mainImage}
          alt={props?.imageName}
        />
      </div>
    </section>
  );
};
export default PageTemplate;
