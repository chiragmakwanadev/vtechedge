import Banner from "@/components/Banner";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight, FaChartLine, FaRegLifeRing, FaArrowLeft } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerData = {
    title: "About Us",
    description: "Lorem ipsum dolor sit amet.",
  };

  const aboutContent = {
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure illum fugiat earum tempora, rem ipsam. Ducimus, nobis explicabo doloremque enim accusantium similique iste excepturi quidem deserunt non! Dolor enim in commodi optio rem ullam. Ut.",
  };

  const statsData = [
    {
      number: "300+",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      number: "300+",
      text: "Lorem ipsum dolor sit amet.",
    },
  ];

  const servicesData = [
    {
      icon: <FaUserGroup size={30} className="text-white" />,
      title: "Web Development",
      description: "Let us know how we can help! Get in touch and we'll give you a fresh perspective on your business",
    },
    {
      icon: <FaChartLine size={30} className="text-white" />,
      title: "Mobile Apps",
      description: "We're here to help you succeed. Our team of experts is dedicated to providing you with the best possible service and support.",
    },
    {
      icon: <FaRegLifeRing size={30} className="text-white" />,
      title: "UI/UX Design",
      description: "We're here to help you succeed. Our team of experts is dedicated to providing you with the best possible service and support.",
    },
  ];

  const clientWorkData = [
    {
      icon: <FaUserGroup size={30} className="text-white" />,
      title: "Web Development",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci repellat vel repudiandae accusamus aut ab non dolore, autem porro minus quo temporibus officiis! Culpa molestias, doloremque tempore dolorem reiciendis magni. Doloribus enim soluta voluptatibus omnis fugiat, libero commodi eaque velit ullam. Officiis impedit reiciendis quisquam vero dolorum nulla sed asperiores.",
    },
    {
      icon: <FaChartLine size={30} className="text-white" />,
      title: "Mobile Apps",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci repellat vel repudiandae accusamus aut ab non dolore, autem porro minus quo temporibus officiis! Culpa molestias, doloremque tempore dolorem reiciendis magni. Doloribus enim soluta voluptatibus omnis fugiat, libero commodi eaque velit ullam. Officiis impedit reiciendis quisquam vero dolorum nulla sed asperiores.",
    },
    {
      icon: <FaRegLifeRing size={30} className="text-white" />,
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci repellat vel repudiandae accusamus aut ab non dolore, autem porro minus quo temporibus officiis! Culpa molestias, doloremque tempore dolorem reiciendis magni. Doloribus enim soluta voluptatibus omnis fugiat, libero commodi eaque velit ullam. Officiis impedit reiciendis quisquam vero dolorum nulla sed asperiores.",
    },
  ];

  const alternatingContent = [
    {
      image: "/images/puzzle.png",
      title: "Innovative Solutions",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      image: "/images/computer-engineer.png",
      title: "Expert Team",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      image: "/images/video-calling.png",
      title: "Quality Assurance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const partnershipContent = [
    {
      title: "Strategic Partnership",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      title: "Long-term Collaboration",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Innovation Together",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? partnershipContent.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === partnershipContent.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Banner title={bannerData.title} description={bannerData.description} />

      <div className="py-[50px] px-[150px] flex items-center justify-between gap-5">
        <div className="relative w-[50%] h-[400px]">
          <Image src="/images/about.jpg" alt="about" fill className="object-cover rounded-[50px]" />
        </div>
        <div className="flex flex-col gap-[40px] w-[50%]">
          <h1 className="text-[24px] font-bold">{aboutContent.title}</h1>
          <p className="text-[16px]">{aboutContent.description}</p>
          <div className="flex items-center gap-5">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-2 bg-[#1b263b] rounded-[20px] p-5 text-white w-full">
                <h1 className="text-[48px] font-bold">{stat.number}</h1>
                <h4 className="text-[16px] font-normal">{stat.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-[100px] px-[150px] bg-[#ececec]">
        <div className="text-center mb-[50px]">
          <h2 className="text-[32px] font-bold mb-4">Our Services</h2>
          <p className="text-[16px] text-gray-600 max-w-[600px] mx-auto">Discover our comprehensive range of services designed to meet your needs</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="w-[60px] h-[60px] bg-[#1b263b] rounded-full flex items-center justify-center mb-6">{service.icon}</div>
              <h3 className="text-[24px] font-bold mb-4">{service.title}</h3>
              <p className="text-[16px] text-gray-600 mb-6 flex-1">{service.description}</p>
              <button className="mt-auto inline-flex items-center gap-2 text-[#1b263b] font-semibold hover:underline group">
                Learn more
                <svg
                  className="w-5 h-5 text-[#1b263b] group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Alternating Content Section */}
      <div className="py-[100px] px-[150px]">
        {alternatingContent.map((item, index) => (
          <div key={index} className={`flex items-center gap-12 mb-20 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}>
            <div className="w-1/2 relative">
              <div className="aspect-[4/3] relative w-[300px] h-[225px]">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="300px"
                  className="object-cover rounded-[20px]"
                  priority={index === 0}
                />
              </div>
            </div>
            <div className="w-1/2 bg-[#ececec] border-2 border-gray-300 rounded-[20px] p-[30px]">
              <h2 className="text-[32px] font-bold mb-6">{item.title}</h2>
              <p className="text-[16px] text-gray-600">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* How we work with our clients Section */}
      <div className="py-[100px] px-[150px] bg-[#ececec]">
        <div className="text-center mb-[50px]">
          <h2 className="text-[32px] font-bold mb-4">How we work with our clients</h2>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center">
          {clientWorkData.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-[60px] h-[60px] bg-[#1b263b] rounded-full flex items-center justify-center mb-6 mx-auto">{item.icon}</div>
              <h3 className="text-[24px] font-bold mb-4">{item.title}</h3>
              <p className="text-[16px] text-gray-600 mb-6">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Model Section */}
      <div className="py-[100px] px-[150px]">
        <div className="text-center mb-[50px]">
          <h2 className="text-[32px] font-bold mb-4">Partnership Model</h2>
          <p className="text-[16px] text-gray-600 max-w-[800px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="w-full flex justify-center relative h-[400px]">
            <Image src="/images/corpo.jpg" alt="Partnership" fill className="object-cover rounded-[20px]" />
          </div>
          <div className="w-full max-w-[800px]">
            <div className="transition-all duration-500 ease-in-out">
              <h3 className="text-[28px] font-bold mb-6 text-center">{partnershipContent[currentSlide].title}</h3>
              <p className="text-[16px] text-gray-600 mb-8 text-center">{partnershipContent[currentSlide].content}</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevSlide}
                className="w-[50px] h-[50px] rounded-full bg-[#1b263b] text-white flex items-center justify-center hover:bg-[#2a3f5f] transition-colors"
              >
                <FaArrowLeft size={20} />
              </button>
              <div className="flex gap-2">
                {partnershipContent.map((_, index) => (
                  <div key={index} className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-[#1b263b]" : "bg-gray-300"}`} />
                ))}
              </div>
              <button
                onClick={handleNextSlide}
                className="w-[50px] h-[50px] rounded-full bg-[#1b263b] text-white flex items-center justify-center hover:bg-[#2a3f5f] transition-colors"
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
