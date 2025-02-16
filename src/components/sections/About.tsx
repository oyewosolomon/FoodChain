import React from 'react';
import { Users, Target, History, ChevronRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white py-20" id='about'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Building a Transparent and Trustworthy Food Supply Chain
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full" />
        </div>

        {/* Mission statement */}
        <div className="bg-green-50 p-8 rounded-2xl mb-16">
          <div className="flex items-center justify-center mb-6">
            <Target className="w-10 h-10 text-green-600" />
          </div>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            At FoodChain Verify, our mission is to revolutionize food traceability by providing a seamless, end-to-end platform that ensures safety, compliance, and transparency for food producers, retailers, and consumers alike.
          </p>
        </div>

        {/* Story and Team sections */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Our Story */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <History className="w-8 h-8 text-green-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Founded by industry experts passionate about food safety, FoodChain Verify was born out of the need to address the growing complexities of global food supply chains. Today, we serve over 1,000 food producers, helping them navigate regulatory challenges and build consumer trust.
            </p>
          </div>

          {/* Team */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-green-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Our Team</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Meet the team of food safety specialists, technologists, and supply chain experts dedicated to making your food supply chain safer and more efficient.
            </p>
            <button className="mt-6 inline-flex items-center px-6 py-3 text-sm font-medium text-green-600 bg-green-100 rounded-full hover:bg-green-200 transition-colors duration-200">
              Meet Our Team
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;