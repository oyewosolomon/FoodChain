import React, { useState, FormEvent, ChangeEvent } from 'react';
import {
  Factory, 
  Shield, 
  Users, 
  Scan,
  CheckCircle, 
  Zap, 
  BarChart, 
  Link, 
  AlertCircle,
  LucideIcon
} from 'lucide-react';

// Define interface for form data
interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

// Define interface for feature
interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const features: FeatureItem[] = [
    {
      icon: Shield,
      title: "Enhanced Food Safety",
      description: "Advanced traceability and verification technologies"
    },
    {
      icon: Scan,
      title: "Real-Time Tracking",
      description: "End-to-end supply chain monitoring"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous standards and compliance checks"
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Quick identification and resolution of issues"
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Features Sidebar */}
        <div className="w-full md:w-1/3 bg-green-600 text-white p-8">
          <h2 className="text-2xl font-bold mb-6">Why Choose FoodChain Verify?</h2>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center mb-6">
              <feature.icon className="w-10 h-10 mr-4" />
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Let's Build a Safer Food Supply Chain Together
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={4}
                placeholder="Tell us about your food supply chain needs"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;