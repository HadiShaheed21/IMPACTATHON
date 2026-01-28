"use client";

import { motion } from "framer-motion";
import { Handshake, Wrench, Clock, TrendingUp } from "lucide-react";
import Card from "@/components/ui/Card";

export default function WhyDifferent() {
  const features = [
    {
      icon: Handshake,
      title: "Human-Guided Skill Growth",
      description:
        "Not automated courses. Real guidance from people who've walked the path.",
      color: "text-primary",
      bgColor: "bg-blue-50",
    },
    {
      icon: Wrench,
      title: "Skills Built from Real Work",
      description:
        "Practice scenarios from actual job situations, not theoretical lessons.",
      color: "text-secondary",
      bgColor: "bg-orange-50",
    },
    {
      icon: Clock,
      title: "Designed for Busy Days",
      description:
        "15-30 minute practice sessions that fit in your breaks. No hours-long videos.",
      color: "text-success",
      bgColor: "bg-green-50",
    },
    {
      icon: TrendingUp,
      title: "Progress = Roles, Not Lessons",
      description:
        "Measure growth by roles you can access, not courses completed.",
      color: "text-accent",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-light">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-neutral-dark mb-12"
        >
          Built Different, Built Better
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`${feature.bgColor} h-full`} hover>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-white ${feature.color} flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-dark mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
