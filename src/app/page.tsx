import HeroBanner from "./components/heroBanner/heroBanner";
import SwiperBanner from "./components/heroBanner/swiperbanner";
import Navigation from "./components/navigation/navigation";

const Home = () => {
  return (
    <main>
      <h1>MATTHEW COLLINS</h1>
      <Navigation />
      {/* <HeroBanner /> */}
      <SwiperBanner/>
    </main>
  );
};
export default Home;
