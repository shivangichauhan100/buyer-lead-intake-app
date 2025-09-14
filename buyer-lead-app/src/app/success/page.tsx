'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface LeadData {
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

export default function SuccessPage() {
  const [leadData, setLeadData] = useState<LeadData | null>(null);

  useEffect(() => {
    // Retrieve lead data from localStorage
    const storedData = localStorage.getItem('leadData');
    if (storedData) {
      setLeadData(JSON.parse(storedData));
    }
  }, []);

  const formatValue = (key: string, value: string): string => {
    const formatMap: { [key: string]: { [key: string]: string } } = {
      budget: {
        'under-200k': 'Under $200,000',
        '200k-300k': '$200,000 - $300,000',
        '300k-400k': '$300,000 - $400,000',
        '400k-500k': '$400,000 - $500,000',
        '500k-750k': '$500,000 - $750,000',
        '750k-1m': '$750,000 - $1,000,000',
        'over-1m': 'Over $1,000,000',
      },
      propertyType: {
        'single-family': 'Single Family Home',
        'condo': 'Condominium',
        'townhouse': 'Townhouse',
        'multi-family': 'Multi-Family',
        'land': 'Land/Lot',
        'commercial': 'Commercial',
      },
      timeline: {
        'immediately': 'Immediately',
        '1-3-months': '1-3 months',
        '3-6-months': '3-6 months',
        '6-12-months': '6-12 months',
        'over-12-months': 'Over 12 months',
        'just-looking': 'Just looking',
      },
      financing: {
        'pre-approved': 'Pre-approved',
        'pre-qualified': 'Pre-qualified',
        'need-pre-approval': 'Need pre-approval',
        'cash-buyer': 'Cash buyer',
        'not-sure': 'Not sure',
      },
    };

    return formatMap[key]?.[value] || value;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Thank You for Your Submission!
          </h1>
          <p className="text-lg text-gray-600">
            We've received your information and will contact you soon.
          </p>
        </div>

        {/* Lead Information Summary */}
        {leadData && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Your Information Summary
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="text-sm text-gray-900">
                      {leadData.firstName} {leadData.lastName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="text-sm text-gray-900">{leadData.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="text-sm text-gray-900">{leadData.phone}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Property Preferences</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Budget Range</dt>
                    <dd className="text-sm text-gray-900">
                      {formatValue('budget', leadData.budget)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Property Type</dt>
                    <dd className="text-sm text-gray-900">
                      {formatValue('propertyType', leadData.propertyType)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Preferred Location</dt>
                    <dd className="text-sm text-gray-900">{leadData.location}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Timeline & Financing</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Timeline</dt>
                    <dd className="text-sm text-gray-900">
                      {formatValue('timeline', leadData.timeline)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Financing Status</dt>
                    <dd className="text-sm text-gray-900">
                      {formatValue('financing', leadData.financing)}
                    </dd>
                  </div>
                </dl>
              </div>

              {leadData.additionalInfo && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Information</h3>
                  <p className="text-sm text-gray-900">{leadData.additionalInfo}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">What happens next?</h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
              <span>Our team will review your information within 24 hours</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
              <span>We'll contact you to discuss your property needs in detail</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
              <span>We'll start searching for properties that match your criteria</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
              <span>We'll schedule property viewings at your convenience</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Submit Another Lead
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Questions? Contact us at <a href="mailto:leads@realestate.com" className="text-blue-600 hover:text-blue-500">leads@realestate.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

