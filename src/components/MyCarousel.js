import React from "react";
import Carousel from "react-bootstrap/Carousel";
import motorbikeImage1 from "../images/carousel_motorbike_01.jpg";
import motorbikeImage2 from "../images/carousel_motorbike_02.jpg";
import motorbikeImage3 from "../images/carousel_motorbike_03.jpg";
export default function MyCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={motorbikeImage1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={motorbikeImage2}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={motorbikeImage3}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
