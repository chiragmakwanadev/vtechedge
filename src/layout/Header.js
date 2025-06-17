import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import gsap from "gsap";
import { redHatText } from "@/pages";

const Header = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Robotic Process Automation(RPA)", path: "/rpa" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
  ];

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMouseEnter = (e) => {
    const underline = e.currentTarget.querySelector(".nav-underline");
    const tl = gsap.timeline();
    tl.to(underline, {
      width: "100%",
      duration: 0.4,
      ease: "power2.out",
      onStart: () => {
        gsap.set(underline, { left: 0 });
      },
    });
  };

  const handleMouseLeave = (e) => {
    const underline = e.currentTarget.querySelector(".nav-underline");
    const tl = gsap.timeline();
    tl.to(underline, {
      width: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(underline, { left: "100%" });
      },
    });
  };

  return (
    <header
      ref={headerRef}
      className={` w-full fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#0d1b2a]/30 backdrop-blur-[20px] text-[#e0e1dd] px-[100px] py-[30px]
       transition-transform duration-300 ${
         isVisible ? "translate-y-0" : "-translate-y-full"
       }`}
    >
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
      <ul className="flex items-center gap-[40px] text-[16px] ">
        {navItems.map((item) => (
          <li
            key={item.path}
            className="relative cursor-pointer group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.path}
              className={`relative ${
                router.pathname === item.path ? "text-white" : "text-[#e0e1dd]"
              }`}
            >
              {item.name}
            </Link>
            <div
              className="nav-underline absolute bottom-[-4px] left-0 h-[2px] bg-[#e0e1dd]"
              style={{ width: 0 }}
            />
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="bg-[#415a77] px-[20px] py-[10px] rounded-[5px] hover:bg-[#2c3e50] transition-colors duration-300"
      >
        CONTACT US
      </Link>
    </header>
  );
};

export default Header;
