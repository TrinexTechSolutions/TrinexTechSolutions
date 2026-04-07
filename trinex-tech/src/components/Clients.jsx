import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { name: 'Civic Technologies', type: 'Software Solutions' },
    { name: 'Dandu Interiors', type: 'Design & Architecture' }
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-16">
           <div>
             <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">Our Clients</h2>
             <p className="text-secondary mt-4 max-w-lg">
                We are proud to work with clients across different industries, helping them achieve their digital transformation goals.
             </p>
           </div>
           <div className="hidden lg:block border-l border-border pl-12">
              <p className="text-xs font-medium text-secondary leading-relaxed">
                 "Building trust through successful delivery and long-term partnerships. We focus on outcome-driven engineering for global enterprises."
              </p>
           </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-border">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-12 border-b border-r border-border hover:bg-black group transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center aspect-square"
            >
              <div className="w-16 h-16 border-2 border-border group-hover:border-white/20 group-hover:rotate-45 transition-all duration-500 flex items-center justify-center">
                 <span className="text-xl font-black group-hover:-rotate-45 group-hover:text-white transition-all">
                    {client.name.charAt(0)}
                 </span>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-black group-hover:text-white transition-all">
                  {client.name}
                </h4>
                <p className="text-[10px] font-medium text-secondary group-hover:text-white/40 mt-1 uppercase tracking-widest">
                  {client.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
