'use client';

import { motion } from "framer-motion";
import Contact from "@/components/home/Contact";



export default function ContactPage() {
  return (
    <div className="bg-gradient-to-r from-momra-maroon to-momra-amber min-h-screen flex flex-col text-white">
     

      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-grow pt-20"
      >
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-0">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-amber-400 "
              style={{
                textShadow: `
      1px 1px 0 black,
      -1px 1px 0 black,
      1px -1px 0 black,
      -1px -1px 0 black
    `
              }}
            >
              Contact Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Ready to elevate your brand? Get in touch with our team to discuss how we can help you 
              achieve your marketing goals and drive exceptional results for your business.
            </motion.p>
          </div>
          <Contact />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            
          </motion.div>
          <div className="mt-10">
         
          </div>
        </div>
        
      </motion.main>

     
    </div>
  );
}
