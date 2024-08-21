"use client";

import React from "react";
import Image from "next/image";
import PageTemplate from "../components/pageTemplate/pageTemplate";
import { data } from "./data";
import styles from "./portfolio.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const portfolioProps = data;

const Portfolio = () => {
  console.log("PROPS: ", portfolioProps.imageList);
  {
    portfolioProps;
  }
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

      <div style={{height: '400px'}}>
        <Swiper navigation={true} modules={[Navigation]}>
          {portfolioProps.imageList.map((thumbnail, i) => {
            return (
              <SwiperSlide className={styles.portfolio__GalleryItem} key={i}>
                <Image
                  className={styles.portfolio__Thumbnail}
                  alt="alt"
                  src={thumbnail.src}
                  width="100"
                  height="100"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
