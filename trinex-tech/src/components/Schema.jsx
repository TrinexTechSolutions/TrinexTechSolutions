import React from 'react';

const Schema = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trinex Tech Solutions",
    "url": "https://www.trinextechsolutions.site/",
    "logo": "https://www.trinextechsolutions.site/images/logo.png",
    "image": "https://www.trinextechsolutions.site/images/og-image.jpg",
    "description": "Premium IT Solutions provider specializing in Web Development, Mobile App Development, and SEO Services.",
    "telephone": "+918500195791",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Guntur",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://github.com/TrinexTechSolutions",
      "https://wa.me/918500195791"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.trinextechsolutions.site/#services",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Trinex Tech Solutions"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Digital Marketing"
          }
        }
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </>
  );
};

export default Schema;
