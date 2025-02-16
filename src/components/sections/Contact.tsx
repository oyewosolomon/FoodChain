import React, { useState } from 'react';
import { 
  Factory, Store, Shield, Users, Scan, 
  CheckCircle, Zap, BarChart, Link, AlertCircle,
  Phone, Mail, MapPin
} from 'lucide-react';


const Contact = () => {
  return (
    <section className="py-20 bg-white" id='contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Let's Build a Safer Food Supply Chain Together
            </h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-green-600 mr-4" />
                <span className="text-gray-600">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-green-600 mr-4" />
                <span className="text-gray-600">info@foodchainverify.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-green-600 mr-4" />
                <span className="text-gray-600">123 Food Safety Ave, Suite 456, Springfield, USA</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
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
      </div>
    </section>
  );
};

export default Contact;
