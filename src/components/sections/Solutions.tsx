
import React, { useState } from 'react';
import { 
  Factory, Store, Shield, Users, Scan, 
  CheckCircle, Zap, BarChart, Link, AlertCircle,
  Phone, Mail, MapPin
} from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Factory,
      title: "For Food Producers",
      description: "Ensure compliance, streamline operations, and protect your brand with real-time traceability and recall management tools."
    },
    {
      icon: Store,
      title: "For Retailers",
      description: "Deliver transparency to your customers by tracking products from farm to shelf, ensuring safety and quality at every step."
    },
    {
      icon: Shield,
      title: "For Regulators",
      description: "Access accurate, real-time data to enforce food safety standards and reduce risks across the supply chain."
    },
    {
      icon: Scan,
      title: "For Consumers",
      description: "Know where your food comes from. Scan, trace, and trust every product with FoodChain Verify."
    }
  ];

  return (
    <section className="bg-gray-50 py-20" id='solution'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Tailored Solutions for Every Step of Your Supply Chain
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-green-100 rounded-full mb-6 group-hover:bg-green-200 transition-colors">
                  <solution.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
