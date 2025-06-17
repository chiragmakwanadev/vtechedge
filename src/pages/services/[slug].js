import React from "react";
import { useRouter } from "next/router";

const serviceData = {
  "software-development": {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs, built with the latest technologies and best practices.",
    features: ["Custom Application Development", "Web Application Development", "Mobile App Development", "API Development & Integration"],
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to help your business leverage the power of cloud computing.",
    features: ["Cloud Migration", "Cloud Infrastructure Management", "Cloud Security", "Cloud Optimization"],
  },
  "digital-transformation": {
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize your business operations and enhance customer experience.",
    features: ["Business Process Automation", "Legacy System Modernization", "Digital Strategy Consulting", "Technology Implementation"],
  },
  "it-consulting": {
    title: "IT Consulting",
    description: "Strategic IT consulting services to help you make informed decisions and optimize your technology investments.",
    features: ["Technology Assessment", "IT Strategy Development", "Project Management", "Technology Roadmap"],
  },
  cybersecurity: {
    title: "Cybersecurity",
    description: "Comprehensive cybersecurity solutions to protect your business from evolving digital threats.",
    features: ["Security Assessment", "Threat Detection & Response", "Security Compliance", "Security Training"],
  },
  "data-analytics": {
    title: "Data Analytics",
    description: "Advanced data analytics services to help you make data-driven decisions and gain competitive advantages.",
    features: ["Data Analysis & Visualization", "Business Intelligence", "Predictive Analytics", "Big Data Solutions"],
  },
};

const ServicePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0d1b2a] text-[#e0e1dd] p-8 pt-32">
        <h1 className="text-4xl mb-6">Service Not Found</h1>
        <p>The requested service does not exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1b2a] text-[#e0e1dd] p-8 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl mb-6">{service.title}</h1>
        <p className="text-xl mb-8">{service.description}</p>

        <div className="bg-[#415a77] p-8 rounded-lg">
          <h2 className="text-2xl mb-6">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
