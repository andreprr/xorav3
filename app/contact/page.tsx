import Hero from "@/sections/contact/Hero";
import ContactForm from "@/sections/contact/ContactForm";
import ContactInfo from "@/sections/contact/ContactInfo";
import FAQ from "@/sections/contact/FAQ";
import CTA from "@/sections/contact/CTA";

export const metadata = {
  title: "Contact",

  description:
    "Hubungi XORA untuk konsultasi website gratis.",

  alternates: {
    canonical: "https://xora.id/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactForm />
      <ContactInfo />
      <FAQ />
      <CTA />
    </>
  );
}