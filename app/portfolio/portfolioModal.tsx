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
type ModalProps = {
  onClose?: boolean;
  children?: React.ReactNode;
  title?: string;
};

const PortfolioModal = (props: ModalProps) => {
  return (
    <div>
      <Swiper
        //   style={{ "--swiper-navigation-color": "red" }}
        className={styles.portfolio__Swiper}
        navigation={true}
        modules={[Navigation]}
        loop={true}
      >
        {portfolioProps.imageList.map((thumbnail, i) => {
          return (
            <SwiperSlide key={i}>
              <Image
                className={styles.portfolio__SwiperItem}
                alt="alt"
                src={thumbnail.src}
                fill
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PortfolioModal;
