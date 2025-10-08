import CategoryHeading from "../components/CategoryHeading";
import Resources from "../components/Resources";
import UpsellCarousel from "../components/UpsellCarousel";
import RecentlyViewed from "../components/RecentlyViewed";
import KV from "../components/kv";
import Product from "../components/Product";
export default function PLP() {
  return (
    <>
      <CategoryHeading />
      <Product />
      <KV />
      <RecentlyViewed />
      <UpsellCarousel />
      <Resources />
    </>
  );
}
