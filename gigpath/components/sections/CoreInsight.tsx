"use client";

import { motion } from "framer-motion";
import { DollarSign, GraduationCap } from "lucide-react";
import Card from "@/components/ui/Card";

export default function CoreInsight() {
  const comparison = [
    {
      icon: DollarSign,
      title: "Money",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      points: [
        "Solves today's problem",
        "One-time benefit",
        "Temporary relief",
      ],
    },
    {
      icon: GraduationCap,
      title: "Skills",
      color: "text-primary",
      bgColor: "bg-blue-50",
      points: [
        "Creates long-term security",
        "Permanent growth",
        "Career transformation",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-light">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-neutral-dark mb-12"
        >
          Why skills matter more than money
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {comparison.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`${item.bgColor} border-2`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-white ${item.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-dark">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`${item.color} mt-1`}>•</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
