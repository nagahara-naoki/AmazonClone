import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"></div>
      <Carousel infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3000}>
        <div>
          <img src="https://links.papareact.com/gi1" alt="a" />
        </div>
        <div>
          <img src="https://links.papareact.com/6ff" alt="b" />
        </div>
        <div>
          <img src="https://links.papareact.com/7ma" alt="c" />
        </div>
      </Carousel>
    </div>
  );
};
