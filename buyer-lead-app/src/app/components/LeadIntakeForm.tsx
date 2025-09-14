'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  budget: string;
  propertyType: string;
  location: string;
  timeline: string;
  financing: string;
  additionalInfo: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function LeadIntakeForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    propertyType: '',
    location: '',
    timeline: '',
    financing: '',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.budget) {
      newErrors.budget = 'Budget range is required';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Property type is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Preferred location is required';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Timeline is required';
    }

    if (!formData.financing) {
      newErrors.financing = 'Financing status is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store form data in localStorage for demo purposes
      localStorage.setItem('leadData', JSON.stringify(formData));
      
      // Redirect to success page
      router.push('/success');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your property preferences and we'll match you with the perfect home
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100"
      >

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100"
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold mr-4">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Property Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold mr-4">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Property Preferences</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Budget Range *
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.budget ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select budget range</option>
                <option value="under-200k">Under $200,000</option>
                <option value="200k-300k">$200,000 - $300,000</option>
                <option value="300k-400k">$300,000 - $400,000</option>
                <option value="400k-500k">$400,000 - $500,000</option>
                <option value="500k-750k">$500,000 - $750,000</option>
                <option value="750k-1m">$750,000 - $1,000,000</option>
                <option value="over-1m">Over $1,000,000</option>
              </select>
              {errors.budget && (
                <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
              )}
            </div>

            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                Property Type *
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.propertyType ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select property type</option>
                <option value="single-family">Single Family Home</option>
                <option value="condo">Condominium</option>
                <option value="townhouse">Townhouse</option>
                <option value="multi-family">Multi-Family</option>
                <option value="land">Land/Lot</option>
                <option value="commercial">Commercial</option>
              </select>
              {errors.propertyType && (
                <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>
              )}
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.location ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="City, neighborhood, or area"
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Timeline and Financing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100"
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold mr-4">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Timeline & Financing</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                When are you looking to buy? *
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.timeline ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select timeline</option>
                <option value="immediately">Immediately</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-12-months">6-12 months</option>
                <option value="over-12-months">Over 12 months</option>
                <option value="just-looking">Just looking</option>
              </select>
              {errors.timeline && (
                <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>
              )}
            </div>

            <div>
              <label htmlFor="financing" className="block text-sm font-medium text-gray-700 mb-1">
                Financing Status *
              </label>
              <select
                id="financing"
                name="financing"
                value={formData.financing}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.financing ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select financing status</option>
                <option value="pre-approved">Pre-approved</option>
                <option value="pre-qualified">Pre-qualified</option>
                <option value="need-pre-approval">Need pre-approval</option>
                <option value="cash-buyer">Cash buyer</option>
                <option value="not-sure">Not sure</option>
              </select>
              {errors.financing && (
                <p className="text-red-500 text-sm mt-1">{errors.financing}</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Additional Information */}
        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us more about your property needs, must-haves, or any specific requirements..."
          />
        </div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-12 py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300 transform ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 shadow-lg hover:shadow-xl'
            }`}
            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Submitting...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span>Find My Dream Home</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </motion.button>
          
          <p className="text-sm text-gray-500 mt-4">
            🔒 Your information is secure and will never be shared
          </p>
        </motion.div>
      </form>
      </motion.div>
    </div>
  );
}
