
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
  title = "Travel for University Admissions - Your Gateway to Global Education",
  description = "Expert university admission services for Syria students. Get into top universities worldwide with our comprehensive guidance and support.",
  keywords = "Syria travel, university admissions, study abroad, Syria students, education consultancy, international universities",
  image = "/og-image.jpg",
  url = "https://travel-ltd.com",
  type = "website"
}: SEOProps) => {
  const siteTitle = "Travel.Ltd";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  const schemaData = {
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
    "serviceType": ["University Admissions", "Educational Consulting", "Student Visa Services"],
    "areaServed": {
      "@type": "Country",
      "name": "Syria"
    }
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Arabic" />
      <meta name="author" content="Travel.Ltd" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Travel.Ltd" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/lovable-uploads/266da83c-19ae-41d9-b291-60b8b0b9136a.png" as="image" />
    </Helmet>
  );
};

export default SEO;
