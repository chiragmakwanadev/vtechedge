import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef([]);
  const textRefs = useRef([]);
  const totalSlides = 3;

  const images = ["/images/bg-1.jpg", "/images/bg-2.jpg", "/images/bg-3.jpg"];

  const slideContent = [
    {
      title: "Accelerate Your Digital Transformation",
      subTitle: " Future-Ready Software & IT Solutions for Scalable Growth.",
      description:
        " VTechEdge empowers businesses with custom software development, AI, and automation tools that modernize workflows and enhance operational efficiency.",
      cta: "Get a Free Consultation ",
    },
    {
      title: "Specialists in Healthcare & Pharma IT Solutions",
      subTitle: "Compliance-Focused Technology Built for Critical Industries",
      description:
        "We deliver end-to-end tech infrastructure, regulatory software, and digital transformation services for clinics, labs, pharmacies, and life sciences brands.",
      cta: "Discover Our Healthcare Solutions",
    },
    {
      title: "Your Tech Partner from Idea to Execution",
      subTitle: "Custom Software. Cloud Solutions. Seamless Integration.",
      description:
        "From startups to enterprises, VTechEdge offers full-cycle development services — from strategy and UI/UX to backend, cloud, AI, and managed IT.",
      cta: "Start Your Project Today",
    },
  ];

  const goToSlide = useCallback(
    (index) => {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;

      // Fade out current slide and its text
      gsap.to(slidesRef.current[currentSlide], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(textRefs.current[currentSlide], {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      // Fade in new slide and animate its text
      gsap.to(slidesRef.current[index], {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(textRefs.current[index], {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
        ease: "power2.out",
      });

      setCurrentSlide(index);
    },
    [currentSlide]
  );

  // Initialize text animations
  useEffect(() => {
    textRefs.current.forEach((text, index) => {
      if (index === 0) {
        gsap.set(text, { y: 0, opacity: 1 });
      } else {
        gsap.set(text, { y: 50, opacity: 0 });
      }
    });
  }, []);

  const nextSlide = useCallback(
    () => goToSlide(currentSlide + 1),
    [currentSlide, goToSlide]
  );
  const prevSlide = useCallback(
    () => goToSlide(currentSlide - 1),
    [currentSlide, goToSlide]
  );

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  return (
    <div className={`relative w-full h-[98vh] overflow-hidden `}>
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (slidesRef.current[index] = el)}
            className="absolute top-0 left-0 w-full h-full"
            style={{ opacity: index === 0 ? 1 : 0 }}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover brightness-[0.3] rounded-b-[50px]"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Text Content */}
      {slideContent.map((content, index) => (
        <div
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className="absolute left-[100px] top-1/2 -translate-y-1/2 text-left text-[#e0e1dd] z-10 w-full max-w-5xl"
          style={{ opacity: index === 0 ? 1 : 0 }}
        >
          <h3 className="text-[30px] font-light mb-2">{content.title}</h3>
          <h1 className="text-[40px] mb-4">{content.subTitle}</h1>
          <p className="text-[16px] max-w-xl w-[80%]">{content.description}</p>
          <button className="bg-[#1b263b] hover:bg-[#415a77] transition-colors duration-300 text-white px-[20px] py-[10px] rounded-[8px] text-[18px] mt-[30px]">
            {content.cta}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Landing;
