import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Reducing Recall Response Time by 80% for a Leading Dairy Producer",
      category: "Food Safety",
      image: "/images/safety.jpg",
      description: "Learn how we helped a major dairy producer dramatically improve their recall response time while ensuring product safety."
    },
    {
      title: "Ensuring FDA Compliance for a Global Snack Food Manufacturer",
      category: "Compliance",
      image: "/images/compliance.jpg",
      description: "Discover how our platform helped streamline compliance processes for a global manufacturer."
    },
    {
      title: "Enhancing Transparency for a Farm-to-Table Organic Brand",
      category: "Transparency",
      image: "/images/organic.jpg",
      description: "See how we helped an organic brand build consumer trust through complete supply chain visibility."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id='resources'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Transforming Food Supply Chains: Real Stories, Real Results
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full mb-4">
                  {study.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {study.description}
                </p>
                <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                  Read Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;