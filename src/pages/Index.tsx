
import React from 'react';
import SEO from '@/components/SEO';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import EducationShowcase from '@/components/home/EducationShowcase';
import CTASection from '@/components/home/CTASection';
import FAQ from '@/components/FAQ';

const Index = () => {
  return (
    <>
      <SEO 
        title="Travel.Ltd - University Admissions & Educational Services for Syrian Students"
        description="Professional university admission services, visa processing, Hajj packages, and Saudi scholarships for Syrian students. Expert guidance for studying abroad with 95% success rate."
        keywords="university admissions Syria, study abroad, visa processing, Hajj services, Saudi scholarships, Syrian students education, study in Italy, study in India, study in Romania"
      />
      
      <div className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <EducationShowcase />
        
        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQ />
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
};

export default Index;
