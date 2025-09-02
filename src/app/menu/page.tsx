"use client";

import { motion } from "framer-motion";
import MenuPoster from "@/components/home/MenuPoster";


const Menu = () => {
  return (
    <div className="min-h-screen bg-card">
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              4-Week Menu Rotation
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Carefully crafted weekly menus featuring authentic Pakistani
              cuisine. Each week brings new flavors while maintaining the
              comfort of home-cooked meals.
            </p>
          </motion.div>

          {/* MenuPoster Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MenuPoster />
          </motion.div>

         
        </div>
      </section>
    </div>
  );
};

export default Menu;
