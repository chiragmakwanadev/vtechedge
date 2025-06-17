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
      title: "Welcome to TechEdge",
      description: "Discover the future of technology with our cutting-edge solutions and innovative approaches to digital transformation.",
    },
    {
      title: "Innovation at Scale",
      description: "Experience seamless integration and powerful performance with our enterprise-grade technology solutions.",
    },
    {
      title: "Transform Your Business",
      description: "Leverage our expertise to drive growth and stay ahead in the rapidly evolving digital landscape.",
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

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

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
          <div key={index} ref={(el) => (slidesRef.current[index] = el)} className="absolute top-0 left-0 w-full h-full" style={{ opacity: index === 0 ? 1 : 0 }}>
            <Image src={image} alt={`Slide ${index + 1}`} fill className="object-cover brightness-[0.3] rounded-b-[50px]" priority={index === 0} />
          </div>
        ))}
      </div>

      {/* Text Content */}
      {slideContent.map((content, index) => (
        <div
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className="absolute left-[100px] top-1/2 -translate-y-1/2 text-left text-[#e0e1dd] z-10 w-full max-w-2xl"
          style={{ opacity: index === 0 ? 1 : 0 }}
        >
          <h2 className="text-[60px] md:text-6xl font-medium mb-6">{content.title}</h2>
          <p className="text-[24px] max-w-xl w-[60%]">{content.description}</p>
          <button className="bg-[#415a77] px-[20px] py-[10px] mt-[30px] rounded-[8px] text-[18px]">Learn More</button>
        </div>
      ))}
    </div>
  );
};

export default Landing;
