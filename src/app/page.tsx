import HeroBanner from "./components/heroBanner/heroBanner";
import SwiperBanner from "./components/heroBanner/swiperbanner";
import Navigation from "./components/navigation/navigation";

const Home = () => {
  return (
    <main>
      <Navigation />
      <SwiperBanner/>
    </main>
  );
};
export default Home;
