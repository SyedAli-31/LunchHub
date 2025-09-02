"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-red-50 via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="/fresh.png"
            alt="LunchHub Kitchen"
            width={600}
            height={400}
            className="rounded-3xl shadow-2xl object-cover w-full h-auto"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-momra-maroon to-momra-amber bg-clip-text text-transparent">
            About LunchHub
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            At <span className="font-semibold text-slate-800">LunchHub</span>,
            we believe great food brings people together. With a passion for authentic
            flavors and fresh ingredients, we specialize in providing high-quality
            meals for offices, events, and special occasions delivered with care and consistency.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-momra-maroon mb-2">Our Vision</h3>
              <p className="text-slate-600 text-sm">
                To make premium, hygienic, and delicious food accessible and affordable for everyone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-momra-amber mb-2">Our Promise</h3>
              <p className="text-slate-600 text-sm">
                Consistency, quality, and freshness in every bite, because your trust means everything.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
