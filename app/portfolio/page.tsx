"use client";

import React, { useState } from "react";
import Image from "next/image";
import { data } from "./data";
import styles from "./portfolio.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Modal from "../components/modal/modal";
import PoprtfolioModal from "../portfolio/portfolioModal";

const portfolioProps = data;

type ModalProps = {
  onClose?: boolean;
  children?: React.ReactNode;
  title?: string;
  startIndex?: number;
  onClick: () => number;
};

export function ModalOpener(props: ModalProps) {
  const [showModal, setShowModal] = useState(false);

  const [indexState, setIndexState] = useState(0);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateIndex(x: number) {
    return setIndexState(x);
  }

  return (
    <span className={styles.modalopener}>
      <Modal open={showModal} onClose={toggleModal} >
        <PoprtfolioModal index={indexState} />
      </Modal>
      <a className={styles.modal__Close} onClick={toggleModal}>
        {props.children}
      </a>
    </span>
  );
}

export default function Portfolio() {
  return (
    <section className={styles.portfolio__Wrapper}>
      <h2 className={styles.portfolio__Title}>Portfolio</h2>

      <ul className={styles.portfolio__Gallery}>
        {portfolioProps.imageList2.map((thumbnail) => {
          return (
            <li className={styles.portfolio__GalleryItem} key={thumbnail.id}>
              <ModalOpener startIndex={thumbnail.id}>
                <h2>{thumbnail.id}</h2>
                <Image
                  className={styles.portfolio__Thumbnail}
                  alt="alt"
                  src={thumbnail.imageName}
                  width="100"
                  height="100"
                />
              </ModalOpener>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
