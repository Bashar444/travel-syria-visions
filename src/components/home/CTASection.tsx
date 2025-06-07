
import React from 'react';
import { Button } from '@/components/ui/button';
import { DollarSign } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white" role="complementary" aria-label="Call to action for university applications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <DollarSign className="w-5 h-5 text-blue-200" aria-hidden="true" />
          <span className="text-sm font-medium">
            <strong>Join 500+ Successful Syrian Students</strong>
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-4">
          <strong>Ready to Start Your Educational Journey Abroad?</strong>
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Professional <strong>university admission guidance</strong> with 
          <strong> transparent pricing</strong> starting at <strong>$1099</strong> and 
          <strong> proven results</strong> with <strong>95% success rate</strong> for Syrian students seeking quality education abroad
        </p>
        <Button 
          size="lg" 
          className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-12 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
          onClick={() => window.location.href = '/contact'}
          aria-label="Start your university application process today with our expert consultation and professional guidance for Syrian students"
        >
          <strong>Start Your University Application Today</strong>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
