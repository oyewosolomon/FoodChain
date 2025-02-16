import React, { useState } from 'react';
import { Shield, BarChart, Link, AlertCircle } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Link,
      title: "End-to-End Traceability",
      description: "Track every product from farm to retail, ensuring full visibility and accountability."
    },
    {
      icon: Shield,
      title: "Compliance Made Simple",
      description: "Automate compliance with FDA and global regulations, reducing manual effort and risk."
    },
    {
      icon: AlertCircle,
      title: "Rapid Recall Response",
      description: "Identify and isolate affected products in minutes, reducing recall response times by 80%."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Gain actionable insights to optimize your supply chain and improve decision-making."
    }
  ];

  const [activeFeature, setActiveFeature] = useState<number>(0);

  // Ensure activeFeature is within the bounds of the features array
  const activeFeatureData = features[activeFeature];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Powerful Tools for a Safer, Smarter Supply Chain
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title} // Use a unique identifier instead of index
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-green-50 shadow-md' 
                      : 'hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Interactive Illustration */}
          <div className="bg-green-50 p-8 rounded-2xl">
            {/* Placeholder for feature illustration */}
            <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 flex items-center justify-center">
                {activeFeatureData && (
                  <activeFeatureData.icon className="w-32 h-32 text-green-600 animate-pulse" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;