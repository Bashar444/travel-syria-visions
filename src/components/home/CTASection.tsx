import React from 'react';
import { Button } from '@/components/ui/button';
import { DollarSign } from 'lucide-react';
const CTASection = () => {
  return <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <DollarSign className="w-5 h-5 text-blue-200" />
          <span className="text-sm font-medium">Join 500+ Successful Students</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">...Ready to Start Your Educational Journey</h2>
        <p className="text-xl mb-8 opacity-90">
          Professional guidance with transparent pricing and proven results
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-12 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1" onClick={() => window.location.href = '/contact'}>
          Start Application
        </Button>
      </div>
    </section>;
};
export default CTASection;