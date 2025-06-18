import React from "react";
import { useRouter } from "next/router";
import Banner from "../../components/Banner";
import { serviceData } from "../../static/serviceData";

const ServicePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0d1b2a] text-[#e0e1dd] p-8 pt-32">
        <h1 className="text-4xl mb-6">Service Not Found</h1>
        <p>The requested service does not exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-black">
      <Banner title={service.title} description={service.description} bgColor="bg-[#0d1b2a]" textColor="text-[#e0e1dd]" />

      {service.content.map((section, index) => (
        <div key={index} className="p-8 rounded-lg mb-12 text-center mt-6">
          <h2 className="text-3xl font-bold mb-6">{section.heading}</h2>
          <div className="space-y-6">
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-lg text-gray-600 w-[80%] mx-auto">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}

      {/* Dynamic Cards Section */}
      <div className="py-[100px] px-[150px] bg-[#ececec]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">{service.mobileCards.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.mobileCards.cards.map((card, index) => (
            <div key={index} className="bg-white p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full items-center text-center">
              <div className="w-[60px] h-[60px] bg-gray-200 rounded-full flex items-center justify-center mb-6 text-3xl">{card.icon}</div>
              <h3 className="text-[24px] font-bold mb-4">{card.title}</h3>
              <p className="text-[16px] text-gray-600 mb-6 flex-1">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Section: Image Left, Features Right */}
      <div className="py-[100px] px-[150px]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">{service.featureSection.heading}</h2>
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white">
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img src={service.featureSection.image} alt="feature" className="w-full h-[400px] rounded-[20px] object-cover" />
          </div>
          <div className="flex-1">
            {service.featureSection.features.map((feature, idx) => (
              <div key={idx} className="mb-8 last:mb-0">
                <h3 className="text-xl font-bold mb-2 text-[#1b263b]">{feature.title}</h3>
                <p className="text-gray-600 text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Multi Phase Section: 2x2 Grid with Heading and Subheading */}
      <div className="py-[100px] px-[150px] bg-[#ececec]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#1b263b]">{service.multiPhaseSection.heading}</h2>
        <p className="text-lg text-center mb-12 text-[#6c7a89] max-w-4xl mx-auto">{service.multiPhaseSection.subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {service.multiPhaseSection.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-[80px] h-[80px] border-2 border-blue-500 rounded-full flex items-center justify-center text-4xl text-blue-500 bg-white">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#1b263b]">{item.title}</h3>
                <p className="text-base text-[#6c7a89]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Static Button at the End */}
      <div className="flex justify-center my-24">
        <button
          className="bg-[#1b263b] text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg transition-all duration-300
          hover:bg-gradient-to-r hover:from-[#415a77] hover:to-[#1b263b] hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(65,90,119,0.25)]
          focus:outline-none focus:ring-4 focus:ring-[#415a77]/50 animate-bounce"
        >
          SETUP A FREE MEETING
        </button>
      </div>
    </div>
  );
};

export default ServicePage;
