import React from "react";

const Why = () => {
  return (
    <div className="px-[100px] py-[50px] flex flex-col gap-[50px]">
      <div className="flex items-center gap-[50px]">
        <img
          src="/images/bg-2.jpg"
          alt="about"
          className="w-[50%] rounded-[30px]"
        />
        <div className="w-[50%] flex flex-col gap-[20px]">
          <h2 className="text-[18px] text-[#778da9]">
            Lorem ipsum dolor sit amet.
          </h2>
          <h1 className="text-[30px] font-medium text-[#0d1b2a]">
            Lorem ipsum dolor sit.
          </h1>
          <ul className="list-disc list-inside">
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              aut.
            </li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
          </ul>
          <button className="bg-[#778da9] hover:bg-[#415a77] transition-colors duration-300 text-[#e0e1dd] px-[20px] py-[10px] rounded-[8px] text-[18px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Why;
