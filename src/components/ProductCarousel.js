import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../data/rawData";

const ProductCarousel = ({ products }) => {
  return (
    <div>
      <Carousel
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customTransition="all 500ms ease"
        transitionDuration={1000}
        removeArrowOnDeviceType={["desktop", "table", "mobile"]}
      >
        {products}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
