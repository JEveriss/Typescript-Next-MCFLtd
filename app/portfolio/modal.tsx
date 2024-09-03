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
type ModalProps = {
  onClose?: boolean,
  children?: React.ReactNode,
  title?: string,
}

const Modal = (props: ModalProps) => {
// const handleCloseClick = (e) => {
//   e.preventDefault();
// }
  return (
      <div style={{ height: "400px" }}>
        {/* <a href="#" onClick={handleCloseClick}>XXXXXXXXXXXXXXXX</a> */}
        <h2>THIS IS THE MODAL HELLO</h2>

        {/* <Swiper
          // style={{ "--swiper-navigation-color": "red" }}
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
        </Swiper> */}
      </div>

  );
};

export default Modal;
