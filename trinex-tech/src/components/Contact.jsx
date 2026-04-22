import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white overflow-hidden" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <header>
              <h2 id="contact-heading" className="text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none mb-8">
                Request a Free <br/>IT Solutions <br/><span className="text-[#FFC533]">Consultation</span>
              </h2>
            </header>
            <p className="text-lg text-secondary leading-relaxed max-w-md mb-12">
              Ready to scale your business? Contact <strong className="text-black">Trinex Tech Solutions</strong> for expert <strong className="text-black">web development</strong>, <strong className="text-black">mobile apps</strong>, and <strong className="text-black">SEO services</strong>.
            </p>

            <div className="flex flex-col gap-8" role="list">
               <div className="flex items-center gap-6 group" role="listitem">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all" aria-hidden="true">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary">Email Us</h3>
                    <a href="mailto:info@trinextech.com" className="text-xl font-black hover:underline underline-offset-4">info@trinextech.com</a>
                  </div>
               </div>

               <div className="flex items-center gap-6 group" role="listitem">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all" aria-hidden="true">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary">Call Us</h3>
                    <a href="tel:+918500195791" className="text-xl font-black hover:underline underline-offset-4">+91 85001 95791</a>
                  </div>
               </div>

               <div className="flex items-center gap-6 group" role="listitem">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all" aria-hidden="true">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary">Location</h3>
                    <address className="text-xl font-black not-italic">India / Global</address>
                  </div>
               </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 border border-border group hover:border-black transition-all duration-500 flex flex-col gap-10"
          >
            <div className="flex flex-col gap-2">
               <h3 className="text-2xl font-black uppercase tracking-tight">Send an Inquiry</h3>
               <div className="w-12 h-1 bg-black"></div>
            </div>

            <form className="flex flex-col gap-12" aria-label="Contact form">
               <div className="relative">
                  <input type="text" placeholder="Your Name" className="underline-input text-base" aria-label="Full Name" required />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-focus-within:w-full"></span>
               </div>
               <div className="relative">
                  <input type="email" placeholder="Your Email" className="underline-input text-base" aria-label="Email Address" required />
               </div>
               <div className="relative">
                  <textarea placeholder="Your Message" rows="4" className="underline-input text-base resize-none" aria-label="Project Details or Message" required></textarea>
               </div>
               <button type="submit" className="btn-primary flex items-center justify-center gap-3 w-full group">
                 SEND INQUIRY
                 <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
