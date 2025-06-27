import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Clamp from "@/utils/Clamp";

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const images = ["/images/bg-1.jpg", "/images/bg-2.jpg", "/images/bg-3.jpg"];

  const slideContent = [
    {
      title: "Accelerate Your Digital Transformation",
      subTitle: " Future-Ready Software & IT Solutions for Scalable Growth.",
      description: " VTechEdge empowers businesses with custom software development, AI, and automation tools that modernize workflows and enhance operational efficiency.",
      cta: "Get a Free Consultation ",
    },
    {
      title: "Specialists in Healthcare & Pharma IT Solutions",
      subTitle: "Compliance-Focused Technology Built for Critical Industries",
      description: "We deliver end-to-end tech infrastructure, regulatory software, and digital transformation services for clinics, labs, pharmacies, and life sciences brands.",
      cta: "Discover Our Healthcare Solutions",
    },
    {
      title: "Your Tech Partner from Idea to Execution",
      subTitle: "Custom Software. Cloud Solutions. Seamless Integration.",
      description: "From startups to enterprises, VTechEdge offers full-cycle development services — from strategy and UI/UX to backend, cloud, AI, and managed IT.",
      cta: "Start Your Project Today",
    },
  ];

  const goToSlide = useCallback((index) => {0.

    
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  return (
    <div className="relative w-full h-[80vh] xl:h-[98vh] overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <Image src={image} alt={`Slide ${index + 1}`} fill className="object-cover brightness-[0.3] rounded-b-[20px] md:rounded-b-[50px]" priority={index === 0} />
          </div>
        ))}
      </div>

      {/* Text Content */}
      {slideContent.map((content, index) => (
        <div
          key={index}
          className={`absolute left-8 md:left-16 lg:left-24 xl:left-32 inset-y-0 flex items-center text-left text-[#e0e1dd] z-10 w-full max-w-2xl transition-all duration-700 ease-out ${
            index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <h3 className="font-light mb-2" style={{ fontSize: `${Clamp(1, 2)}` }}>
              {content.title}
            </h3>
            <h1 className="mb-4 break-words" style={{ fontSize: `${Clamp(1.4, 2.4)}` }}>
              {content.subTitle}
            </h1>
            <p className="text-[16px] max-w-xl w-[80%]">{content.description}</p>
            <button className="bg-[#1b263b] hover:bg-[#415a77] transition-colors duration-300 text-white px-[20px] py-[10px] rounded-[8px] text-[18px] mt-[30px]">
              {content.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Landing;
