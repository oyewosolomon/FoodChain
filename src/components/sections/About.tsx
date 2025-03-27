import React, { useEffect, useState, useRef } from 'react';
import { Users, Target, History, ChevronRight } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AboutUs: React.FC = () => {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Scroll trigger animation
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Mouse move gradient effect
  useEffect(() => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
      const missionElement = document.querySelector('.mission-gradient');
      if (missionElement instanceof HTMLElement) {
        const { left, top, width, height } = missionElement.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setGradientPosition({ x, y });
      }
    };

    const missionElement = document.querySelector('.mission-gradient');
    if (missionElement) {
      missionElement.addEventListener('mousemove', handleMouseMove as EventListener);
    }

    return () => {
      if (missionElement) {
        missionElement.removeEventListener('mousemove', handleMouseMove as EventListener);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const gradientVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.div 
      className="bg-white py-20" 
      id='about'
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Building a Transparent and Trustworthy Food Supply Chain
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-green-500 mx-auto rounded-full"
            variants={itemVariants}
          />
        </motion.div>

        {/* Mission statement */}
        <motion.div 
          className="mission-gradient p-8 rounded-2xl mb-16 transition-all duration-500"
          style={{
            background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(209, 250, 229, 0.8), rgba(167, 243, 208, 0.9), rgba(16, 185, 129, 0.7))`,
          }}
          variants={gradientVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            variants={itemVariants}
          >
            <Target className="w-10 h-10 text-green-700" />
          </motion.div>
          <motion.p 
            className="text-xl text-center text-gray-800 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            At FoodChain Verify, our mission is to revolutionize food traceability by providing a seamless, end-to-end platform that ensures safety, compliance, and transparency for food producers, retailers, and consumers alike.
          </motion.p>
        </motion.div>

        {/* Story and Team sections */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
        >
          {/* Our Story */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div className="flex items-center mb-6" variants={itemVariants}>
              <History className="w-8 h-8 text-green-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
            </motion.div>
            <motion.p className="text-gray-600 leading-relaxed" variants={itemVariants}>
              Founded by industry experts passionate about food safety, FoodChain Verify was born out of the need to address the growing complexities of global food supply chains. Today, we serve over 1,000 food producers, helping them navigate regulatory challenges and build consumer trust.
            </motion.p>
          </motion.div>

          {/* Team */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div className="flex items-center mb-6" variants={itemVariants}>
              <Users className="w-8 h-8 text-green-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Our Team</h3>
            </motion.div>
            <motion.p className="text-gray-600 leading-relaxed" variants={itemVariants}>
              Meet the team of food safety specialists, technologists, and supply chain experts dedicated to making your food supply chain safer and more efficient.
            </motion.p>
            <motion.button 
              className="mt-6 inline-flex items-center px-6 py-3 text-sm font-medium text-green-600 bg-green-100 rounded-full hover:bg-green-200 transition-colors duration-200"
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              Meet Our Team
              <ChevronRight className="ml-2 w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;