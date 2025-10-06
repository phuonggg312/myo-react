import CategoryHeading from "../components/CategoryHeading";
import Resources from "../components/Resources";
import UpsellCarousel from "../components/UpsellCarousel";
import RecentlyViewed from "../components/RecentlyViewed";
import kv from "../components/kv";
export default function PLP() {
  return (
    <>
     <CategoryHeading/>
     {/* <kv/> */}
     <RecentlyViewed/>
     <UpsellCarousel/>
     <Resources/>
    </>
  );
}
