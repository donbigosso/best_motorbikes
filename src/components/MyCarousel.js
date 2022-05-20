import React from "react";
import Carousel from "react-bootstrap/Carousel";
import motorbikeImage1 from "../images/carousel_motorbike_01.jpg";
import motorbikeImage2 from "../images/carousel_motorbike_02.jpg";
import motorbikeImage3 from "../images/carousel_motorbike_03.jpg";
import PolandFlag from "../images/poland.png";
import GermanyFlag from "../images/germany.png";
import BritainFlag from "../images/union-jack.png";
export default function MyCarousel({ english, german, polish, ...props }) {
  const drawEnFalgFrame = () => {
    return props.language === "EN"
      ? { border: "2px solid red" }
      : { border: "none" };
  };
  const drawDeFalgFrame = () => {
    return props.language === "DE"
      ? { border: "2px solid red" }
      : { border: "none" };
  };
  const drawPlFalgFrame = () => {
    return props.language === "PL"
      ? { border: "2px solid red" }
      : { border: "none" };
  };
  return (
    <div>
      <div className="newLgField">
        <img
          className="flag"
          src={BritainFlag}
          onClick={english}
          style={Object.assign(drawEnFalgFrame())}
        />
        <img
          className="flag"
          src={GermanyFlag}
          onClick={german}
          style={Object.assign(drawDeFalgFrame())}
        />
        <img
          className="flag"
          src={PolandFlag}
          onClick={polish}
          style={Object.assign(drawPlFalgFrame())}
        />
      </div>
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
