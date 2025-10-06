
import Category from "../components/Category";
import HeroInSection from "../components/HeroInSection";
import HeroSlider from "../components/HeroSlider";
import AboutBadges from "../components/AboutBadges";
import Brands from "../components/Brands";
import Topics from "../components/Topics";
import UpsellCarousel from "../components/UpsellCarousel";
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";
export default function Home() {
  return (
    <>  
      <HeroSlider />
      <Category/>
      <Topics/>
      <UpsellCarousel/>
      <HeroInSection/>
      <Blog/>
      <Testimonials/>
      <AboutBadges/>
      <Brands/>
    
    </>
  );
}
