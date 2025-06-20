import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";
import { rpaBenefits } from "@/static/rpaData";

const RPA = () => {
  return (
    <>
      <Banner
        title={"Robotic Process Automation (RPA)"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
      />

      {/* New Section: Two-column layout with left content and right image */}
      <div className="flex flex-col md:flex-row items-center justify-between py-[50px] px-[150px] bg-white gap-8">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We streamline your workflows and prepare them for intelligent
            automation.
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Robotic Process Automation is the technology that allows anyone
            today to configure computer software, or a "robot" to emulate and
            integrate the actions of a human interacting within digital systems
            to execute a business process. RPA robots utilize the user interface
            to capture data and manipulate applications just like humans do.
            They interpret, trigger responses and communicate with other systems
            in order to perform on a vast variety of repetitive tasks. An RPA
            software robot never sleeps and makes zero mistakes.
          </p>
          <button className="bg-[#415A77] text-white font-semibold py-3 px-8 rounded-lg transition">
            Discover
          </button>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center relative h-[500px]">
          <Image
            src="/images/bg-3.jpg"
            alt="RPA Illustration"
            fill
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-[50px] px-[150px] bg-[#ececec]">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Benefits of Our RPA Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rpaBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              <span className="flex items-center text-[#415A77] font-semibold cursor-pointer hover:underline">
                Explore{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-[50px] px-[150px] bg-white">
        <h2 className="text-3xl font-bold mb-12 text-center">Applications</h2>
        {/* First Row: Left content, right image */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="flex-1 flex flex-col items-start mb-8 md:mb-0 gap-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              RPA for the Retail Industry
            </h3>
            <p className="text-lg  text-gray-700 max-w-xl">
              In today’s competitive retail landscape, businesses must adopt
              smarter technologies to keep up with evolving customer
              expectations and complex operations. Robotic Process Automation
              (RPA) plays a critical role in transforming the retail ecosystem
              by automating time-consuming, repetitive tasks and reducing the
              risk of human error.
            </p>
            <p className="text-lg  text-gray-700 max-w-xl">
              From managing inventory and processing transactions to data
              analysis, product tracking, and order fulfillment, RPA helps
              streamline operations across the board. It also enhances internal
              processes like invoicing, reporting, and customer support — making
              them faster, more accurate, and cost-efficient.
            </p>
            <p className="text-lg  text-gray-700 max-w-xl">
              By integrating RPA into your retail workflows, you not only
              improve efficiency and compliance, but also empower your teams to
              focus on more strategic and customer-facing tasks. The result:
              lower operational costs, better customer experiences, and a more
              agile business model.
            </p>
          </div>
          <div className="flex-1 flex justify-start relative h-[500px]">
            <Image
              src="/images/bg-1.jpg"
              alt="Finance Automation"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>
        </div>
        {/* Second Row: Left image, right content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-start order-2 md:order-1 relative h-[500px]">
            <Image
              src="/images/bg-2.jpg"
              alt="HR Automation"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>
          <div className="flex-1 flex flex-col items-start order-1 md:order-2 mb-8 md:mb-0 gap-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Automating Financial Processes
            </h3>
            <p className="text-lg text-gray-700 max-w-xl">
              In the finance and accounting sector, accuracy and timeliness are
              critical. Robotic Process Automation (RPA) simplifies and
              accelerates complex financial workflows by automating high-volume,
              rule-based tasks that typically consume significant time and
              resources.
            </p>
            <p className="text-lg text-gray-700 max-w-xl">
              RPA can handle processes such as invoice generation, accounts
              payable/receivable, payment reconciliation, financial reporting,
              and compliance tracking — all with unmatched speed and precision.
              By eliminating manual intervention, businesses reduce errors,
              enhance audit readiness, and maintain consistent financial
              controls.
            </p>
            <p className="text-lg text-gray-700 max-w-xl">
              With RPA, finance teams can shift their focus from routine data
              entry to strategic decision-making, improving overall financial
              performance and operational agility.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width Meeting Section */}
      <div className="relative w-full py-16 mt-14">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/banner.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 px-[150px] flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Heading and Content */}
          <div className="flex-1 text-white mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-xl">
              Let&apos;s discuss how RPA can streamline your operations and
              boost efficiency. Schedule a free consultation with our experts
              today.
            </p>
          </div>

          {/* Right Side: Button */}
          <div className="flex-shrink-0">
            <button className="bg-white text-[#415A77] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors">
              Setup a Free Meeting
            </button>
          </div>
        </div>
      </div>

      {/* Other Offerings Section */}
      <div className="py-[50px] px-[150px] bg-[#ececec]">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Other Offerings
        </h2>

        {/* First Offering */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            Smart Customer Engagement Automation
          </h3>
          <p className="text-lg text-gray-700">
            Deliver faster, smarter, and more consistent customer experiences
            with RPA. From order confirmation and shipment tracking to
            post-delivery feedback, automation keeps your customers informed in
            real time — reducing support costs while increasing satisfaction.
            Let bots handle repetitive tasks so your team can focus on building
            relationships.
          </p>
        </div>

        {/* Second Offering */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            Connected Logistics & Inventory Intelligence
          </h3>
          <p className="text-lg text-gray-700">
            RPA enhances supply chain agility by automating order updates,
            inventory checks, and shipment tracking. It ensures real-time
            communication between vendors, distributors, and customers, while
            also helping forecast demand, maintain stock thresholds, and reduce
            procurement delays. Result: streamlined operations and fewer
            logistical hiccups.
          </p>
        </div>

        {/* Third Offering */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Intelligent HR & Workforce Automation
          </h3>
          <p className="text-lg text-gray-700">
            Empower your HR team with automation tools that handle routine tasks
            like attendance tracking, shift scheduling, payroll processing,
            leave approvals, and employee record updates. With RPA, compliance
            improves, accuracy increases, and your HR department operates more
            efficiently — freeing up time for strategic initiatives.
          </p>
        </div>
      </div>
    </>
  );
};

export default RPA;
