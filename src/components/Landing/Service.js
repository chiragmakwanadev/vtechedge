import Link from "next/link";
import React from "react";

const Service = () => {
  const services = [
    {
      title: "Software Development",
      description: "Custom websites built with modern technologies",
      icon: "🌐",
    },
    {
      title: "Cloud Solutions",
      description: "Native and cross-platform mobile applications",
      icon: "📱",
    },
    {
      title: "Digital Transformation",
      description: "Beautiful and intuitive user interfaces",
      icon: "🎨",
    },
    {
      title: "IT Consulting",
      description: "Scalable cloud infrastructure and services",
      icon: "☁️",
    },
    {
      title: "CyberSecurity",
      description: "Streamlined development and deployment",
      icon: "⚙️",
    },
    {
      title: "Data Analytics",
      description: "Expert technical guidance and strategy",
      icon: "💡",
    },
  ];

  return (
    <div className="py-[100px] px-[150px] ">
      <div className="text-center mb-[50px]">
        <h2 className="text-[32px] font-bold mb-4">Services</h2>
        <p className="text-[16px] text-gray-600 max-w-[600px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, assumenda!</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
            <div className="w-[60px] h-[60px] bg-[#1b263b] rounded-full flex items-center justify-center mb-6 text-[24px]">{service.icon}</div>
            <h3 className="text-[24px] font-bold mb-4">{service.title}</h3>
            <p className="text-[16px] text-gray-600 mb-6 flex-1">{service.description}</p>
            <Link
              href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="mt-auto inline-flex items-center gap-2 text-[#1b263b] font-semibold hover:underline group"
            >
              Learn More
              <svg
                className="w-5 h-5 text-[#1b263b] group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-[50px]">
        <button className="bg-[#1b263b] hover:bg-[#415a77] transition-colors duration-300 text-white px-[20px] py-[10px] rounded-[8px] text-[18px]">Set Up a Meeting</button>
      </div>
    </div>
  );
};

export default Service;
