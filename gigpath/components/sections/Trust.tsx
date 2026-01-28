"use client";

import { motion } from "framer-motion";

export default function Trust() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-neutral-dark mb-8"
        >
          Built with Gig Workers, Supervisors, and Hiring Partners
        </motion.h3>

        {/* Avatar circles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-2 mb-8 flex-wrap"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent border-2 border-white shadow-sm"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </motion.div>

        {/* Trust elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 text-center"
        >
          <div>
            <p className="text-2xl font-bold text-primary mb-2">500+</p>
            <p className="text-gray-600">Gig workers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-secondary mb-2">20+</p>
            <p className="text-gray-600">Hiring partners</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-success mb-2">50+</p>
            <p className="text-gray-600">Supervisors</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
