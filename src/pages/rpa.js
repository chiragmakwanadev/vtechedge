import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";

const RPA = () => {
  return (
    <>
      <Banner title={"Robotic Process Automation (RPA)"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit"} />

      {/* New Section: Two-column layout with left content and right image */}
      <div className="flex flex-col md:flex-row items-center justify-between py-[50px] px-[150px] bg-white gap-8">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Empower Your Business with RPA</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
            Robotic Process Automation (RPA) transforms your business by automating repetitive tasks, increasing efficiency, and reducing errors. Unlock new levels of productivity
            and let your team focus on what matters most. <br />
            <br />
            Discover how RPA can streamline your operations and drive innovation in your organization.
          </p>
          <button className="bg-[#415A77] text-white font-semibold py-3 px-8 rounded-lg transition">Discover</button>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center relative h-[400px]">
          <Image src="/images/bg-3.jpg" alt="RPA Illustration" fill className="object-cover rounded-[20px]" />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-[50px] px-[150px] bg-[#ececec]">
        <h2 className="text-3xl font-bold mb-12 text-center">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative w-12 h-12 mb-4">
              <Image src="/images/logo.png" alt="Benefit 1" fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
            <p className="text-gray-600 mb-6">Automate repetitive tasks and boost productivity across your organization.</p>
            <span className="flex items-center text-[#415A77] font-semibold cursor-pointer hover:underline">
              Explore{" "}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
              </svg>
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative w-12 h-12 mb-4">
              <Image src="/images/logo-black.png" alt="Benefit 2" fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Accuracy</h3>
            <p className="text-gray-600 mb-6">Reduce human error and ensure consistent, reliable results every time.</p>
            <span className="flex items-center text-[#415A77] font-semibold cursor-pointer hover:underline">
              Explore{" "}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
              </svg>
            </span>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative w-12 h-12 mb-4">
              <Image src="/images/logo.png" alt="Benefit 3" fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scalability</h3>
            <p className="text-gray-600 mb-6">Easily scale automation solutions as your business grows and evolves.</p>
            <span className="flex items-center text-[#415A77] font-semibold cursor-pointer hover:underline">
              Explore{" "}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
              </svg>
            </span>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative w-12 h-12 mb-4">
              <Image src="/images/logo.png" alt="Benefit 4" fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
            <p className="text-gray-600 mb-6">Lower operational costs by automating manual, time-consuming processes.</p>
            <span className="flex items-center text-[#415A77] font-semibold cursor-pointer hover:underline">
              Explore{" "}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-[50px] px-[150px] bg-white">
        <h2 className="text-3xl font-bold mb-12 text-center">Applications</h2>
        {/* First Row: Left content, right image */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Automating Financial Processes</h3>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              RPA streamlines financial operations such as invoice processing, expense management, and compliance reporting. This reduces manual effort, increases accuracy, and
              accelerates business cycles for finance teams.
            </p>
          </div>
          <div className="flex-1 flex justify-start relative h-[300px]">
            <Image src="/images/bg-1.jpg" alt="Finance Automation" fill className="object-cover rounded-[20px]" />
          </div>
        </div>
        {/* Second Row: Left image, right content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-start order-2 md:order-1 relative h-[300px]">
            <Image src="/images/bg-2.jpg" alt="HR Automation" fill className="object-cover rounded-[20px]" />
          </div>
          <div className="flex-1 flex flex-col items-start order-1 md:order-2 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Enhancing HR Operations</h3>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              RPA can automate HR tasks like onboarding, payroll, and employee data management, freeing up HR professionals to focus on strategic initiatives and employee
              engagement.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-12 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at debitis veniam culpa possimus amet, pariatur deserunt cum praesentium, perferendis, incidunt
          eligendi error id necessitatibus animi rem quis odit! Nobis, veritatis eveniet similique porro nesciunt culpa repellat earum quam numquam. Distinctio velit, officiis
          illum impedit neque dignissimos accusamus iure numquam?
        </p>
      </div>

      {/* Full-width Meeting Section */}
      <div className="relative w-full py-16 my-14">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image src="/images/banner.jpg" alt="Background" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 px-[150px] flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Heading and Content */}
          <div className="flex-1 text-white mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg md:text-xl opacity-90 max-w-xl">
              Let&apos;s discuss how RPA can streamline your operations and boost efficiency. Schedule a free consultation with our experts today.
            </p>
          </div>

          {/* Right Side: Button */}
          <div className="flex-shrink-0">
            <button className="bg-white text-[#415A77] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors">Setup a Free Meeting</button>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="py-[50px] px-[150px] bg-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Brands Who Trust Us</h2>
        <div className="flex flex-wrap justify-between items-center">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="relative w-32 h-32">
              <Image src="/images/logo.png" alt={`Trusted Brand ${index}`} fill className="object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Other Offerings Section */}
      <div className="py-[50px] px-[150px] bg-[#ececec]">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Other Offerings</h2>

        {/* First Offering */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Digital Transformation</h3>
          <p className="text-lg text-gray-700">
            Transform your business with our comprehensive digital solutions. We help organizations embrace digital technologies, streamline processes, and create innovative
            business models. Our approach ensures a smooth transition while maximizing ROI and maintaining operational excellence.
          </p>
        </div>

        {/* Second Offering */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Cloud Computing Services</h3>
          <p className="text-lg text-gray-700">
            Leverage the power of cloud computing to scale your business operations. Our cloud solutions provide flexibility, security, and cost-effectiveness. From migration to
            management, we ensure your cloud infrastructure aligns perfectly with your business objectives.
          </p>
        </div>

        {/* Third Offering */}
        <div>
          <h3 className="text-2xl font-bold mb-4">AI & Machine Learning Solutions</h3>
          <p className="text-lg text-gray-700">
            Harness the potential of AI and Machine Learning to gain competitive advantage. Our solutions help you automate decision-making processes, extract insights from data,
            and create intelligent applications that drive business growth and innovation.
          </p>
        </div>
      </div>
    </>
  );
};

export default RPA;
