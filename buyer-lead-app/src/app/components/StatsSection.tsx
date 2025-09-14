'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  {
    number: '10,000+',
    label: 'Happy Customers',
    icon: '👥',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '$2.5B+',
    label: 'Properties Sold',
    icon: '🏠',
    color: 'from-green-500 to-emerald-500'
  },
  {
    number: '50+',
    label: 'Cities Covered',
    icon: '🌍',
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: '4.9/5',
    label: 'Customer Rating',
    icon: '⭐',
    color: 'from-yellow-500 to-orange-500'
  }
];

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative">
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Number Animation */}
                <motion.div
                  className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.number.includes('+') ? (
                    <>
                      <AnimatedCounter end={parseInt(stat.number.replace(/[^\d]/g, ''))} />
                      <span className="text-3xl">+</span>
                    </>
                  ) : stat.number.includes('$') ? (
                    <>
                      <span className="text-3xl">$</span>
                      <AnimatedCounter end={parseInt(stat.number.replace(/[^\d]/g, ''))} />
                      <span className="text-3xl">B+</span>
                    </>
                  ) : stat.number.includes('/') ? (
                    stat.number
                  ) : (
                    <AnimatedCounter end={parseInt(stat.number)} />
                  )}
                </motion.div>
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-gray-200"
        >
          <div className="text-center">
            <p className="text-gray-600 mb-8">Trusted by leading real estate companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['RealEstate Pro', 'PropertyMax', 'HomeFinder', 'LuxuryHomes', 'DreamProperties'].map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
