"use client";

import React from "react";
import Image from "next/image";
import { data } from "./data";
import styles from "./portfolio.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const portfolioProps = data;

const Portfolio = () => {
  return (
    <section className={styles.portfolio__Wrapper}>
      <h2 className={styles.portfolio__Title}>Portfolio</h2>
      <ul className={styles.portfolio__Gallery}>
        {portfolioProps.imageList.map((thumbnail, i) => {
          return (
            <li className={styles.portfolio__GalleryItem} key={i}>
                <Dashboard>
                <Image
                  className={styles.portfolio__Thumbnail}
                  alt="alt"
                  src={thumbnail.src}
                  width="100"
                  height="100"
                />
            </Dashboard>
              </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Portfolio;

import { useState } from "react";
import Modal from "../components/modal/modal";
import PoprtfolioModal from "../portfolio/portfolioModal";

type ModalProps = {
  onClose?: boolean;
  children?: React.ReactNode;
  title?: string;
};

export function Dashboard(props: ModalProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Modal open={showModal} onClose={toggleModal}>
        <PoprtfolioModal />
      </Modal>

      {/* <div className={styles.card}> */}
        <a type="button" className={styles.btn} onClick={toggleModal}>
          {props.children}
        </a>
      {/* </div> */}
    </>
  );
}
