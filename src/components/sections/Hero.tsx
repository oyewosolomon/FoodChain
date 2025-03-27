import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, LineChart, Shield, Clock, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  const features = [
    { icon: LineChart, title: 'Real-Time Tracking', description: 'Monitor products at every stage of the supply chain' },
    { icon: Shield, title: 'Regulatory Compliance', description: 'Stay ahead of FDA and global food safety regulations' },
    { icon: Clock, title: 'Recall Management', description: 'Slash response times and protect your brand reputation' },
    { icon: BarChart3, title: 'Data-Driven Insights', description: 'Make smarter decisions with actionable analytics' }
  ];

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 mt-10">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From Farm to Retail <br />Trust Every Step of Your Food's Journey
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              FoodChain Verify is the leading food traceability platform, empowering over 1,000 food producers to ensure compliance, enhance transparency, and reduce recall response times by 80%
            </motion.p>
            
            {/* CTA Button with Enhanced Hover Effects */}
            <motion.button 
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Discover How FoodChain Verify Can Transform Your Supply Chain
              <motion.span 
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ChevronRight className="ml-2 w-5 h-5" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 600 500" 
              className="w-full h-auto"
            >
              {/* Background Elements */}
              <circle cx="300" cy="250" r="220" fill="#e6f3e6" />
              
              {/* Supply Chain Path */}
              <motion.path 
                d="M100,250 Q300,100 500,250" 
                fill="none" 
                stroke="#4ade80" 
                strokeWidth="4" 
                strokeDasharray="10,10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
              
              {/* Farm Icon */}
              <g transform="translate(50, 200)">
                <rect x="0" y="0" width="80" height="80" rx="10" fill="#86efac" />
                <path 
                  d="M40,20 L60,40 L20,40 Z" 
                  fill="#166534" 
                />
                <rect x="30" y="40" width="20" height="30" fill="#166534" />
              </g>
              
              {/* Transport Icon with Animation */}
              <motion.g 
                transform="translate(260, 100)"
                animate={{
                  x: [260, 280, 260],
                  y: [100, 110, 100],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <rect x="0" y="0" width="80" height="80" rx="10" fill="#7dd3fc" />
                <path 
                  d="M20,50 L60,50 A10,10 0 0 0 60,30 L20,30 Z" 
                  fill="#0369a1" 
                />
                <circle cx="25" cy="55" r="8" fill="#0369a1" />
                <circle cx="55" cy="55" r="8" fill="#0369a1" />
              </motion.g>
              
              {/* Retail Icon with Animation */}
              <motion.g 
                transform="translate(470, 200)"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <rect x="0" y="0" width="80" height="80" rx="10" fill="#fca5a5" />
                <rect x="20" y="20" width="40" height="40" fill="#991b1b" />
                <rect x="25" y="25" width="10" height="10" fill="white" />
                <rect x="45" y="25" width="10" height="10" fill="white" />
              </motion.g>
              
              {/* Tracking Line Dots with Pulsing Animation */}
              <motion.circle 
                cx="140" 
                cy="225" 
                r="8" 
                fill="#4ade80"
                animate={{
                  scale: [1, 1.5, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0
                  }
                }}
              />
              <motion.circle 
                cx="300" 
                cy="180" 
                r="8" 
                fill="#4ade80"
                animate={{
                  scale: [1, 1.5, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
              />
              <motion.circle 
                cx="460" 
                cy="225" 
                r="8" 
                fill="#4ade80"
                animate={{
                  scale: [1, 1.5, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Features grid with Staggered Entrance */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 10,
                delay: index * 0.1
              }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              whileHover="hover"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="p-3 bg-green-100 rounded-full mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 10,
                    delay: index * 0.1
                  }}
                >
                  <feature.icon className="w-6 h-6 text-green-600" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;