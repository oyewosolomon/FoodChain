import React, { useState } from 'react';
import { 
  Factory, Store, Shield, Users, Scan, 
  CheckCircle, Zap, BarChart, Link, AlertCircle,
  Phone, Mail, MapPin
} from 'lucide-react';

// Define types for the pricing tiers
const PricingSection = () => {
  const plans = [
    {
      name: "Starter Plan",
      description: "Ideal for small producers",
      features: [
        "Basic traceability tools",
        "Compliance monitoring",
        "Standard support",
        "Up to 1,000 traces/month"
      ]
    },
    {
      name: "Professional Plan",
      description: "Perfect for mid-sized businesses",
      features: [
        "Advanced analytics",
        "Recall management",
        "Priority support",
        "Up to 10,000 traces/month"
      ],
      popular: true
    },
    {
      name: "Enterprise Plan",
      description: "Tailored for large organizations",
      features: [
        "Custom integrations",
        "Dedicated support",
        "Unlimited traces",
        "Custom reporting"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id='pricing'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Flexible Plans to Fit Your Needs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 text-center text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;