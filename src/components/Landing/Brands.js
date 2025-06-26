import React from "react";

const Brands = () => {
  return (
    <div className="w-full overflow-hidden py-[40px] px-4 md:px-[100px] bg-[#ececec] flex flex-col items-center">
      <h2 className="text-[#778da9] text-center text-[24px]">
        Brands Who Trust Us
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            {/* First set of logos */}
            {[...Array(7)].map((_, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-8">
                <img
                  src="/images/logo.png"
                  alt="Brand Logo"
                  className="object-contain w-[120px] md:w-[150px] h-auto"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[...Array(7)].map((_, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-8">
                <img
                  src="/images/logo.png"
                  alt="Brand Logo"
                  className="object-contain w-[120px] md:w-[150px] h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
