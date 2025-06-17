import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#1b263b] text-white flex items-start justify-around px-[100px] py-[100px] gap-[100px]">
      <div className="flex flex-col gap-[20px]">
        <Link href="/" className="flex items-end relative">
          <img src="/images/logo-white.png" alt="logo" className="w-[50px]" />
          <div>
            <h1 className="text-[24px] absolute left-[52px] bottom-[15px]">
              techEdge
            </h1>
            <h1 className="text-[16px] absolute left-[90px] bottom-[-2px] font-thin">
              Solutions.
            </h1>
          </div>
        </Link>
        <p className="w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus
          quisquam vitae incidunt doloremque cum.
        </p>
        <div
          className="bg-white rounded-[30px] border-transparent 
        overflow-hidden pl-[15px] pr-[1px] py-[1px] w-[300px] h-[40px] flex items-center justify-between"
        >
          <input type="text" placeholder="Enter your email" />
          <button className="bg-[#1b263b] hover:bg-[#415a77] transition-colors duration-300 h-full rounded-[30px] py-2 px-4 flex items-center justify-center">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] w-[300px]">
        <h1 className="text-[24px] font-bold">Support</h1>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/">Lorem, ipsum.</Link>
          </li>
          <li>
            <Link href="/">Lorem, ipsum.</Link>
          </li>
          <li>
            <Link href="/">Lorem, ipsum.</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-[20px] w-[300px]">
        <h1 className="text-[24px] font-bold">Address</h1>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <span>📍</span>
            <span>123 Tech Street, Silicon Valley, CA 94043</span>
          </li>
          <li className="flex items-center gap-2">
            <span>📞</span>
            <span>+1 (555) 123-4567</span>
          </li>
          <li className="flex items-center gap-2">
            <span>✉️</span>
            <span>contact@techedge.solutions</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-[20px] w-[300px]">
        <h1 className="text-[24px] font-bold">Socials</h1>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="https://linkedin.com"
              className="flex items-center gap-2"
            >
              <span>🔗</span>
              <span>LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com"
              className="flex items-center gap-2"
            >
              <span>🐦</span>
              <span>Twitter</span>
            </Link>
          </li>
          <li>
            <Link href="https://github.com" className="flex items-center gap-2">
              <span>💻</span>
              <span>GitHub</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
