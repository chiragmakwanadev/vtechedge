import Link from "next/link";
import React from "react";

const Service = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies",
      icon: "🌐",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces",
      icon: "🎨",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services",
      icon: "☁️",
    },
    {
      title: "DevOps",
      description: "Streamlined development and deployment",
      icon: "⚙️",
    },
    {
      title: "Consulting",
      description: "Expert technical guidance and strategy",
      icon: "💡",
    },
  ];

  return (
    <div className="px-[100px] py-[50px] flex flex-col gap-[10px] w-full text-center items-center">
      <h2 className="text-[18px] text-[#778da9]">
        Lorem ipsum dolor sit amet.
      </h2>
      <h1 className="text-[30px] font-bold text-[#0d1b2a]">Services</h1>
      <p className="text-[18px] text-[#0d1b2a]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /> Maxime, assumenda!
      </p>

      <div className="flex flex-wrap justify-center gap-[10px] w-full pt-[50px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#ececec] p-9 rounded-xl  duration-300 flex flex-col items-start justify-center gap-4 w-[32%] h-[300px]"
          >
            <div className="text-[50px]">{service.icon}</div>
            <h3 className="text-xl font-semibold text-black">
              {service.title}
            </h3>
            <p className="text-[#778da9]">{service.description}</p>
            <Link
              href="/"
              className="bg-[#778da9] hover:bg-[#415a77] duration-300 text-[#e0e1dd] px-[10px] py-[5px] rounded-[8px] text-[18px]"
            >
              Explore...
            </Link>
          </div>
        ))}
      </div>

      <button className="bg-[#778da9] w-[300px] hover:bg-[#415a77] transition-colors duration-300 text-[#e0e1dd] px-[20px] py-[10px] rounded-[8px] text-[18px] mt-[50px]">
        Set Up a Meeting
      </button>
    </div>
  );
};

export default Service;
