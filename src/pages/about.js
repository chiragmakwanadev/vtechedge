import Banner from "@/components/Banner";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaRegLifeRing,
  FaArrowLeft,
} from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const statsData = [
    {
      number: "80+",
      text: "Completed Projects",
    },
    {
      number: "100+",
      text: "Happy Customers",
    },
  ];

  const servicesData = [
    {
      icon: <FaUserGroup size={30} className="text-white" />,
      title: "Work with us",
      description:
        "Let us know how we can help! Get in touch and we'll give you a fresh perspective on your business.",
    },
    {
      icon: <FaChartLine size={30} className="text-white" />,
      title: "Our process",
      description:
        "After a collaborative assessment we'll explore your business problems and needs co-creatively.",
    },
    {
      icon: <FaRegLifeRing size={30} className="text-white" />,
      title: "How we help",
      description:
        "We provide business development, marketing, planning, operations and financial services.",
    },
  ];

  const clientWorkData = [
    {
      icon: <FaUserGroup size={30} className="text-white" />,
      title: "No Guesswork, Just Clarity",
      description:
        "We eliminate the unexpected. Every engagement begins with a clear roadmap — including defined timelines, deliverables, and pricing. This ensures complete alignment and avoids last-minute surprises. With us, what you see is exactly what you get.",
    },
    {
      icon: <FaChartLine size={30} className="text-white" />,
      title: "Agile, Purpose-Driven Execution",
      description:
        "We work in agile cycles — breaking down your project into manageable tasks and measurable goals. This allows for continuous feedback, real-time visibility, and room to adapt as your needs evolve. It's a smart, flexible way to ensure we stay on track and on point.",
    },
    {
      icon: <FaRegLifeRing size={30} className="text-white" />,
      title: "Proactive Communication, Always",
      description:
        "We don't disappear after kickoff. Our team stays connected throughout the project, providing regular updates — typically every two weeks — so you're never left in the dark. Your input shapes our direction, and your satisfaction remains our top priority.",
    },
  ];

  const alternatingContent = [
    {
      image: "/images/puzzle.png",
      title: " Creativity",
      content:
        "At VTechEdge, creativity drives everything we do. Our team blends strong academic backgrounds with real-world experience to craft smart, effective solutions. From developers to planners, each member brings fresh ideas, clear thinking, and a passion for building technology that works beautifully and delivers real results.",
    },
    {
      image: "/images/computer-engineer.png",
      title: "Commitment",
      content:
        "At VTechEdge, we believe that true commitment goes beyond following the standard path — it means daring to think differently. While we respect proven industry practices, we know that progress comes from bold ideas and a creative mindset. Our team stays dedicated to every project with a focus on innovation, quality, and long-term success. Because for us, commitment means delivering more than expected — every time.",
    },
  ];

  const partnershipContent = [
    {
      title: "Fixed Price",
      image: "/images/partner.jpg",
      content:
        "Once the project requirements are clearly defined, we provide a fixed scope along with a transparent cost estimate. Upon mutual agreement, our team takes full responsibility for delivering the solution on time and in full alignment with the approved specifications.",
    },
    {
      title: "Hire a Dedicated Resource",
      image: "/images/res.jpg",
      content:
        "For clients seeking focused, long-term support, we offer skilled developers and engineers who work exclusively on your project. Whether remote or onsite in Canada, you'll have full control over the workflow, priorities, and outcomes — with the flexibility to scale as needed.",
    },
    {
      title: "Onsite / On-Premises Support",
      image: "/images/support.jpg",
      content:
        "Need our team to work directly with your in-house staff or on-site at your business location? VTechEdge provides seamless on-premises collaboration to ensure smooth integration with your processes, faster communication, and aligned execution.",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? partnershipContent.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === partnershipContent.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Banner title={"About Us"} />
      <div className="py-[50px] padding-x flex flex-col xl:flex-row items-center justify-between gap-5">
        <div className="relative w-full xl:w-[50%] h-[300px] xl:h-[700px]">
          <Image
            src="/images/about.jpg"
            alt="about"
            fill
            className="object-cover rounded-[20px] xl:rounded-[50px]"
          />
        </div>
        <div className="flex flex-col gap-[20px] xl:gap-[40px] w-full xl:w-[50%]">
          <h1 className="text-[20px] xl:text-[24px] font-bold">Who We Are:</h1>
          <p className="text-[14px] xl:text-[16px]">
            Brampton, Ontario. We specialize in delivering tailored digital
            solutions for the healthcare and pharmaceutical industries, helping
            businesses embrace automation, enhance operational efficiency, and
            stay compliant in a rapidly evolving tech landscape.
          </p>
          <p className="text-[14px] xl:text-[16px]">
            From independent pharmacies to healthcare networks, our solutions
            are designed to meet real-world challenges — streamlining workflows,
            improving data accuracy, and reducing manual effort. With a strong
            focus on innovation and industry understanding, we combine
            cutting-edge technologies like RPA, AI, and cloud computing to build
            reliable, secure, and scalable systems.
          </p>
          <p className="text-[14px] xl:text-[16px]">
            At VTechEdge, we are committed to being more than just a tech
            provider — we are a strategic partner in your digital transformation
            journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 bg-[#274c77] rounded-[20px] p-5 text-white w-full sm:w-1/2"
              >
                <h1 className="text-[32px] xl:text-[48px] font-bold">
                  {stat.number}
                </h1>
                <h4 className="text-[14px] xl:text-[16px] font-normal text-center">
                  {stat.text}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="py-[50px] padding-x bg-[#ececec]">
        <div className="text-center mb-[30px] xl:mb-[50px]">
          <p className="text-[14px] xl:text-[16px] text-gray-600 max-w-[600px] mx-auto">
            We align your unique business goals with our in-depth insight into
            freelancer behavior and motivation.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 xl:p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] bg-[#274c77] rounded-full flex items-center justify-center mb-4 xl:mb-6">
                {service.icon}
              </div>
              <h3 className="text-[20px] xl:text-[24px] font-bold mb-3 xl:mb-4">
                {service.title}
              </h3>
              <p className="text-[14px] xl:text-[16px] text-gray-600 mb-4 xl:mb-6 flex-1">
                {service.description}
              </p>
              <button className="mt-auto inline-flex items-center gap-2 text-[#274c77] font-semibold hover:underline group">
                Learn more
                <svg
                  className="w-4 h-4 xl:w-5 xl:h-5 text-[#274c77] group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Alternating Content Section */}
      <div className="py-[50px] xl:py-[100px] padding-x">
        {alternatingContent.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col xl:flex-row items-center gap-8 xl:gap-12 mb-10 ${
              index % 2 === 1 ? "xl:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full xl:w-1/2 relative">
              <div className="aspect-[4/3] relative w-full max-w-[300px] h-[250px] xl:h-[300px] mx-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover rounded-[20px]"
                  priority={index === 0}
                />
              </div>
            </div>
            <div className="w-full xl:w-1/2 bg-[#ececec] border-2 border-gray-300 rounded-[20px] p-[20px] xl:p-[30px] min-h-[250px] xl:h-[300px] flex flex-col justify-center">
              <h2 className="text-[24px] xl:text-[32px] font-bold mb-4 xl:mb-6">
                {item.title}
              </h2>
              <p className="text-[14px] xl:text-[16px] text-gray-600">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* How we work with our clients Section */}
      <div className="py-[50px] xl:py-[100px] padding-x bg-[#ececec]">
        <div className="text-center mb-[30px] xl:mb-[50px]">
          <h2 className="text-[24px] xl:text-[32px] font-bold mb-4">
            How we work with our clients
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 text-center">
          {clientWorkData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 xl:p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] bg-[#274c77] rounded-full flex items-center justify-center mb-4 xl:mb-6 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-[20px] xl:text-[24px] font-bold mb-3 xl:mb-4">
                {item.title}
              </h3>
              <p className="text-[14px] xl:text-[16px] text-gray-600 mb-4 xl:mb-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Partnership Model Section */}
      <div className="py-[50px] xl:py-[100px] padding-x">
        <div className="text-center mb-[30px] xl:mb-[50px]">
          <h2 className="text-[24px] xl:text-[32px] font-bold mb-4">
            Partnership Model
          </h2>
          <p className="text-[14px] xl:text-[16px] text-gray-600 max-w-[800px] mx-auto">
            At VTechEdge, client satisfaction stands at the core of everything
            we do. We believe in building lasting relationships, not just
            delivering projects. From day one to project completion, our team
            stays actively engaged — providing regular updates, typically every
            two weeks. Because to us, your success is our priority.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 xl:gap-12">
          <div className="w-full flex justify-center relative h-[250px] xl:h-[400px]">
            <Image
              src={partnershipContent[currentSlide].image}
              alt="Partnership"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>
          <div className="w-full max-w-[800px]">
            <div className="transition-all duration-500 ease-in-out">
              <h3 className="text-[20px] xl:text-[28px] font-bold mb-4 xl:mb-6 text-center">
                {partnershipContent[currentSlide].title}
              </h3>
              <p className="text-[14px] xl:text-[16px] text-gray-600 mb-6 xl:mb-8 text-center">
                {partnershipContent[currentSlide].content}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevSlide}
                className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full bg-[#274c77] text-white flex items-center justify-center hover:bg-[#2a3f5f] transition-colors"
              >
                <FaArrowLeft size={16} className="xl:w-5 xl:h-5" />
              </button>
              <div className="flex gap-2">
                {partnershipContent.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 xl:w-3 xl:h-3 rounded-full ${
                      currentSlide === index ? "bg-[#274c77]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNextSlide}
                className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full bg-[#274c77] text-white flex items-center justify-center hover:bg-[#2a3f5f] transition-colors"
              >
                <FaArrowRight size={16} className="xl:w-5 xl:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
