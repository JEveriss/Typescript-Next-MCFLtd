"use client";
import styles from "./heroBanner.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import hero1 from "../../assets/HeroImages/Hero-01.jpeg";
import hero2 from "../../assets/HeroImages/Hero-02.jpeg";
import hero3 from "../../assets/HeroImages/Hero-03.jpeg";

import { register } from "swiper/element/bundle";
import Image, { StaticImageData } from "next/image";
register();

const data = [
  { key: 1, image: hero1 },
  { key: 2, image: hero2 },
  { key: 3, image: hero3 },
];

const SwiperBanner = () => {
  return (
    <Swiper
      className={styles.heroBanner__wrapper}
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        disableOnInteraction: false,
      }}
    >
      {data.map((item: { key: number; image: StaticImageData }) => {
        return (
          <SwiperSlide key={item.key}>
            <Image
              src={item.image}
              alt="temp"
              placeholder="blur"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        );
      })}
      <div className={styles.heroBanner__text}>
        <h1 className="global__title">MATTHEW COLLINS</h1>
        <p>Cabinet makers to the trade</p>
      </div>
    </Swiper>
  );
};

export default SwiperBanner;
