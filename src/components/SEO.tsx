
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "Travel.Ltd - University Admissions, Hajj Services & Educational Consulting for Syrian Students",
  description = "Professional university admission services, student visa processing, Hajj & Umrah packages, and Saudi scholarships for Syrian students. Expert educational consulting with 95% success rate. For pricing details contact us on WhatsApp at +963 985 453 247. Study abroad in Italy, India, Romania.",
  keywords = "university admissions Syria, Syrian students study abroad, student visa processing Damascus, Hajj services Syria, Umrah packages, Saudi scholarships Syrian students, educational consulting Syria, study in Italy India Romania, Syrian education services, university applications Syria, study abroad guidance, student visa help Syria",
  image = "https://syriantravel.in/lovable-uploads/d7939d67-66f6-4e0d-9ecb-b43d2e214eda.png",
  url = "https://syriantravel.in",
  type = "website"
}: SEOProps) => {
  const siteTitle = "Travel.Ltd";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Travel.Ltd",
    "description": description,
    "url": url,
    "logo": `${url}/lovable-uploads/266da83c-19ae-41d9-b291-60b8b0b9136a.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+963985453247",
      "contactType": "customer service",
      "email": "alhusseinamjad904@gmail.com",
      "availableLanguage": ["Arabic", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Syria"
    },
    "serviceType": [
      "University Admissions Consulting",
      "Educational Consulting", 
      "Student Visa Services",
      "Hajj and Umrah Travel Services",
      "Scholarship Application Services"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Syria"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Educational Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "University Admission Services",
            "description": "Complete guidance for university applications worldwide with 95% success rate"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Student Visa Processing",
            "description": "Professional visa application support and tracking for Syrian students"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What educational services do you provide for Syrian students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive services including university admissions in Italy, India, Romania, student visa processing, Hajj & Umrah travel services, and Saudi scholarship programs with a 95% success rate specifically designed for Syrian students seeking quality education abroad."
        }
      },
      {
        "@type": "Question",
        "name": "How can I learn about your educational service fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a tailored quote, please contact our team directly on WhatsApp at +963 985 453 247. We evaluate each case individually and provide transparent pricing once we understand your needs and chosen services."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the university admission and visa process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "University admission processing typically takes 4-8 weeks depending on the university and program, while visa processing takes an additional 2-4 weeks. We provide step-by-step tracking and constant updates throughout the process."
        }
      },
      {
        "@type": "Question",
        "name": "Do you guarantee university admission acceptance for Syrian students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We maintain a 95% success rate in securing university admissions for Syrian students. While we cannot guarantee 100% acceptance due to university policies, our extensive experience and partnerships significantly increase your chances of successful admission."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Educational Services",
        "item": `${url}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "University Admissions",
        "item": `${url}/universities`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Educational Consulting and University Admissions",
    "provider": {
      "@type": "Organization",
      "name": "Travel.Ltd"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Syria"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "University Admission Services for Syrian Students",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "University Admissions in Italy",
            "description": "Complete university application assistance for Syrian students seeking education in Italian universities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "University Admissions in India",
            "description": "Professional guidance for Syrian students applying to Indian universities and educational institutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "University Admissions in Romania", 
            "description": "Expert assistance for Syrian students seeking admission to Romanian universities and colleges"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="Arabic" />
      <meta name="author" content="Travel.Ltd" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="subject" content="Educational Services for Syrian Students" />
      <meta name="rating" content="General" />
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Google AdSense Meta Tags */}
      <meta name="google-adsense-account" content="ca-pub-5225376190298570" />
      <meta name="google-site-verification" content="googlea9821ecb17b703f8" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Travel.Ltd" />
      <meta property="og:locale" content="ar_SY" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@TravelLtdSyria" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="SY" />
      <meta name="geo.placename" content="Syria" />
      <meta name="geo.position" content="34.802075;38.996815" />
      <meta name="ICBM" content="34.802075, 38.996815" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/lovable-uploads/266da83c-19ae-41d9-b291-60b8b0b9136a.png" as="image" />
      <link rel="preload" href="/lovable-uploads/fe6a4f68-f143-4f67-9542-a8e94d68c617.png" as="image" />
      
      {/* Additional link tags for SEO */}
      <link rel="alternate" hrefLang="ar" href={url} />
      <link rel="alternate" hrefLang="en" href={`${url}/en`} />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      
      {/* Additional meta tags for better crawling */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    </Helmet>
  );
};

export default SEO;
