import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#0d1b2a] text-[#e0e1dd] p-8">
      <h1 className="text-4xl mb-6">Blog</h1>
      <div className="space-y-8">
        <article className="bg-[#415a77] p-6 rounded-lg">
          <h2 className="text-2xl mb-4">The Future of RPA in 2024</h2>
          <p className="mb-4">
            Explore how Robotic Process Automation is evolving and what trends
            we can expect to see in the coming year.
          </p>
          <span className="text-sm text-gray-300">March 15, 2024</span>
        </article>
        <article className="bg-[#415a77] p-6 rounded-lg">
          <h2 className="text-2xl mb-4">
            Digital Transformation Best Practices
          </h2>
          <p className="mb-4">
            Learn about the key strategies and best practices for successful
            digital transformation in your organization.
          </p>
          <span className="text-sm text-gray-300">March 10, 2024</span>
        </article>
        <article className="bg-[#415a77] p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Cloud Computing Trends</h2>
          <p className="mb-4">
            Discover the latest trends in cloud computing and how they're
            shaping the future of business technology.
          </p>
          <span className="text-sm text-gray-300">March 5, 2024</span>
        </article>
      </div>
    </div>
  );
};

export default Blog;
