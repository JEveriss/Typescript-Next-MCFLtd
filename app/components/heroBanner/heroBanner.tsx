import Image from "next/image";
import styles from "./heroBanner.module.css";
import hero1 from "../../assets/HeroImages/Hero-01.jpeg";
import hero2 from "../../assets/HeroImages/Hero-02.jpeg";
import hero3 from "../../assets/HeroImages/Hero-03.jpeg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperBanner from "./swiperbanner";

const data = [hero1, hero2, hero3];

const HeroBanner = () => {
  return (
    <div className={styles.heroBanner__wrapper}>
        {/* <SwiperBanner/> */}
      <Image
        src={hero1}
        alt="temp"
        placeholder="blur"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className={styles.heroBanner__text}>
        <h1 className="global__title">MATTHEW COLLINS</h1>
        <p>Cabinet makers to the trade</p>
      </div>
    </div>
  );
};

export default HeroBanner;
