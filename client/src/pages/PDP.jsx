import { useParams } from "react-router-dom";
import RecentlyViewed from "../components/RecentlyViewed";
import RecommendedCarousel from "../components/RecommendedCarousel";
import EquipmentHero from "../components/EquipmentHero";
import HowToBrew from "../components/HowToBrew";
import BrewFlow from "../components/BrewFlow";
import ProductTabs from "../components/ProductTabs";
import PDPHero from "../components/PDPHero";
export default function PDP() {
  const { id } = useParams();
  return (
    <>
      <main style={{ padding: 16 }}>PDP page #{id}</main>
      <PDPHero/>
      <ProductTabs/>
      <BrewFlow/>
      <HowToBrew />
      <EquipmentHero />
      <RecommendedCarousel />
      <RecentlyViewed />
    </>
  );
}
