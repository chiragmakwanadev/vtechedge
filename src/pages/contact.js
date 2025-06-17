import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0d1b2a] text-[#e0e1dd] p-8">
      <h1 className="text-4xl mb-6">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-[#415a77] border border-[#778da9] focus:outline-none focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-[#415a77] border border-[#778da9] focus:outline-none focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="w-full p-3 rounded-lg bg-[#415a77] border border-[#778da9] focus:outline-none focus:border-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#415a77] text-white px-6 py-3 rounded-lg hover:bg-[#2c3e50] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
