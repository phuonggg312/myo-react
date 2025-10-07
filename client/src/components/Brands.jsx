
import Slider from "react-slick";

import grain from "../assets/images/grain.png";
import jacks from "../assets/images/jacks.png";
import still from "../assets/images/still.png";
import wines from "../assets/images/wines.png";
import hand from "../assets/images/hand.png";
import mad from "../assets/images/mad.png";


const Brands = () => {
  const logos = [grain, jacks, still, wines, hand, mad];

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,

    responsive: [
      {
        breakpoint: 768,
        settings: { 
          slidesToShow: 2, 
          slidesToScroll: 1, 
          infinite: true, 
          arrows: true, 
          dots: true 
        }
      }
    ]
  };

  return (
    <section className="brands-section">
      <div className="container">
        <h2 className="brands-title">MEET OUR BRANDS</h2>
        <div className="brands-logos brands-slider row">
          <Slider {...settings}>
            {logos.map((src, i) => (
              <div key={i} className="brand-item">
                <img src={src} alt={`brand-${i}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>

    
  );
};

export default Brands;
