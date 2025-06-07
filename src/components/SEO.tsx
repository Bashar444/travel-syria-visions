
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
  description = "Professional university admission services, student visa processing, Hajj & Umrah packages, and Saudi scholarships for Syrian students. Expert educational consulting with 95% success rate. Transparent pricing from $1099. Study abroad in Italy, India, Romania.",
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
    "priceRange": "$1099",
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
            "description": "Complete guidance for university applications worldwide"
          },
          "price": "1099",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Student Visa Processing",
            "description": "Professional visa application support and tracking"
          },
          "price": "1099",
          "priceCurrency": "USD"
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
          "text": "We offer comprehensive services including university admissions in Italy, India, Romania, student visa processing, Hajj & Umrah travel services, and Saudi scholarship programs with a 95% success rate."
        }
      },
      {
        "@type": "Question",
        "name": "What are your educational service fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our comprehensive service package costs $1,099 USD, which includes all university admission services, visa processing assistance, and educational consultation with no hidden fees."
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
        "name": "Services",
        "item": `${url}/services`
      }
    ]
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
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="SY" />
      <meta name="geo.placename" content="Syria" />
      <meta name="subject" content="Educational Services" />
      <meta name="rating" content="General" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
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
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/lovable-uploads/266da83c-19ae-41d9-b291-60b8b0b9136a.png" as="image" />
      
      {/* Additional link tags for SEO */}
      <link rel="alternate" hrefLang="ar" href={url} />
      <link rel="alternate" hrefLang="en" href={`${url}/en`} />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEO;
