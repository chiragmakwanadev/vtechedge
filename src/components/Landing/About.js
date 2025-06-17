import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="px-[100px] py-[50px] flex flex-col gap-[50px]">
      <div className="flex items-center gap-[50px]">
        <div className="relative w-[60%] h-[400px]">
          <Image src="/images/bg-2.jpg" alt="about" fill className="rounded-[30px] object-cover" />
        </div>
        <div className="w-[40%] flex flex-col gap-[20px]">
          <h2 className="text-[18px] text-[#778da9]">Lorem ipsum dolor sit amet.</h2>
          <h1 className="text-[30px] font-medium text-[#0d1b2a]">About Us</h1>
          <p className="text-[18px] text-[#0d1b2a]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt quis veritatis, ipsa adipisci, modi dolore consequatur veniam fugit non repellendus quisquam
            dolorem quae mollitia culpa ea optio eaque consectetur?
          </p>
          <p className="text-[18px] text-[#0d1b2a]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt quis veritatis, ipsa adipisci, modi dolore consequatur veniam fugit non repellendus quisquam
            dolorem quae mollitia culpa ea optio eaque consectetur?
          </p>
          <button className="bg-[#778da9] hover:bg-[#415a77] transition-colors duration-300 text-[#e0e1dd] px-[20px] py-[10px] rounded-[8px] text-[18px]">Learn More</button>
        </div>
      </div>
      <div className="bg-[#ececec] p-[50px] text-center rounded-[30px] flex flex-col items-center gap-[20px]">
        <h1 className="text-[30px] font-medium text-[#0d1b2a]">Lorem ipsum dolor sit amet.</h1>
        <p className="text-[18px] text-[#0d1b2a] w-[80%] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi numquam aperiam, culpa odio enim, molestias similique animi repellat placeat reprehenderit inventore id
          atque. Inventore eum consequatur dolorem vel provident optio ad architecto porro pariatur! Soluta, earum! Numquam voluptas iusto culpa corporis ut rerum error voluptate
          doloribus exercitationem? Vero, quisquam possimus?
        </p>
        <button className="bg-[#778da9] hover:bg-[#415a77] transition-colors duration-300 text-[#e0e1dd] px-[20px] py-[10px] rounded-[8px] text-[18px]">Learn More</button>
      </div>
    </div>
  );
};

export default About;
