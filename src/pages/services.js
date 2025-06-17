import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#0d1b2a] text-[#e0e1dd] p-8">
      <h1 className="text-4xl mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#415a77] p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Software Development</h2>
          <p className="mb-4">
            Custom software solutions tailored to your business needs, built
            with the latest technologies and best practices.
          </p>
        </div>
        <div className="bg-[#415a77] p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Cloud Solutions</h2>
          <p className="mb-4">
            Scalable cloud infrastructure and migration services to help your
            business leverage the power of cloud computing.
          </p>
        </div>
        <div className="bg-[#415a77] p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Digital Transformation</h2>
          <p className="mb-4">
            End-to-end digital transformation services to modernize your
            business operations and enhance customer experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
