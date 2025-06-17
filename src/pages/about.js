import Banner from "@/components/Banner";
import React from "react";

const About = () => {
  return (
    <>
      <Banner title={"About Us"} description={"Lorem ipsum dolor sit amet."} />
      <div className="py-[50px] px-[150px] flex items-center justify-between gap-5">
        <img
          src="/images/about.jpg"
          alt="about"
          className="w-[50%] rounded-[50px]"
        />
        <div className="flex flex-col gap-[40px] w-[50%]">
          <h1 className="text-[24px] font-bold">Lorem, ipsum dolor.</h1>
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure illum
            fugiat earum tempora, rem ipsam. Ducimus, nobis explicabo doloremque
            enim accusantium similique iste excepturi quidem deserunt non! Dolor
            enim in commodi optio rem ullam. Ut.
          </p>
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center gap-2 bg-[#1b263b] rounded-[20px] p-5 text-white w-full">
              <h1 className="text-[48px] font-bold">300+</h1>
              <h4 className="text-[16px] font-normal">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
            <div className="flex flex-col items-center gap-2 bg-[#1b263b] rounded-[20px] p-5 text-white w-full">
              <h1 className="text-[48px] font-bold">300+</h1>
              <h4 className="text-[16px] font-normal">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
