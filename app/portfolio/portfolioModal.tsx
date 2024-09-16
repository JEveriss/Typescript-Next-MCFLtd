"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { data } from "./data";
import styles from "./portfolio.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const portfolioProps = data;

interface PortfolioProps {
  index: number
}

export function PortfolioModal(props: PortfolioProps) {
  // const [indexState, setIndexState] = useState(0);

  // function handleClick(x: number) {
  //   setIndexState(x);
  //   console.log(indexState)
  // }

  return (
    <div>
      <Swiper
        className={styles.portfolio__Swiper}
        navigation={true}
        modules={[Navigation]}
        initialSlide={props.index}
      >
        {portfolioProps.imageList2.map((thumbnail, i) => {
          return (
            <SwiperSlide key={i}>
              <Image
                // onClick={() => handleClick(thumbnail.id)}
                loading="lazy"
                className={styles.portfolio__SwiperItem}
                alt="alt"
                src={thumbnail.imageName}
                fill
              />
              <span style={{ fontSize: "30px", marginLeft: "30px" }}>
                {thumbnail.id}
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default PortfolioModal;
