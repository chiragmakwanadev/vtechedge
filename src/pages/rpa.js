import React from "react";

const RPA = () => {
  return (
    <div className="min-h-screen bg-[#0d1b2a] text-[#e0e1dd] p-8">
      <h1 className="text-4xl mb-6">Robotic Process Automation (RPA)</h1>
      <p className="text-lg mb-4">
        At techEdge Solutions, we specialize in implementing cutting-edge RPA
        solutions that streamline your business processes and boost operational
        efficiency.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-[#415a77] p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Our RPA Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Process Automation</li>
            <li>Workflow Optimization</li>
            <li>Custom RPA Solutions</li>
            <li>RPA Integration</li>
          </ul>
        </div>
        <div className="bg-[#415a77] p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increased Efficiency</li>
            <li>Cost Reduction</li>
            <li>Error Elimination</li>
            <li>24/7 Operation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RPA;
