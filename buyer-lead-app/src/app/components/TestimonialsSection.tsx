'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Shivangi chauahn',
    role: 'Software Engineer',
    location: 'Delhi, CA',
    image: '👩‍💼',
    rating: 5,
    text: 'The AI matching system found me the perfect home in just 2 weeks! The virtual tours saved me so much time, and the market insights helped me negotiate a great deal.',
    property: '2BHK Apartment - $850K'
  },
  {
    name: 'Nisha',
    role: 'Marketing Director',
    location: 'Uttar Pradesh, TX',
    image: '👨‍💼',
    rating: 5,
    text: 'As a first-time buyer, I was overwhelmed. This platform guided me through every step and connected me with the best mortgage rates. Highly recommended!',
    property: '3BHK Villa - $650K'
  },
  {
    name: 'Manpreet',
    role: 'Teacher',
    location: 'Noida, FL',
    image: '👩‍🏫',
    rating: 5,
    text: 'The mobile app is incredible! I could search for properties during my lunch break and schedule viewings instantly. Found my dream home in 3 weeks.',
    property: '1BHK Condo - $420K'
  },
  {
    name: 'Isha',
    role: 'Business Owner',
    location: 'Uttam Nagar, Delhi',
    image: '👨‍💼',
    rating: 5,
    text: 'The market analytics helped me understand the neighborhood trends. I made an informed decision and got a property that appreciated 15% in the first year.',
    property: '4BHK House - $1.2M'
  },
  {
    name: 'Vivek',
    role: 'Doctor',
    location: 'Delhi, Rohini',
    image: '👩‍⚕️',
    rating: 5,
    text: 'The financing options were amazing. I got pre-approved in minutes and the process was so smooth. The team was always available to help.',
    property: '3BHK Townhouse - $750K'
  },
  {
    name: 'Divyanshi',
    role: 'Consultant',
    location: 'Rohini, delhi',
    image: '👨‍💼',
    rating: 5,
    text: 'I was skeptical about online property buying, but the virtual tours were so detailed that I felt confident making an offer sight unseen.',
    property: '2BHK Apartment - $580K'
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from real customers who found their dream homes
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonials[currentIndex].image}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
            </div>
            
            <blockquote className="text-lg lg:text-xl text-gray-700 italic mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div className="bg-white/50 px-4 py-2 rounded-full">
                <span className="text-sm font-semibold text-gray-700">
                  {testimonials[currentIndex].property}
                </span>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center hover:bg-white/70 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center hover:bg-white/70 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-lg mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                "{testimonial.text}"
              </p>
              
              <div className="mt-4 text-xs text-gray-500 font-medium">
                {testimonial.property}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8">Trusted by leading companies and organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Tesla'].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
