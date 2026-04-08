import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Trinex Tech Solutions provide?",
      answer: "We provide full-stack web development, mobile app development (iOS & Android), digital marketing, SEO services, and custom software engineering for businesses of all sizes."
    },
    {
      question: "How can I contact Trinex Tech Solutions?",
      answer: "You can reach us via our contact form on the website, email us at info@trinextech.com, or call us at +91 85001 95791."
    },
    {
      question: "Do you offer SEO and digital marketing services?",
      answer: "Yes, we offer comprehensive SEO, PPC (Pay-Per-Click), social media marketing, and complete GEO (AI search optimization) solutions to help your business scale."
    },
    {
      question: "How long does it take to build a website or mobile app?",
      answer: "Project timelines vary based on complexity. Typically, a custom website takes 2–6 weeks, while a complex mobile app can take 6–12 weeks from strategy to deployment."
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Absolutely. We offer ongoing maintenance, security updates, and performance monitoring to ensure your digital products run smoothly long after launch."
    }
  ];

  // JSON-LD for Search Engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-12 bg-background" aria-labelledby="faq-heading">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 p-12">
        <div className="mb-16">
          <h2 id="faq-heading" className="text-4xl font-black uppercase tracking-tight">Frequently Asked Questions</h2>
          <p className="text-secondary mt-4 max-w-lg">
            Find answers to common questions about our <strong className="text-black">IT solutions</strong> and delivery process.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border group hover:border-black transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex justify-between items-center text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-xl font-bold tracking-tight">{faq.question}</span>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-8 pb-8"
                >
                  <p className="text-secondary leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
