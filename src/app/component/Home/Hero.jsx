"use client";
import { useState } from "react";
import Image from "next/image";
import img from "../../public/slide1.jpg";
import img1 from "../../public/slide2.jpg";
import herobg from "../../public/herobg.jpg";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { Fade, FadeUp } from "../Layout/Animations";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to Barbex",
      p: "Best Haircut Salon in the City",
      buttonText: "READ MORE",
      imageUrl: img,
    },
    {
      title: "Welcome to Barbex",
      p: "Best Hair Salon for a Professional Look",
      buttonText: "READ MORE",
      imageUrl: img1,
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-screen">
      <div className="absolute z-0 w-full h-full top-0 left-0 bg-[#1e1e1ecc] opacity-10">
        <Image
          src={herobg}
          alt="Image"
          layout="fill"
          objectFit="cover"
          className="w-screen h-screen object-cover"
        />
      </div>

      {/* Carousel Content */}
      <div className="relative z-10 max-w-screen h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform duration-500 ease-in-out ${
              currentSlide === index ? "translate-x-0" : "translate-x-full"
            } ${currentSlide === index - 1 ? "-translate-x-full" : ""}`}
          >
            {/* Flexbox with centered content */}
            <div className="flex flex-col-reverse md:flex-row h-full justify-center items-center ">
              {/* Content Section: Title, Paragraph, Button */}
              <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-8 sm:px-16  space-y-4 bg-black-200 text-white">
              <FadeUp>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                  {slide.title}
                </h1>
                <p className="text-3xl sm:text-4xl lg:text-8xl font-bold">
                  {slide.p}
                </p>
                <button className="px-6 mt-5 lg:mt-10 text-base lg:text-lg py-4 text-white rounded hover:bg-transparent/35 hover:border-2 hover:border-red-950 hover:text-primary bg-primary ease-in duration-300">
                  {slide.buttonText}
                </button>
              </FadeUp>
              </div>

              {/* Image Section */}
              <div className="relative w-full md:w-2/5 h-60 sm:h-80 lg:h-96 object-contain mb-8 md:mb-0 flex justify-center items-center">
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        className="absolute top-1/2 z-10 left-4 transform -translate-y-1/2 text-primary text-3xl lg:text-4xl px-2 lg:px-3 py-1 lg:py-2 rounded-full hover:bg-primary hover:text-white active:bg-primary focus:outline-none focus:ring focus:primary/90"
        onClick={handlePrevSlide}
      >
        <AiOutlineLeftCircle />
      </button>

      {/* Right Button */}
      <button
        className="absolute top-1/2 z-10 right-4 transform -translate-y-1/2 text-primary text-3xl lg:text-4xl px-2 lg:px-3 py-1 lg:py-2 rounded-full hover:bg-primary hover:text-white active:bg-primary focus:outline-none focus:ring focus:primary/90"
        onClick={handleNextSlide}
      >
        <AiOutlineRightCircle />
      </button>
    </div>
  );
};

export default Hero;
