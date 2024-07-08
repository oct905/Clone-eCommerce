"use client";
import { useState } from "react";
import Image from "next/image";
import c1 from "@/assets/carousel1.png";
import c2 from "@/assets/carousel2.png";
import c3 from "@/assets/carousel3.png";
import c4 from "@/assets/carousel4.jpeg";

const images = [c1, c2, c3, c4];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel w-full relative">
      <div className="carousel-item w-full">
        <img
          src={images[currentSlide].src}
          alt={`Slide ${currentSlide + 1}`}
          width={1200}
          height={600}
          className="w-full"
        />
        <div className="absolute inset-0 flex justify-between w-full items-center px-5 sm:px-10">
          <button
            onClick={prevSlide}
            className="btn bg-opacity-50 hover:bg-opacity-75 p-0 sm:p-0"
            style={{ minWidth: "40px", minHeight: "40px" }}>
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="btn bg-opacity-50 hover:bg-opacity-75 p-0 sm:p-0"
            style={{ minWidth: "40px", minHeight: "40px" }}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
