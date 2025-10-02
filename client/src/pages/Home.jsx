import Header from "../components/Header";

import Category from "../components/Category";

import Subscribe from "../components/Subscribe";   

import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
export default function Home() {
  return (
    <>
    
      <Header />
      
      <HeroSlider />
      <Category/>
      <Subscribe />
      <Footer />
    </>
  );
}
