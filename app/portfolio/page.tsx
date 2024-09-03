"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageTemplate from "../components/pageTemplate/pageTemplate";
import { data } from "./data";
import styles from "./portfolio.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Modal from "../login/page"

const portfolioProps = data;

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={styles.portfolio__Wrapper}>
      <h2 className={styles.portfolio__Title}>Portfolio</h2>
      <ul className={styles.portfolio__Gallery}>
        {portfolioProps.imageList.map((thumbnail, i) => {
          return (
            <li className={styles.portfolio__GalleryItem} key={i}>
              <Image
                className={styles.portfolio__Thumbnail}
                alt="alt"
                src={thumbnail.src}
                width="100"
                height="100"
              />
            </li>
          );
        })}
      </ul>
      {/* MODAL */}
      {/* <Modal /> */}
<Modal/>
    </section>
  );
};

export default Portfolio;
