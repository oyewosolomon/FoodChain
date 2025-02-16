import React from 'react';
import { ChevronRight, LineChart, Shield, Clock, BarChart3 } from 'lucide-react';

const Hero = () => {
  const features = [
    { icon: LineChart, title: 'Real-Time Tracking', description: 'Monitor products at every stage of the supply chain' },
    { icon: Shield, title: 'Regulatory Compliance', description: 'Stay ahead of FDA and global food safety regulations' },
    { icon: Clock, title: 'Recall Management', description: 'Slash response times and protect your brand reputation' },
    { icon: BarChart3, title: 'Data-Driven Insights', description: 'Make smarter decisions with actionable analytics' }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50" />
      
      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 mt-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            From Farm to Retail <br />Trust Every Step of Your Food's Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            FoodChain Verify is the leading food traceability platform, empowering over 1,000 food producers to ensure compliance, enhance transparency, and reduce recall response times by 80%
          </p>
          
          {/* CTA Button */}
          <button className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-all duration-200 transform hover:scale-105">
            Discover How FoodChain Verify Can Transform Your Supply Chain
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Features grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-green-100 rounded-full mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;