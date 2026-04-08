import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    {
      logo: '/Civiclogo.webp',
      logoAlt: 'Civic Technologies logo'
    },
    {
      logo: '/DanduLogo.svg',
      logoAlt: 'Dandu Interiors logo'
    }
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-16">
           <div>
             <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">Our Clients</h2>
             <p className="text-secondary mt-4 whitespace-nowrap">
                We are proud to work with clients across different industries, helping them achieve their digital transformation goals.
             </p>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-14">
          {clients.map((client, index) => (
            <motion.div
              key={client.logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group transition-all duration-300 flex items-center justify-center"
            >
              <div className="w-44 h-28 md:w-56 md:h-32 transition-all duration-500 flex items-center justify-center bg-white px-4">
                <img
                  src={client.logo}
                  alt={client.logoAlt}
                  className="max-w-full max-h-16 md:max-h-20 object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs font-medium text-secondary text-center whitespace-nowrap mt-12">
          "Building trust through successful delivery and long-term partnerships. We focus on outcome-driven engineering for global enterprises."
        </p>
      </div>
    </section>
  );
};

export default Clients;
