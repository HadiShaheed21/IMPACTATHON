"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Accordion from "@/components/ui/Accordion";
import { faqData } from "@/data/mockData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-light"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-neutral-dark mb-12"
        >
          Common Questions
        </motion.h2>

        <div className="bg-white rounded-xl shadow-sm p-6">
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
