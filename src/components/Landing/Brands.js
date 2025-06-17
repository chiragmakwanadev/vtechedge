import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="w-full overflow-hidden py-[40px] px-[100px] bg-[#ececec] flex flex-col items-center">
      <h2 className="text-[#778da9]">Lorem, ipsum dolor.</h2>
      <h1 className="text-[24px]">Lorem ipsum dolor sit amet consectetur.</h1>
      <div className="flex gap-[100px]">
        {[...Array(7)].map((_, index) => (
          <div key={index}>
            <Image
              src="/images/logo.png"
              alt="Brand Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
