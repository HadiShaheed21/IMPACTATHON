"use client";

import { motion } from "framer-motion";
import { Clock, IndianRupee, TrendingDown } from "lucide-react";
import Card from "@/components/ui/Card";

export default function Problem() {
  const stats = [
    { icon: Clock, label: "12 Hours/Day", color: "text-orange-600" },
    { icon: IndianRupee, label: "₹15,000/Month", color: "text-red-600" },
    { icon: TrendingDown, label: "Same Role for 3+ Years", color: "text-gray-600" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-6">
              Effort isn't the problem. Direction is.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Many gig workers work full-time hours but remain in the same role
              for years. Income increases only by working longer hours, not by
              gaining skills.
            </p>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center"
                  hover
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <p className="text-lg font-semibold text-neutral-dark">
                    {stat.label}
                  </p>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
