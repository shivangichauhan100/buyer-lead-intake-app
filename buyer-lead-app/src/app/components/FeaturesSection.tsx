'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Matching',
    description: 'Our advanced AI analyzes your preferences to find properties that match your exact needs and lifestyle.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '📊',
    title: 'Market Analytics',
    description: 'Get real-time market insights, price trends, and neighborhood data to make informed decisions.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: '🔍',
    title: 'Virtual Tours',
    description: 'Explore properties from anywhere with our immersive 360° virtual tours and detailed floor plans.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '💰',
    title: 'Smart Financing',
    description: 'Connect with trusted lenders and get pre-approved for the best mortgage rates in minutes.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Access your property search, schedule viewings, and manage your journey on any device.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: '🛡️',
    title: 'Secure & Private',
    description: 'Your data is protected with bank-level security and we never share your information.',
    color: 'from-red-500 to-pink-500'
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of real estate with cutting-edge technology and personalized service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

                <motion.div
                  className="mt-6 flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Find Your Dream Home?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and discover why we're the #1 choice for property buyers
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
