export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: "XORA",

    url: "https://xora.id",

    logo: "https://xora.id/logo.png",

    image: "https://xora.id/og-image.jpg",

    description:
      "XORA adalah Digital Agency Indonesia yang menyediakan jasa pembuatan website premium, landing page, company profile, dashboard, dan web application.",

    areaServed: "Indonesia",

    priceRange: "$$",

    telephone: "+6282130300614",

    email: "hello@xora.id",

    sameAs: [
      "https://instagram.com/xora.id",
      "https://facebook.com/xora.id",
      "https://linkedin.com/company/xora",
    ],

    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Bandung",
    },

    founder: {
      "@type": "Person",
      name: "Dicky Suhardiman",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}