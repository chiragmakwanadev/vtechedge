import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import gsap from "gsap";
import { redHatText } from "@/pages";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);

  const serviceItems = [
    { name: "Software Development", slug: "software-development" },
    { name: "Cloud Solutions", slug: "cloud-solutions" },
    { name: "Digital Transformation", slug: "digital-transformation" },
    { name: "IT Consulting", slug: "it-consulting" },
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Data Analytics", slug: "data-analytics" },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Robotic Process Automation(RPA)", path: "/rpa" },
    { name: "Services", path: "/services", hasDropdown: true },
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

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
    if (dropdownRef.current) {
      if (!showServicesDropdown) {
        // Opening animation
        gsap.fromTo(
          dropdownRef.current,
          {
            opacity: 0,
            y: -10,
            display: "block",
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          }
        );
      } else {
        // Closing animation
        gsap.to(dropdownRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(dropdownRef.current, { display: "none" });
          },
        });
      }
    }
  };

  const closeDropdown = () => {
    if (showServicesDropdown) {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setShowServicesDropdown(false);
          gsap.set(dropdownRef.current, { display: "none" });
        },
      });
    }
  };

  const handleMenuItemClick = () => {
    closeDropdown();
  };

  return (
    <header
      ref={headerRef}
      className={`w-full fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#0d1b2a]/30 backdrop-blur-[20px] text-[#e0e1dd] px-[100px] py-[30px]
       transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Link href="/" className="flex items-end relative" onClick={handleMenuItemClick}>
        <img src="/images/logo-white.png" alt="logo" className="w-[50px]" />
        <div>
          <h1 className="text-[24px] absolute left-[52px] bottom-[15px]">techEdge</h1>
          <h1 className="text-[16px] absolute left-[90px] bottom-[-2px] font-thin">Solutions.</h1>
        </div>
      </Link>
      <ul className="flex items-center gap-[40px] text-[16px]">
        {navItems.map((item) => (
          <li
            key={item.path}
            className="relative cursor-pointer group"
            onMouseEnter={(e) => {
              handleMouseEnter(e);
            }}
            onMouseLeave={(e) => {
              handleMouseLeave(e);
            }}
          >
            <div className="flex items-center gap-1">
              <Link href={item.path} className={`relative ${router.pathname === item.path ? "text-white" : "text-[#e0e1dd]"}`} onClick={handleMenuItemClick}>
                {item.name}
              </Link>
              {item.hasDropdown && (
                <button onClick={toggleServicesDropdown} className="focus:outline-none text-[#e0e1dd] flex items-center" aria-label="Toggle services menu">
                  <MdKeyboardArrowDown size={20} className={`transition-transform duration-300 ${showServicesDropdown ? "rotate-180" : ""}`} />
                </button>
              )}
            </div>
            <div className="nav-underline absolute bottom-[-4px] left-0 h-[2px] bg-[#e0e1dd]" style={{ width: 0 }} />
            {item.hasDropdown && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 mt-2 w-64 bg-[#0d1b2a] rounded-md shadow-lg py-2 z-50"
                style={{ display: showServicesDropdown ? "block" : "none" }}
              >
                {serviceItems.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2 text-[#e0e1dd] hover:bg-[#415a77] transition-colors duration-200"
                    onClick={handleMenuItemClick}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <Link href="/contact" className="bg-[#415a77] px-[20px] py-[10px] rounded-[5px] hover:bg-[#2c3e50] transition-colors duration-300" onClick={handleMenuItemClick}>
        CONTACT US
      </Link>
    </header>
  );
};

export default Header;
