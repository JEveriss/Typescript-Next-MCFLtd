import Image from "next/image";
import styles from "../pages.module.css";

import kitchen from "../assets/historyImages/history-01.jpeg";

type Props = {
  title: string;
  image: string;
  imageName: string;
  mainText: string;
};

const History = (props: Props) => {
  return (
    <section className={styles.page__Wrapper}>
      <div className={styles.page__LeftBlock}>
        <h2 className={styles.page__Title}>History</h2>
        <p className={styles.page__Paragraph}>
          After working for a number of furniture workshops in East London,
          Matthew continued his training at Buckinghamshire College where he
          studied furniture design and manufacture. He then went on to set up a
          workshop in Shoreditch, specializing in chair and frame making for
          local upholsterers.
        </p>
        <p className={styles.page__Paragraph}>
          Larger commissions followed and so did the need for more space, so in
          1990 Matthew moved to Stanton Harcourt in Oxfordshire where the larger
          premises have enabled him to take on bigger projects and the gradual
          recruitment of more cabinet makers.
        </p>
      </div>
      <div className={styles.page__RightBlock}>
        <Image
          className={styles.page__Image}
          style={{ objectFit: "contain" }}
          src={kitchen}
          alt={props.imageName}
          placeholder="blur"
        />
      </div>
    </section>
  );
};
export default History;
